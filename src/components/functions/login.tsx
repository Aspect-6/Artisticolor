import { auth, onAuthStateChanged } from '@lib/functions/auth'
import { useEffect, useState } from 'react'

export default function Login() {
	const [currentAuthState, setCurrentAuthState] = useState(null)

	useEffect(() => {
		onAuthStateChanged(auth, (userData) => {
			if (userData) {
				setCurrentAuthState(userData)
				console.log(userData)
			}
		})
	}, [])
	return currentAuthState
}
