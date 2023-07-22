import { useEffect, useState } from 'react'
// import { renderHeader } from './renderHeader'
// import LoginBox from '../LoginBox/LoginBox'

export default function Login() {
	const [currentAuthState, setCurrentAuthState] = useState(null)

	useEffect(() => {
		//@ts-expect-error
		onAuthStateChanged(auth, (userData) => {
			if (userData) {
				setCurrentAuthState(userData)
				console.log(userData)
			}
		})
	}, [currentAuthState])
	return currentAuthState
	// (
	//     <>
	//     {/* {renderHeader(location.href, currentAuthState)} */}
	// </>)
}