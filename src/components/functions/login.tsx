import { useEffect, useState } from 'react'
import { renderHeader } from './renderHeader'
// import LoginBox from '../LoginBox/LoginBox'

export default function Login() {

    const [authState, setAuthState] = useState(null)
    
    useEffect(() => {
        //@ts-expect-error
        onAuthStateChanged(auth, (userData) => {
            if(userData) {
                setAuthState(userData)
                console.log(userData)
            }
        })
    }, [authState])
    return (
        <>
            {renderHeader(location.href, authState)}
        </>
    )
}

//Load Styles
require('styles/lgnregBox.scss')