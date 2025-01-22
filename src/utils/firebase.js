// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWDPRd27uTyQuSmhOYqsKOyDyopfkwTdg",
  authDomain: "netflix-gpt-15ff8.firebaseapp.com",
  projectId: "netflix-gpt-15ff8",
  storageBucket: "netflix-gpt-15ff8.firebasestorage.app",
  messagingSenderId: "1022570390602",
  appId: "1:1022570390602:web:ce1d16775cb2f1692ab2b3",
  measurementId: "G-PZ8CYEFR3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()