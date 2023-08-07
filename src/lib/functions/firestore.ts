import { getFirestore } from "@firebase/firestore/lite"
import { app } from "./app"

/**
 * Get firebase firestore instance with firebase app
 */
export const db = getFirestore(app)

export {
    DocumentData,
    DocumentReference,
    collection,
    doc,
    getDoc,
    setDoc,
} from "@firebase/firestore/lite"
