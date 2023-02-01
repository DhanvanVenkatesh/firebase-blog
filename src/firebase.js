import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyVM7ZZz-PC-MehR08gM7knmnk9OJRmek",
  authDomain: "reactproject-fb052.firebaseapp.com",
  projectId: "reactproject-fb052",
  storageBucket: "reactproject-fb052.appspot.com",
  messagingSenderId: "237759447815",
  appId: "1:237759447815:web:60369a78e574b34db2fba2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
