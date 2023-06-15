import Link from './Link';
import LoginBtn from './LoginPopupBtn';
import DisplayName from './DisplayName'

import { NavBarProps } from 'artisticolor/header';

export default function NavBar({ isLoggedIn, username, urls, pageNames }: NavBarProps) {
    return (
        <nav id="navigation">
            <Link url={urls[0]} pageName={pageNames[0]} />
            <Link url={urls[1]} pageName={pageNames[1]} />
            {isLoggedIn? <DisplayName username={username} /> : <LoginBtn />}
        </nav>
    );
};