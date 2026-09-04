
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e577b.firebaseapp.com",
  projectId: "interviewiq-e577b",
  storageBucket: "interviewiq-e577b.firebasestorage.app",
  messagingSenderId: "911748523307",
  appId: "1:911748523307:web:f685e4a70f78d6f127116e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}