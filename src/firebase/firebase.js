// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage" // Import Firebase Auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZXfDTd4RhOPcajVXe2Ry0l5QS5YGGz8",
  authDomain: "uavehicle-27526.firebaseapp.com",
  projectId: "uavehicle-27526",
  storageBucket: "uavehicle-27526.firebasestorage.app",
  messagingSenderId: "24401357458",
  appId: "1:24401357458:web:90b36b1e231cac159a144b",
  measurementId: "G-9BC9PKCHQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Authentication
const storage = getStorage(app);

export { db, auth, app, storage };