// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBRZP4b2cOJxHkL_bMZsQY4yaecjZBCA0",
  authDomain: "grandcentral-44bcc.firebaseapp.com",
  projectId: "grandcentral-44bcc",
  storageBucket: "grandcentral-44bcc.appspot.com",
  messagingSenderId: "31486785762",
  appId: "1:31486785762:web:3229b4b1a5436e2ef2c6bb",
  measurementId: "G-C2W8HENNM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, app, firestore}