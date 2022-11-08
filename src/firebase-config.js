import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC5aO4wtCcOyzBDjUIjI4lBHFTKyAyPfUw",
    authDomain: "shelter-2e669.firebaseapp.com",
    projectId: "shelter-2e669",
    storageBucket: "shelter-2e669.appspot.com",
    messagingSenderId: "783746500479",
    appId: "1:783746500479:web:a0bc4ad2fedb14c8537c4a",
    measurementId: "G-B6DLYY3T5Q"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)