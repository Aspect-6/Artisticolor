import fb from '@firebase/exports'

type userType = {
	auth: {}
	email: HTMLInputElement
	username: HTMLInputElement
	password: HTMLInputElement
}

export default {
	createUser({ auth, email, username, password }: userType) {
		fb.createUserWithEmailAndPassword(auth, email.value, password.value)
			.then((userCredential: { user: { uid: string } }) => {
				const user = userCredential.user

				const KEY = require('./crypto').generateKey()

				//Encrypt user data
				const encryptedData = require('./crypto').encrypt(
					[email.value, username.value, password.value],
					KEY
				)

				// Set user displayName and photoURL
				fb.updateProfile(user, {
					displayName: username.value,
					photoURL: 'http://localhost:8000/icons/usercon.png',
				})

				// Add encrypted data to database along with key
				fb.set(fb.ref(fb.db, `Users/${user.uid}`), {
					Email: encryptedData[0],
					Username: encryptedData[1],
					Password: encryptedData[2],
					Key: KEY,
				})

				//Redirect
				location.href = '.profile.html'
			})
			.catch((error: { code: string }) => {
				const errorcode = error.code

				if (errorcode == 'auth/invalid-email') {
					document.getElementById('message').innerHTML =
						'Please enter a valid email'
					require('error/shake')(email)
				}
				if (errorcode == 'auth/email-already-in-use') {
					document.getElementById('message').innerHTML =
						'Email is currently in use'
					require('error/shake')(email)
				}
				if (errorcode == 'auth/weak-password') {
					document.getElementById('message').innerHTML =
						'Password should be at least 6 characters'
					require('error/shake')(password)
				}
			})
	},
	signIn({ auth, email, password }: userType) {
		console.log(email, password)
		fb.signInWithEmailAndPassword(auth, email.value, password.value)
			.then(() => require('@anim/login/box').close())
			.catch(() => {
				//Shake input boxes
				require('error/shake')(email, password)

				//Display error message
				document.getElementById('message').innerHTML =
					'Invalid email or password'
			})
	},
	signOut({ auth }: userType) {
		fb.signOut(auth).then((location.href = 'index.html'))
	},

	async decryptCredentials(uid: string) {
		//require('./firebase').getData(uid)
		return [
			(await fb.get(fb.ref(fb.db, `Users/${uid}/Password`))).val(),
			(await fb.get(fb.ref(fb.db, `Users/${uid}/Key`))).val(),
		]
	},
}
