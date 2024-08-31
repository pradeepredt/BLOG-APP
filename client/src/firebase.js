// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-75f07.firebaseapp.com",
  projectId: "mern-blog-75f07",
  storageBucket: "mern-blog-75f07.appspot.com",
  messagingSenderId: "487559859723",
  appId: "1:487559859723:web:8c2f7d6c6296d3e5b9010e",
  measurementId: "G-P1MGXQF77D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);