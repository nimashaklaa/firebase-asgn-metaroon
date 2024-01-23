import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFunctions} from 'firebase/functions'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage";
export abstract class FirebaseConfig{
    public static webFirebaseConfig ={
        apiKey: "AIzaSyB9B1puKwpY2o7AJKXVSKb0a1G2qbwyqsc",
        authDomain: "fir-example-dfa02.firebaseapp.com",
        projectId: "fir-example-dfa02",
        storageBucket: "fir-example-dfa02.appspot.com",
        messagingSenderId: "434731570688",
        appId: "1:434731570688:web:452de5291e1fc5724d6ae5"
    }

}
export const firebaseApp = initializeApp(FirebaseConfig.webFirebaseConfig)

export const auth = getAuth(firebaseApp)

export const db = getFirestore(firebaseApp)

export const storage = getStorage(firebaseApp)

export const functions = getFunctions(firebaseApp)

