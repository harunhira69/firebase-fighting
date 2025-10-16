// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz50tEtIeN9GYD0s4wuy_b1EOqHniNWGo",
  authDomain: "fir-fighting.firebaseapp.com",
  projectId: "fir-fighting",
  storageBucket: "fir-fighting.firebasestorage.app",
  messagingSenderId: "839998913489",
  appId: "1:839998913489:web:99453bafd47a7c2ddcfef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);