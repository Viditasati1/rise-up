// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXmPZkTXaiKTN1k3mYFz9yVpPUhjavbAg",
  authDomain: "rise-up-1a912.firebaseapp.com",
  projectId: "rise-up-1a912",
  storageBucket: "rise-up-1a912.firebasestorage.app",
  messagingSenderId: "420527456671",
  appId: "1:420527456671:web:9d1d772ed8e56ba59b7daa",
  measurementId: "G-D9V7V2ZZSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics
export const auth = getAuth(app); // Exporting the auth object
const analytics = getAnalytics(app);

export default app;
