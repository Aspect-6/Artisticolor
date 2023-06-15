import { useEffect, useRef, useState } from 'react'
import InputWrap from "./InputWrap";
import { signInWithEmailAndPassword } from '@firebase/auth';

export default function LoginBox() {
    const handleClick = () => require('anim/login/box').close();

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = () => {
        require('lib/functions/user').signIn(
            auth,
            emailRef.current,
            passwordRef.current
        )
    };
    
    return (
        <form id="login-box" onSubmit={(e) => e.preventDefault()} action="./profile.html">
            <h1>Login</h1>
            
            <button id="close" type="button" onClick={handleClick}>
                <img src="./icons/close.png" alt="close" height="35px" />
            </button>

            <InputWrap type="Email" Ref={emailRef} />
            <InputWrap type="Password" Ref={passwordRef} />

            <p id="message"></p>

            <button id="login" type="submit" onClick={handleSubmit}>Login &#8594;</button>

            <p>Don't have an account? <a href="register.html">Register</a></p>
        </form>
    );
};