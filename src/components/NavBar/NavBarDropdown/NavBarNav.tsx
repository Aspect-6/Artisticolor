import { ROUTES } from '@config/browser-routes.config'
import useDisplayName from '@hooks/useDisplayname'
import user from '@lib/functions/user'
import Divider from '../../Misc/Divider'
import LoginDropdown from './LoginDropdown'
import NavBarLink from './NavBarLink'
import ToggleFormBtn from './ToggleFormBtn'
import DropdownItem from './UserDropdown/DropdownItem'
import UserDropdown from './UserDropdown/UserDropdown'

interface NavBarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavBarNav({ ...props }: NavBarNavProps) {
	const displayName = useDisplayName()

	return (
		<div {...props}>
			<ul className='navbar-nav'>
				<NavBarLink href={ROUTES.INDEX}>Home</NavBarLink>
				<NavBarLink href={ROUTES.PROJECTS}>Projects</NavBarLink>
				<NavBarLink href={ROUTES.PROFILE}>Profile</NavBarLink>
				{displayName ? (
					<UserDropdown displayName={displayName}>
						<DropdownItem>Action</DropdownItem>
						<DropdownItem>Another</DropdownItem>
						<DropdownItem>Something</DropdownItem>
						<Divider />
						<DropdownItem onClick={user.signOut}>Sign Out</DropdownItem>
					</UserDropdown>
				) : (
					<>
						<ToggleFormBtn />
						<div className='dropdown'>
							<LoginDropdown />
						</div>
					</>
				)}
			</ul>
		</div>
	)
}
