import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XzB4YtZyUeAPouJxIhzRetJpyJRpaCE",
  authDomain: "calmari-authentication.firebaseapp.com",
  projectId: "calmari-authentication",
  storageBucket: "calmari-authentication.firebasestorage.app",
  messagingSenderId: "354893596045",
  appId: "1:354893596045:web:d48f4070af69a58eb669c4",
  measurementId: "G-YJX9W67HWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };