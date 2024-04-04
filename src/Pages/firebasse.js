// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQMuesASM0hMKPIUMKgXEVzp2PB0h5zO4",
  authDomain: "dragon-news-711d6.firebaseapp.com",
  projectId: "dragon-news-711d6",
  storageBucket: "dragon-news-711d6.appspot.com",
  messagingSenderId: "792795347076",
  appId: "1:792795347076:web:5504f1207b735473e3aad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;