import { getFirestore } from "@firebase/firestore/lite"
import { app } from "./app"

export const db = getFirestore(app)

export { collection, getDoc, setDoc, doc, DocumentData, DocumentReference } from "@firebase/firestore/lite"
