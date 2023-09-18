import { ActionTypes, StateType } from "@pages/profile/models"
import ConfirmPasswordModal from "./modals/confirm-password-modal"
import EmailModal from "./modals/email-modal"
import PasswordModal from "./modals/password-modal"
import UsernameModal from "./modals/username-modal"

interface ModalManager {
    credentials: StateType
    dispatch: (type: ActionTypes, value: string) => void
}

export default function ModalManager({ credentials, dispatch }: ModalManager) {
    const modalProps = (type: keyof typeof credentials) => {
        return {
            value: credentials[type],
            dispatch: dispatch,
        }
    }

    return (
        <>
            <EmailModal {...modalProps("email")} />
            <UsernameModal {...modalProps("username")} />
            <PasswordModal {...modalProps("password")} />
            <ConfirmPasswordModal {...modalProps("confirmPassword")} />
        </>
    )
}
