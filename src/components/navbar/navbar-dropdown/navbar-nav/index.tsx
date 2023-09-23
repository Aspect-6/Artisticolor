import user from "@lib/functions/user"
import Divider from "../../../divider"
import NavBarLink from "../navbar-link"
import ToggleFormBtn from "../toggle-form-btn"
import LoginDropdown from "../login-dropdown"
import UserDropdown from "../user-dropdown"
import DropdownItem from "../user-dropdown/dropdown-item"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "@contexts/userContext"

interface NavBarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavBarNav({ ...props }: NavBarNavProps) {
    const [currentUser, setCurrentUser] = useState(null)
    const userContext = useContext(UserContext)

    useEffect(() => {
        setCurrentUser(userContext)
    }, [userContext])

    return (
        <div {...props}>
            <ul className='navbar-nav'>
                <NavBarLink path='/'>Home</NavBarLink>
                <NavBarLink path='/projects'>Projects</NavBarLink>
                <NavBarLink path='/profile'>Profile</NavBarLink>
                {currentUser?.displayName ? (
                    <UserDropdown displayName={currentUser.displayName}>
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
