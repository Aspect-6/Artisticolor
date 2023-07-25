import Login from '@components/functions/login'
import DropdownForm from './LoginDropdown/DropdownForm'
import NavBarLink from './NavBarLink'
import SignUpBtn from './SignUpBtn'
import ToggleFormBtn from './ToggleFormBtn'

export default function NavBarNav() {
	const currentAuthState = Login()

	return (
		<div
			className='collapse navbar-collapse justify-content-end'
			id='navbarNavDropdown'
		>
			<ul className='navbar-nav'>
				<NavBarLink value='Home' href='./index.html' />
				<NavBarLink value='Projects' href='./projects.html' />
				<NavBarLink value='Profile' href='./profile.html' />
				{currentAuthState ? (
					<li className='nav-item fs-5 px-1 dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							{currentAuthState.displayName}
						</a>
						<ul className='dropdown-menu dropdown-menu-end bg-body-tertiary'>
							<li>
								<a className='dropdown-item' href='#'>
									Action
								</a>
							</li>
							<li>
								<a className='dropdown-item' href='#'>
									Another
								</a>
							</li>
							<li>
								<a className='dropdown-item' href='#'>
									Something
								</a>
							</li>
							<li>
								<hr className='dropdown-divider' />
							</li>
							<li>
								<a className='dropdown-item' href='#'>
									Separated link
								</a>
							</li>
						</ul>
					</li>
				) : (
					<>
						<ToggleFormBtn />
						<div className='dropdown'>
							<DropdownForm
								className='dropdown-menu dropdown-menu-end p-3 bg-body-secondary'
								style={{ minWidth: '250px' }}
							/>
						</div>
					</>
				)}
			</ul>
		</div>
	)
}
