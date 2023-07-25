import Logo from './NavBarDropdown/Logo'
import NavBarNav from './NavBarDropdown/NavBarNav'
import WebsiteName from './NavBarDropdown/WebsiteName'
import NavBarToggler from './NavBarToggler'

export default function NavBar() {
	return (
		<nav className='navbar navbar-expand-sm bg-body-secondary'>
			<div className='container-fluid'>
				<Logo
					id='Logo'
					className='ms-2'
					height='42px'
				/>
				<WebsiteName />
				<NavBarToggler />
				<NavBarNav
					className='collapse navbar-collapse justify-content-end'
					id='navbarNavDropdown'
				/>
			</div>
		</nav>
	)
}
