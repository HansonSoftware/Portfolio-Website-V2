// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLR25eqaAGrgtUerH1D87-PLvQelE-FnU",
    authDomain: "portfolioblog-b061b.firebaseapp.com",
    projectId: "portfolioblog-b061b",
    storageBucket: "portfolioblog-b061b.appspot.com",
    messagingSenderId: "673486694891",
    appId: "1:673486694891:web:fc42776b781fd5faefd1ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();