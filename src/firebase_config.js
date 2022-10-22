import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDjZACQAVz19uOhKWn50Dqe6b2NJNakD44",
    authDomain: "pingme-7645f.firebaseapp.com",
    projectId: "pingme-7645f",
    storageBucket: "pingme-7645f.appspot.com",
    messagingSenderId: "323217383277",
    appId: "1:323217383277:web:28567851d97ac136820464"
};

const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

export { firebase, auth };