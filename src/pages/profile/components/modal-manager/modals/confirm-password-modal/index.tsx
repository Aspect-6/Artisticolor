import Modal from "@components/modal"
import { doc } from "@firebase/firestore/lite"
import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import user from "@lib/functions/user"
import { ModalProps } from "@pages/profile/models"
import { useEffect, useRef, useState } from "react"

export default function ConfirmPasswordModal({ value, dispatch }: ModalProps) {
    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()

    const [modalDismissible, setModalDismissible] = useState("")
    if (modalDismissible === "modal") {
        buttonRef.current.click()
    }

    const [uid, setUid] = useState("")
    const Uid = useUID()

    useEffect(() => {
        setUid(Uid)
    }, [Uid])

    const handleClick = () => {
        if (uid) {
            const userDoc = doc(db, `Users/${uid}`)
            const fields: FirestoreUserValidKeys[] = ["password"]

            user.decryptCredentials(userDoc, fields).then(({ password }) => {
                if (inputRef.current.value !== password) {
                    if (inputRef.current.classList.contains("is-valid")) {
                        inputRef.current.classList.remove("is-valid")
                    }
                    inputRef.current.classList.add("is-invalid")
                }
                if (inputRef.current.value === password) {
                    if (inputRef.current.classList.contains("is-invalid")) {
                        inputRef.current.classList.remove("is-invalid")
                    }
                    setModalDismissible("modal")
                }
            })
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
                <div className='invalid-feedback'>
                    Incorrect password. Please try again.
                </div>
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
                    onClick={handleClick}
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
