// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdHHF89vOpjCWEn8JddCy8DHtEhhDOcDA",
  authDomain: "fir-authentication-prac-12b58.firebaseapp.com",
  projectId: "fir-authentication-prac-12b58",
  storageBucket: "fir-authentication-prac-12b58.appspot.com",
  messagingSenderId: "984718446313",
  appId: "1:984718446313:web:74f3a689341bd5e003ea78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;