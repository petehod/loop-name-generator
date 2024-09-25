"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { User } from "@/schema";
import Loading from "@/components/Loading";

interface UserContextType {
  user: FirebaseUser | null;
  userProfile: User | null;
  isLoggedIn: boolean;
  emailVerified: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const userDocRef = doc(db, "users", firebaseUser.uid);
        setLoading(true);

        const unsubscribeFromUserProfile = onSnapshot(
          userDocRef,
          (userSnapshot) => {
            if (userSnapshot.exists()) {
              setUserProfile(userSnapshot.data() as User);
            } else {
              setUserProfile(null);
            }
            setLoading(false);
          }
        );

        return () => unsubscribeFromUserProfile();
      } else {
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const value = useMemo(
    () => ({
      user,
      userProfile,
      isLoggedIn: !!user,
      loading,
      emailVerified: user?.emailVerified || false,
      signOut
    }),
    [user, userProfile, loading]
  );

  if (loading) {
    return <Loading />;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
