// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQhmDRDiqsXHE0v7mL-0OMDIgiIr2P2F4",
  authDomain: "realtor-clone-react-518c2.firebaseapp.com",
  projectId: "realtor-clone-react-518c2",
  storageBucket: "realtor-clone-react-518c2.appspot.com",
  messagingSenderId: "1088886617473",
  appId: "1:1088886617473:web:861c2749289b1e414d2480"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
