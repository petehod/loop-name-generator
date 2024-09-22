import { auth, db } from "@/firebase";
import { User } from "@/schema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  setDoc,
  updateDoc
} from "firebase/firestore";

export const FirebaseService = {
  createUser: async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  },
  addUser: async (userData: User) => {
    const userRef = doc(db, "users", userData.id);
    await setDoc(userRef, userData);
  },
  loginUser: async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  updateSavedNames: async (userId: string, newName: string) => {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      savedNames: arrayUnion(newName)
    });
  },
  removeSavedName: async (userId: string, nameToRemove: string) => {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      savedNames: arrayRemove(nameToRemove)
    });
  }
};
