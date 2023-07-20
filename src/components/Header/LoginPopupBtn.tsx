import { useState } from "react";
import LoginBox from "../LoginBox/LoginBox";

export default function LoginBtn() {
    const [viewState, setViewState] = useState(false)

    const handleClick = () => require('anim/login/box').open()
    return (
        <button id="lgnButton" className="btnLogin" onClick={handleClick}>Login</button>
    );
};