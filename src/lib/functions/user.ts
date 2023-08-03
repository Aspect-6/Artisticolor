import { ROUTES } from '@config/browser-routes.config'
import {
	auth,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from './auth'
import Crypto from './crypto'
import { db, get, ref, set } from './database'

export default {
	createUser(
		email: string,
		username: string,
		password: string,
		setFormError: React.Dispatch<React.SetStateAction<string>>
	) {
		return createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user

				const KEY = Crypto.generateKey()

				//Encrypt user data
				const encryptedData = Crypto.encrypt([email, username, password], KEY)

				// Set user displayName and default photoURL
				updateProfile(user, {
					displayName: username,
					photoURL: `${ROUTES.ICONS}/usercon.png`,
				})

				// Add encrypted data to database along with key
				set(ref(db, `Users/${user.uid}`), {
					Email: encryptedData[0],
					Username: encryptedData[1],
					Password: encryptedData[2],
					Key: KEY,
				})

				//Redirect
				location.href = ROUTES.INDEX
			})
			.catch((error) => {
				// if (errorcode == 'auth/invalid-email') {
				// 	document.getElementById('message').innerHTML =
				// 		'Please enter a valid email'
				// }
				if (error.code == 'auth/email-already-in-use') {
					setFormError('Email is already in use')
				}
				if (error.code == 'auth/weak-password') {
					setFormError('Password should be at least 6 characters')
				}
				return error.code
			})
	},
	signIn(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password).catch(() => 'error')
	},
	signOut() {
		signOut(auth).then(() => (location.href = ROUTES.INDEX))
	},

	async decryptCredentials(uid: string) {
		//require('./firebase').getData(uid)
		return [
			(await get(ref(db, `Users/${uid}/Password`))).val(),
			(await get(ref(db, `Users/${uid}/Key`))).val(),
		]
	},
}
