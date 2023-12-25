import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCHPpZFvIL4gH7iYEdWJp7kQ7utoSoHKqE",
  authDomain: "live-journal.firebaseapp.com",
  projectId: "live-journal",
  storageBucket: "live-journal.appspot.com",
  messagingSenderId: "746879721297",
  appId: "1:746879721297:web:aff367114a68d729307d70",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app)

export { auth, db, storage, app };
