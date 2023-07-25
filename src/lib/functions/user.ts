import {
	auth,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from './auth'
import { db, get, ref, set } from './database'

interface userType {
	email: HTMLInputElement
	username: HTMLInputElement
	password: HTMLInputElement
}

export default {
	createUser({ email, username, password }: userType) {
		createUserWithEmailAndPassword(auth, email.value, password.value)
			.then((userCredential) => {
				const user = userCredential.user

				const KEY = require('./crypto').generateKey()

				//Encrypt user data
				const encryptedData = require('./crypto').encrypt(
					[email.value, username.value, password.value],
					KEY
				)

				// Set user displayName and photoURL
				updateProfile(user, {
					displayName: username.value,
					photoURL: 'http://localhost:8000/icons/usercon.png',
				})

				// Add encrypted data to database along with key
				set(ref(db, `Users/${user.uid}`), {
					Email: encryptedData[0],
					Username: encryptedData[1],
					Password: encryptedData[2],
					Key: KEY,
				})

				//Redirect
				location.href = './profile.html'
			})
			.catch((error) => {
				const errorcode = error.code

				if (errorcode == 'auth/invalid-email') {
					document.getElementById('message').innerHTML =
						'Please enter a valid email'
					require('@error/shake')(email)
				}
				if (errorcode == 'auth/email-already-in-use') {
					document.getElementById('message').innerHTML =
						'Email is currently in use'
					require('@error/shake')(email)
				}
				if (errorcode == 'auth/weak-password') {
					document.getElementById('message').innerHTML =
						'Password should be at least 6 characters'
					require('@error/shake')(password)
				}
			})
	},
	signIn(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password).catch(() => 'error')
	},
	signOut() {
		signOut(auth).then(() => (location.href = 'index.html'))
	},

	async decryptCredentials(uid: string) {
		//require('./firebase').getData(uid)
		return [
			(await get(ref(db, `Users/${uid}/Password`))).val(),
			(await get(ref(db, `Users/${uid}/Key`))).val(),
		]
	},
}
