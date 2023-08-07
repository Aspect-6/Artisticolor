import { auth } from '@lib/functions/firebase'
import { onAuthStateChanged } from '@lib/functions/auth'
import { useEffect, useState } from 'react'
import { User } from '@firebase/auth'

export default function useLogin() {
	const [currentUser, setCurrentUser] = useState<User | null>(null)

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
