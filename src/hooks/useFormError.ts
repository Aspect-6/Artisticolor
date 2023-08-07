import { UserCredential } from "@firebase/auth"

interface useFormErrorProps {
    e: string | UserCredential
    email: string
    username?: string
    password: string
    errorRef: React.MutableRefObject<HTMLDivElement>
}

export default function useFormError({ e, email, username, password, errorRef }: useFormErrorProps) {
    if (!e || email == "" || username == "" || password == "") {
        if (!errorRef.current.className.includes("visually-hidden")) {
            errorRef.current.classList.add("visually-hidden")
        }
        return
    }
    errorRef.current.classList.remove("visually-hidden")
}
