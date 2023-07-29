import { auth, onAuthStateChanged } from '@lib/functions/auth'
import { useEffect, useState } from 'react'

export default function useDisplayName() {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		onAuthStateChanged(auth, (userData) => {
			if (userData) {
				setCurrentUser(userData)
				console.log(userData)
			}
		})
	}, [])
	return currentUser ? currentUser : { displayName: null }
}
