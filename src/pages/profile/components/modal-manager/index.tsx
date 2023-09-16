import { ReducerPayloadType, StateType } from "@pages/profile/models"
import { useState } from "react"
import EmailModal from "./modals/email-modal"
import PasswordModal from "./modals/password-modal"
import UsernameModal from "./modals/username-modal"

interface ModalManager {
    credentials: StateType
    dispatch: React.Dispatch<ReducerPayloadType>
}

export default function ModalManager({ credentials, dispatch }: ModalManager) {
    const { email, username, password, confirmPassword } = credentials

    // const [passwordModalVisible, setPasswordModalVisible] =
    //     useState<boolean>(false)
    // console.log("render")

    const [visible, setVisible] = useState(false)

    return (
        <>
            <EmailModal value={email} dispatch={dispatch} />
            <UsernameModal value={username} dispatch={dispatch} />
            {console.log("text-render")}
            <PasswordModal
                value={password}
                confirmPassword={confirmPassword}
                dispatch={dispatch}
            />
            {/* <ConfirmPasswordModal
                value={confirmPassword}
                dispatch={dispatch}
            /> */}
        </>
    )
}
