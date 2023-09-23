import { UserCredential } from "@lib/functions/auth";

interface testFormErrorProps {
    e: UserCredential | string
    email: string
    username?: string
    password: string
    errorRef: React.MutableRefObject<HTMLDivElement>
}

export function testFormError({ e, email, username, password, errorRef }: testFormErrorProps) {
    if (!e || email == "" || username == "" || password == "") {
        if (!errorRef.current.className.includes("visually-hidden")) {
            errorRef.current.classList.add("visually-hidden")
        }
        return
    }
    errorRef.current.classList.remove("visually-hidden")
}