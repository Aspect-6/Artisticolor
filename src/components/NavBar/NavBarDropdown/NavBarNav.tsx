import { ROUTES } from '@config/browser-routes.config'
import useDisplayName from '@hooks/useDisplayname'
import LoginForm from './LoginDropdown/Form'
import NavBarLink from './NavBarLink'
import ToggleFormBtn from './ToggleFormBtn'
import Divider from './UserDropdown/Divider'
import DropdownItem from './UserDropdown/DropdownItem'
import UserDropdown from './UserDropdown/UserDropdown'

interface NavBarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavBarNav({ ...props }: NavBarNavProps) {
	const { displayName } = useDisplayName()

	return (
		<div {...props}>
			<ul className='navbar-nav'>
				<NavBarLink text='Home' href={ROUTES.INDEX} />
				<NavBarLink text='Projects' href={ROUTES.PROJECTS} />
				<NavBarLink text='Profile' href={ROUTES.PROFILE} />
				{displayName ? (
					<UserDropdown displayName={displayName}>
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
