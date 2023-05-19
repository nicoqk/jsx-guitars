import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBba_igu6oI3OOekcx6KUxMCouSEqi_qws",
  authDomain: "jsx-guitars.firebaseapp.com",
  projectId: "jsx-guitars",
  storageBucket: "jsx-guitars.appspot.com",
  messagingSenderId: "39456228318",
  appId: "1:39456228318:web:a9dcd101e62bf9e91a534f",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
