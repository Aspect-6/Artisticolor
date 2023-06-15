import { NavBarProps } from 'artisticolor/header';
import LogoDisplay from './LogoDisplay';
import NavBar from './NavBar';

export default function Header({ isLoggedIn, username, urls, pageNames }: NavBarProps) {
    return (
        <header className="bar">
            <LogoDisplay />
            <NavBar 
                isLoggedIn={isLoggedIn}
                username={username}
                urls={urls}
                pageNames={pageNames}
            />
        </header>
    );
};