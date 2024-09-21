import { auth, db } from "@/firebase";
import { User } from "@/schema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
    await setDoc(userRef, {
      userData
    });
  }
};
