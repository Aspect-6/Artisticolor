import useLogin from "./useLogin"

export default function useUID() {
    const user = useLogin()
    return user ? user.uid : ""
}
