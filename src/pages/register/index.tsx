// import { useContext } from "react"
import RegisterForm from "./components/register-form"
import "./styles.scss"
// import { bgContext } from "App"

export default function RegisterPage() {
    // const [bodyBgColor, setBodyBgColor] = useContext(bgContext)
    // setBodyBgColor('#0d6efd')
    // console.log('register')
    document.body.style.backgroundColor = "#0d6efd"
    return <RegisterForm />
}
