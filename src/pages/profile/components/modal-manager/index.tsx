import { ActionTypes, StateType } from "@pages/profile/models"
import ConfirmPasswordModal from "./modals/confirm-password-modal"
import EmailModal from "./modals/email-modal"
import PasswordModal from "./modals/password-modal"
import UsernameModal from "./modals/username-modal"
interface ModalManager<
    T extends Partial<Record<keyof StateType, HTMLElement>>
> {
    credentials: StateType
    dispatch: (type: ActionTypes, value: string) => void
    ModalRefs?: {
        [K in keyof T]: React.MutableRefObject<T[K]>
    }
}

export default function ModalManager({
    credentials,
    dispatch,
    ModalRefs,
}: ModalManager<{
    password: HTMLInputElement
    confirmPassword: HTMLInputElement
}>) {
    const modalProps = (type: keyof StateType) => {
        return {
            value: credentials[type],
            dispatch: dispatch,
            Ref:
                type in ModalRefs
                    ? ModalRefs[type as keyof typeof ModalRefs]
                    : null,
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
