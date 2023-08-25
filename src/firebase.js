// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFlv9z6qIwyyk2iQiLPe1YJDKYv85VOdg",
  authDomain: "react-chat-256a4.firebaseapp.com",
  projectId: "react-chat-256a4",
  storageBucket: "react-chat-256a4.appspot.com",
  messagingSenderId: "109549830938",
  appId: "1:109549830938:web:691a3c08b7b8546714e2a3",
  measurementId: "G-PS8RT7ZST8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);