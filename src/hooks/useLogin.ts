import { auth, onAuthStateChanged } from '@lib/functions/auth'
import { useEffect, useState } from 'react'
import { User } from '@firebase/auth'

export default function useLogin() {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		onAuthStateChanged(auth, (userData) => {
			if (userData) {
				setCurrentUser(userData)
				console.log(userData)
			}
		})
	}, [])
    
	return <User | null>currentUser
}
