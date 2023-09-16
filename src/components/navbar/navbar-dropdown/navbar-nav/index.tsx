import useDisplayName from "@hooks/useDisplayname"
import user from "@lib/functions/user"
import Divider from "../../../divider"
import NavBarLink from "../navbar-link"
import ToggleFormBtn from "../toggle-form-btn"
import LoginDropdown from "../login-dropdown"
import UserDropdown from "../user-dropdown"
import DropdownItem from "../user-dropdown/dropdown-item"

interface NavBarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavBarNav({ ...props }: NavBarNavProps) {
    const displayName = useDisplayName()

    return (
        <div {...props}>
            <ul className='navbar-nav'>
                <NavBarLink path='/'>Home</NavBarLink>
                <NavBarLink path='/projects'>Projects</NavBarLink>
                <NavBarLink path='/profile'>Profile</NavBarLink>
                {displayName ? (
                    <UserDropdown displayName={displayName}>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another</DropdownItem>
                        <DropdownItem>Something</DropdownItem>
                        <Divider />
                        <DropdownItem onClick={user.signOut}>
                            Sign Out
                        </DropdownItem>
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
