import NavBarToggler from "../navbar-toggler"
import NavBarNav from "./navbar-nav"

export default function NavBarDropdown() {
    return (
        <>
            <NavBarToggler />
            <NavBarNav
                className='collapse navbar-collapse justify-content-end'
                id='navbarNavDropdown'
            />
        </>
    )
}
