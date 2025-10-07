import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBwsX0TVVIur43A6cbHtZxTTrWYXaVDfPs",
  authDomain: "fregat-helper.firebaseapp.com",
  projectId: "fregat-helper",
  storageBucket: "fregat-helper.firebasestorage.app",
  messagingSenderId: "713616299733",
  appId: "1:713616299733:web:3749cfbbcab76769ec345c",
  measurementId: "G-EDN23ZPLRW",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;