import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnxbo4GpA89_0yarIR4gU8WX8de2r6RMY",
  authDomain: "project01-333da.firebaseapp.com",
  projectId: "project01-333da",
  storageBucket: "project01-333da.appspot.com",
  messagingSenderId: "613250951885",
  appId: "1:613250951885:web:a314cb0933cd90e751d784",
  measurementId: "G-JZY814RVGE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}