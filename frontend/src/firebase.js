// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eazypg-cf2d9.firebaseapp.com",
  projectId: "eazypg-cf2d9",
  storageBucket: "eazypg-cf2d9.firebasestorage.app",
  messagingSenderId: "611605158291",
  appId: "1:611605158291:web:e6ebf5ae1a1208d15ef066",
  measurementId: "G-VSWBX2CYW5"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);