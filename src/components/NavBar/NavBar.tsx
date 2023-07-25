import NavBarNav from './NavBarDropdown/NavBarNav'
import NavBarToggler from './NavBarToggler'
import Logo from './NavBarDropdown/Logo'
import WebName from './NavBarDropdown/WebsiteName'

export default function NavBar() {
	return (
		<nav className='navbar navbar-expand-sm bg-body-secondary'>
			<div className='container-fluid'>
				<Logo />
				<WebName />
				<NavBarToggler />
				<NavBarNav />
			</div>
		</nav>
	)
}
