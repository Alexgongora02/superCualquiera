import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const { REACT_APP_FB_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: "supermercado-e042f.firebaseapp.com",
  projectId: "supermercado-e042f",
  storageBucket: "supermercado-e042f.appspot.com",
  messagingSenderId: "153862341676",
  appId: "1:153862341676:web:bbed0c93d130b04b3f7d89",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
