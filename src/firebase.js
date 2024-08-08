// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6uCUAukhRH4tl0ucftnkUTXlVgNT_3ec",
  authDomain: "assignment-c15f9.firebaseapp.com",
  projectId: "assignment-c15f9",
  storageBucket: "assignment-c15f9.appspot.com",
  messagingSenderId: "67444821382",
  appId: "1:67444821382:web:cfc5f4caa709fbae07f007",
  measurementId: "G-07QYT20BYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database };
