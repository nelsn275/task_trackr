// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD7RufTjoiMTQ4i3XidaJtvvWNBXHfquE",
  authDomain: "task-trackr-310.firebaseapp.com",
  projectId: "task-trackr-310",
  storageBucket: "task-trackr-310.appspot.com",
  messagingSenderId: "542307914799",
  appId: "1:542307914799:web:e5d05703127158089a22da",
  measurementId: "G-REM4F1EWF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
