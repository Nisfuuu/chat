import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzN2a3fXepSAvEp4idUZ6-0xf3cKxL-Ok",
  authDomain: "chat-2c697.firebaseapp.com",
  projectId: "chat-2c697",
  storageBucket: "chat-2c697.appspot.com",
  messagingSenderId: "159105483007",
  appId: "1:159105483007:web:3537f3deec5509236cccca",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
