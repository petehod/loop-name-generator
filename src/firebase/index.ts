import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlt6_hmp_qYRbhuhkUIcp3wilsmqzdBB4",
  authDomain: "name-generator-66ddf.firebaseapp.com",
  projectId: "name-generator-66ddf",
  storageBucket: "name-generator-66ddf.firebasestorage.app",
  messagingSenderId: "343806374443",
  appId: "1:343806374443:web:f93bcca92ccdefd266f06e",
  measurementId: "G-6YT75YY5V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
