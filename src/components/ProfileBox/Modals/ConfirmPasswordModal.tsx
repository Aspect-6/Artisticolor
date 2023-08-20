import Modal from "@components/Modal/Modal"
import { doc } from "@firebase/firestore/lite"
import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import user from "@lib/functions/user"
import { useEffect, useRef, useState } from "react"
import { ACTIONS } from "../reducer"

interface ConfirmPasswordModalProps extends ModalProps {
    setPasswordModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ConfirmPasswordModal({
    value,
    dispatch,
    setPasswordModalVisible,
}: ConfirmPasswordModalProps) {
    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()

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
                    setPasswordModalVisible(true)
                    // buttonRef.current.click()
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
                Confirm your identity by entering your password
            </Modal.Header>
            <Modal.Body>
                <input
                    type='password'
                    ref={inputRef}
                    value={value}
                    onChange={(e) =>
                        dispatch({
                            type: ACTIONS.confirmPassword,
                            payload: e.target.value,
                        })
                    }
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
                    data-bs-toggle='modal'
                    data-bs-target='#changePassword'
                >
                    Confirm
                </button>
            </Modal.Footer>
        </Modal>
    )
}
