
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHDlWFyuXh_2Eky-9T2SCGTMlUMvhDTn0",
  authDomain: "let-s-chat-3eaa1.firebaseapp.com",
  projectId: "let-s-chat-3eaa1",
  storageBucket: "let-s-chat-3eaa1.appspot.com",
  messagingSenderId: "286289475703",
  appId: "1:286289475703:web:e8ca23785608b1a3aa6e72"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
