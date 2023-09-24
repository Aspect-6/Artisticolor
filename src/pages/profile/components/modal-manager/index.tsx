import { ActionTypes, StateType } from "@pages/profile/models"
import ConfirmModal from "./modals/confirm-modal"
import PasswordModal from "./modals/password-modal"
import EmailModal from "./modals/email-modal"
import UsernameModal from "./modals/username-modal"
interface ModalManager {
    credentials: StateType
    dispatch: (type: ActionTypes, value: string) => void
}

export default function ModalManager({
    credentials,
    dispatch,
}: ModalManager) {
    const modalProps = (type: keyof StateType) => {
        return {
            value: credentials[type],
            dispatch: dispatch,
        }
    }

    return (
        <>
            <PasswordModal {...modalProps("password")} />
            <UsernameModal {...modalProps("username")} />
            <EmailModal {...modalProps("email")} />
            <ConfirmModal
                {...modalProps("confirmText")}
                id='confirmPassword'
                target='#changePassword'
            />
            <ConfirmModal
                {...modalProps("confirmText")}
                id='confirmEmail'
                target='#changeEmail'
            />
        </>
    )
}
