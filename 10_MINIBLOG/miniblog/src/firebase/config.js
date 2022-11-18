import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzQG1c_isZGFUBTcow_t7i-nsuAKRaqpk",
    authDomain: "miniblog-64a15.firebaseapp.com",
    projectId: "miniblog-64a15",
    storageBucket: "miniblog-64a15.appspot.com",
    messagingSenderId: "799082134668",
    appId: "1:799082134668:web:a29397be82242a4d218fa9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };