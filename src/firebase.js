import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwO80hjrnsa_lVOcSFT4Us9OxDeee7s-M",
    authDomain: "tasktrackr-80e8f.firebaseapp.com",
    projectId: "tasktrackr-80e8f",
    storageBucket: "tasktrackr-80e8f.appspot.com",
    messagingSenderId: "891739357090",
    appId: "1:891739357090:web:143632d4068c0d972c3cfb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;