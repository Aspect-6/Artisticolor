import Modal from "@components/modal"
import { UserContext } from "@contexts/userContext"
import { User } from "@lib/functions/auth"
import { auth } from "@lib/functions/firebase"
import user from "@lib/functions/user"
import { ModalProps } from "@pages/profile/models"
import {
    hideBoostrapInputError,
    showBoostrapInputError,
} from "@pages/profile/utils"
import { useContext, useEffect, useRef, useState } from "react"

export default function ConfirmPasswordModal({
    value,
    dispatch,
}: ModalProps<HTMLDivElement, HTMLInputElement>) {
    console.log("rendering confirm password modal")

    const [currentUser, setCurrentUser] = useState<User>()
    const userContext = useContext(UserContext)
    useEffect(() => {
        setCurrentUser(userContext)
    }, [userContext])

    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()
    const invalidDivRef = useRef<HTMLDivElement>()
    const [modalDismissible, setModalDismissible] = useState("")

    if (modalDismissible === "modal") {
        console.count("modal dismissible")
        buttonRef.current.click()
    }

    const handleClick = () => {
        if (currentUser.uid) {
            user.reauthenticateUser(
                auth.currentUser.email,
                inputRef.current.value
            )
                .then(() => setModalDismissible("modal"))
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        showBoostrapInputError(
                            inputRef,
                            invalidDivRef,
                            "Incorrect password. Please try again."
                        )
                    }
                })
            hideBoostrapInputError(inputRef)
        }
    }
    return (
        <Modal
            className='modal fade'
            id='confirmPassword'
            tabIndex={-1}
            aria-labelledby='modal-label'
            aria-hidden='true'
        >
            <Modal.Header
                className='modal-title fs-5 text-dark'
                id='modal-label'
            >
                <Modal.Title>
                    Confirm your identity by entering your password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type='password'
                    ref={inputRef}
                    value={value}
                    onChange={(e) => {
                        dispatch("confirmPassword", e.target.value)
                    }}
                    className='form-control'
                />
                <div className='invalid-feedback' ref={invalidDivRef}></div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                >
                    Close
                </button>
                <button
                    type='button'
                    ref={buttonRef}
                    onClick={() => {
                        console.count("Calling handleClick")
                        if (modalDismissible !== "modal") {
                            handleClick()
                        }
                    }}
                    className='btn btn-primary'
                    data-bs-toggle={modalDismissible}
                    data-bs-target='#changePassword'
                >
                    Confirm
                </button>
            </Modal.Footer>
        </Modal>
    )
}
