import "./styles.scss"
import NavBarDropdown from "./navbar-dropdown"
import Logo from "./navbar-dropdown/logo"
import WebsiteName from "./navbar-dropdown/website-name"

export default function NavBar() {
    return (
        <nav className='navbar navbar-expand-sm bg-body-secondary'>
            <div className='container-fluid'>
                <Logo id='Logo' className='ms-2' height='42px' />
                <WebsiteName />
                <NavBarDropdown />
            </div>
        </nav>
    )
}
