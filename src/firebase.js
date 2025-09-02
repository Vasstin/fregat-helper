// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // <-- добавляем

const firebaseConfig = {
  apiKey: "AIzaSyBwsX0TVVIur43A6cbHtZxTTrWYXaVDfPs",
  authDomain: "fregat-helper.firebaseapp.com",
  projectId: "fregat-helper",
  storageBucket: "fregat-helper.firebasestorage.app",
  messagingSenderId: "713616299733",
  appId: "1:713616299733:web:3749cfbbcab76769ec345c",
  measurementId: "G-EDN23ZPLRW",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация Firebase Auth
export const auth = getAuth(app); // <-- экспортируем auth
export default app;
