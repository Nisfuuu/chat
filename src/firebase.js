import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABH_3b2OKIAqkSSvvXVwf292fbayxzDGY",
  authDomain: "chat-b9764.firebaseapp.com",
  projectId: "chat-b9764",
  storageBucket: "chat-b9764.appspot.com",
  messagingSenderId: "50347275938",
  appId: "1:50347275938:web:50ad076dffcaaea5e589fb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
