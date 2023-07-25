import { getAuth } from '@firebase/auth'
import { app } from './app'

export const auth = getAuth(app)

export {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from '@firebase/auth'
