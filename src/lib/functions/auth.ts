import { getAuth } from "@firebase/auth"
import { app } from "./app"

/**
 * Get firebase auth instance with firebase app
 */
export const auth = getAuth(app)

export {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "@firebase/auth"
