import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMyHcvBY70kmAGa-8BNMSMGI8ke-UvWPU",
  authDomain: "db-talento.firebaseapp.com",
  projectId: "db-talento",
  storageBucket: "db-talento.firebasestorage.app",
  messagingSenderId: "1030908520487",
  appId: "1:1030908520487:web:5fc3dd76065b1e821f8602"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
