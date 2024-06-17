// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQxqd-hRqVlyrcWjj2ri-gDSKFo6ebw7s",
    authDomain: "jil-3000.firebaseapp.com",
    projectId: "jil-3000",
    storageBucket: "jil-3000.appspot.com",
    messagingSenderId: "217097083863",
    appId: "1:217097083863:web:bdc3355ed578b4e6eb0992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)