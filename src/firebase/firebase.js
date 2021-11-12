import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseui from "firebaseui";


const { REACT_APP_FB_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: "supermercado-e042f.firebaseapp.com",
  projectId: "supermercado-e042f",
  storageBucket: "supermercado-e042f.appspot.com",
  messagingSenderId: "153862341676",
  appId: "1:153862341676:web:bbed0c93d130b04b3f7d89",
};
const uiConfig = {
  singOptions:[
    firebase.auth.EmailAuthProvider_PROVIDER_ID,
    firebase.auth.GoogleAuthProvider_PROVIDER_ID,
  ],
  
};

initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth= firebase.auth();


db.settings({
  timestampsInSnapshots: true,
});

export const startUi =(elementId)=>{
  const ui= new firebaseui.auth.AuthId(auth);
  ui.start(elementId , uiConfig);
};
