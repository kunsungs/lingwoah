import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPzheSOfMcc-uWk8AvjbU9QJQNiz3N_6k",
  authDomain: "lingtrack-7f416.firebaseapp.com",
  projectId: "lingtrack-7f416",
  storageBucket: "lingtrack-7f416.appspot.com",
  messagingSenderId: "184638473870",
  appId: "1:184638473870:web:c87336ed22e9271bd52bdf",
  measurementId: "G-Q57844DLC4"
};

export default firebaseConfig;
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

