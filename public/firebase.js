// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7HgrSyEdUjLoGvAZ39PhZQPAeDhJ7yoc",
  authDomain: "elderly-digital-literacy-app.firebaseapp.com",
  projectId: "elderly-digital-literacy-app",
  storageBucket: "elderly-digital-literacy-app.firebasestorage.app",
  messagingSenderId: "759913200943",
  appId: "1:759913200943:web:fe6cdf3079498f2b1075da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
