
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC63iYgqkT-5XI-4MGsl8SpiibCNLSYpEA",
  authDomain: "my-hotstar-project.firebaseapp.com",
  projectId: "my-hotstar-project",
  storageBucket: "my-hotstar-project.appspot.com",
  messagingSenderId: "762366409901",
  appId: "1:762366409901:web:9b20578092576256869a24",
  measurementId: "G-0S12ELR0G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);