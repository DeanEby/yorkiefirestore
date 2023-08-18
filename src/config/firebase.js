
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV68uDidWKcWcDrCdSX2IHwKg6-c9Eo30",
  authDomain: "yorkie-server.firebaseapp.com",
  projectId: "yorkie-server",
  storageBucket: "yorkie-server.appspot.com",
  messagingSenderId: "1086157890844",
  appId: "1:1086157890844:web:e06721011f0bf5d26686d9",
  measurementId: "G-F7RP0NRCKW"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();