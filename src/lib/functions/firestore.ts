import { getFirestore } from '@firebase/firestore/lite'
import { app } from './app'

export const fdb = getFirestore(app)

export { collection, addDoc, getDoc, getDocs, setDoc, doc } from '@firebase/firestore/lite'