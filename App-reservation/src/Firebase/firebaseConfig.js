// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnesaE4YyHunx1khxPbGozJPjLbLReN34",
  authDomain: "coders-ba28a.firebaseapp.com",
  projectId: "coders-ba28a",
  storageBucket: "coders-ba28a.appspot.com",
  messagingSenderId: "496638802892",
  appId: "1:496638802892:web:05d93fff42940943673b69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore (app);