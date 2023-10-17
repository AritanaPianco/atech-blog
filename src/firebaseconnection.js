import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCSI9-xxLiiRYY_1P7YZyKClsSE7B9nDoQ",
  authDomain: "tecnology-blog.firebaseapp.com",
  projectId: "tecnology-blog",
  storageBucket: "tecnology-blog.appspot.com",
  messagingSenderId: "166833198866",
  appId: "1:166833198866:web:227ff183299af68c9005cb",
  measurementId: "G-KYVZ767LBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)


export { db, auth, storage}
