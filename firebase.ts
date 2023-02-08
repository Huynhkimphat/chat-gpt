import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4gMeEwfFna4QqefGaXu47ERggS1EmAng",
  authDomain: "chat-gpt-e74ff.firebaseapp.com",
  projectId: "chat-gpt-e74ff",
  storageBucket: "chat-gpt-e74ff.appspot.com",
  messagingSenderId: "589694348056",
  appId: "1:589694348056:web:f4cfec13b7a00858790c6d",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
