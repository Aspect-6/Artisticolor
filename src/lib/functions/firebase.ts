import { initializeApp } from "./app"
import { getAuth } from "./auth"
import { getFirestore } from "./firestore"
/** Firebase App configuration used to connect to firebase app */
export const app = initializeApp({
    apiKey: "AIzaSyC0AlemsEruFplUQFL5DVRg6oQtmfrhz_I",
    authDomain: "artisticolor-a55cf.firebaseapp.com",
    databaseURL: "https://artisticolor-a55cf-default-rtdb.firebaseio.com",
    projectId: "artisticolor-a55cf",
    storageBucket: "artisticolor-a55cf.appspot.com",
    messagingSenderId: "777420719697",
    appId: "1:777420719697:web:55131e8a4f5144f1891a70",
    measurementId: "G-JZ1H6Y93YL",
})
/** Get firebase auth instance with firebase app */
export const auth = getAuth(app)
/** Get firebase firestore instance with firebase app */
export const db = getFirestore(app)
