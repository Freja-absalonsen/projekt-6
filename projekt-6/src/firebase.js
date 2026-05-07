import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database" 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJMuigrrDt38Iza94iScQSyNErR7TwSfg",
  authDomain: "mikrobageri-projekt6.firebaseapp.com",
  databaseURL: "https://mikrobageri-projekt6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mikrobageri-projekt6",
  storageBucket: "mikrobageri-projekt6.firebasestorage.app",
  messagingSenderId: "310321972222",
  appId: "1:310321972222:web:fb6f539149f2d5148ef6af"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const firestore = getFirestore(app)

export {db, firestore};
