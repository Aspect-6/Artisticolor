export default function LoginBtn() {
    const handleClick = () => {
        require('anim/login/box').open()
    }

    return (
        <button id="lgnButton" className="btnLogin" onClick={handleClick}>Login</button>
    );
};