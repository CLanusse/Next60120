import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfN2osbsOY6ETk4ENu1eRbtna1UCcD4F8",
  authDomain: "rj60120-75ccd.firebaseapp.com",
  projectId: "rj60120-75ccd",
  storageBucket: "rj60120-75ccd.appspot.com",
  messagingSenderId: "461237193466",
  appId: "1:461237193466:web:24b2331968bcae58e09743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
