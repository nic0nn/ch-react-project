import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0izj-JCcrrUe7J69HwuJX8A18nN4CmQo",
  authDomain: "tecno-nyn.firebaseapp.com",
  projectId: "tecno-nyn",
  storageBucket: "tecno-nyn.appspot.com",
  messagingSenderId: "645179745806",
  appId: "1:645179745806:web:7e60c81f14e8b587a6fe5f"
};

export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);
export const firestore = getFirestore(firebase);

