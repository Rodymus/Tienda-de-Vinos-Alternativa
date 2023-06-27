// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeusHBWciexV09dgKmY_7IDqqhjmfQsgw",
  authDomain: "tiendavinos-rcg.firebaseapp.com",
  projectId: "tiendavinos-rcg",
  storageBucket: "tiendavinos-rcg.appspot.com",
  messagingSenderId: "1075526627816",
  appId: "1:1075526627816:web:cc27fe3dc06b5bbb26345d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);