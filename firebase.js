// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7TAo2QCflYKMh_TIzdQYTaDJfZnqo8Y",
  authDomain: "arnav-80306.firebaseapp.com",
  projectId: "arnav-80306",
  storageBucket: "arnav-80306.appspot.com",
  messagingSenderId: "234889083837",
  appId: "1:234889083837:web:81ebc63281674b48c030d4",
  measurementId: "G-6W3T5PGT7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);