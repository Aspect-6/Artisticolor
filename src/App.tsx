import NavBar from "@components/navbar"
import { UserContext } from "@contexts/userContext"
import useLogin from "@hooks/useLogin"
import ProfilePage from "@pages/profile"
import RegisterPage from "@pages/register"
import { useEffect, useState } from "react"

export default function App() {
    const user = useLogin()
    const [userState, setUserState] = useState(user)

    useEffect(() => {
        setUserState(user)
    }, [user])

    return (
        <UserContext.Provider value={userState}>
            {location.pathname === "/" && <></>}
            {location.pathname !== "/register" && <NavBar />}
            {location.pathname === "/projects" && <></>}
            {location.pathname === "/profile" && <ProfilePage />}
            {location.pathname === "/register" && <RegisterPage />}
        </UserContext.Provider>
    )
}
