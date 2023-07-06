// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0uNUaynVzuDgR5m1jW0-1b4pFL3b3iEM",
  authDomain: "react-cursos-628d9.firebaseapp.com",
  projectId: "react-cursos-628d9",
  storageBucket: "react-cursos-628d9.appspot.com",
  messagingSenderId: "341097523850",
  appId: "1:341097523850:web:67dd8b1d4f741e0064db73"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );