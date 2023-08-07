import useLogin from "./useLogin"

export default function useDisplayName() {
    const user = useLogin()
    return user ? user.uid : ""
}
