import { ROUTES } from "@config/browser-routes.config"
import { auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "./auth"
import Crypto from "./crypto"
import { db, get, ref, set } from "./database"

import { fdb, setDoc, doc } from "./firestore"

export default {
    createUser(email: string, username: string, password: string, setFormError: React.Dispatch<React.SetStateAction<string>>) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user

                const KEY = Crypto.generateKey()

                //Encrypt user data
                const encryptedData = Crypto.encrypt([email, username, password], KEY)

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
                const userDoc = doc(fdb, "Users", `${user.uid}`)
  
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
    signIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password).catch(() => "error")
    },
    signOut() {
        signOut(auth).then(() => (location.href = ROUTES.INDEX))
    },

    async decryptCredentials(uid: string) {
        //require('./firebase').getData(uid)
        return [(await get(ref(db, `Users/${uid}/Password`))).val(), (await get(ref(db, `Users/${uid}/Key`))).val()]
    },
}
