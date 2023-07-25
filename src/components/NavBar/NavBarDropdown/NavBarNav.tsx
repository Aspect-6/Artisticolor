import Login from '@components/functions/login'
import LoginForm from './LoginDropdown/Form'
import NavBarLink from './NavBarLink'
import ToggleFormBtn from './ToggleFormBtn'
import Divider from './UserDropdown/Divider'
import DropdownItem from './UserDropdown/DropdownItem'
import UserDropdown from './UserDropdown/UserDropdown'

interface NavBarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavBarNav({ ...props }: NavBarNavProps) {
	const currentAuthState = Login()

	return (
		<div {...props}>
			<ul className='navbar-nav'>
				<NavBarLink value='Home' href='./index.html' />
				<NavBarLink value='Projects' href='./projects.html' />
				<NavBarLink value='Profile' href='./profile.html' />
				{currentAuthState ? (
					<UserDropdown displayName={currentAuthState.displayName}>
						<DropdownItem text='Action' />
						<DropdownItem text='Another' />
						<DropdownItem text='Something' />
						<Divider />
						<DropdownItem text='Separated Link' />
					</UserDropdown>
				) : (
					<>
						<ToggleFormBtn />
						<div className='dropdown'>
							<LoginForm
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
