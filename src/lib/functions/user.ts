import { ROUTES } from "@config/browser-routes.config"
import {
    signOut as _signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "./auth"
import Crypto from "./crypto"
import { auth, db } from "./firebase"
import {
    DocumentData,
    DocumentReference,
    doc,
    getDoc,
    setDoc,
} from "./firestore"

export default {
    /**
     * Creates a user to store in firestore with inputted email and password
     * @params `email`, `username`, and `password` is submitted by user in an attempt to create an account
     * @param setFormError - React setState function to set the error message of the form to display error message
     * @returns A promise containing user credentials or any error that might have occured
     */
    async createUser(
        email: string,
        username: string,
        password: string,
        setFormError: React.Dispatch<React.SetStateAction<string>>
    ): Promise<string> {
        return await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user

                const KEY = Crypto.generateKey()

                //Encrypt user data
                const encryptedData = Crypto.encrypt(
                    [email, username, password],
                    KEY
                )

                const userData: FirestoreUser = {
                    email: encryptedData[0],
                    username: encryptedData[1],
                    password: encryptedData[2],
                    key: KEY,
                }

                // Set user displayName and default photoURL
                await updateProfile(user, {
                    displayName: username,
                    photoURL: `${ROUTES.ICONS}/usercon.png`,
                })
                const userDoc = doc(db, `Users${user.uid}`)

                await setDoc(userDoc, userData)

                location.href = ROUTES.INDEX
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    setFormError("Email is already in use")
                }
                if (error.code == "auth/weak-password") {
                    setFormError("Password should be at least 6 characters")
                }
                return error.code
            })
    },
    /**
     * Sign in user with inputted email and password
     * @param email - Email submitted by user in an attempt to sign in
     * @param password - Password submitted by user in an attempt to sign in
     * @returns `UserCredential` or **`error`** if there was an error
     */
    async signIn(email: string, password: string) {
        return await signInWithEmailAndPassword(auth, email, password).catch(
            () => "error"
        )
    },
    /** Signs out user and redirects them to homepage */
    signOut() {
        _signOut(auth).then(() => (location.href = ROUTES.INDEX))
    },
    /**
     * @param userDoc - Firestore user document reference path constructed of Users/uid
     * @param fields - All keys of the `FirestoreUser` interface allowed to be decrypted with `Crypto.decrypt()`
     * @returns Promise containing array of objects with the decrypted values of the keys passed in
     */
    async decryptCredentials(
        userDoc: DocumentReference<DocumentData, DocumentData>,
        fields: FirestoreUserValidKeys[]
    ) {
        const data = <FirestoreUser>(
            await getDoc(userDoc).then(({ data }) => data())
        )
        return fields.map((field) => {
            return { [field]: Crypto.decrypt(data[field], data.key) }
        })
    },
}
