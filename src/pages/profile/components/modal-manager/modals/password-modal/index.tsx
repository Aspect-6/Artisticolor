import Modal from "@components/modal"
import { doc } from "@firebase/firestore/lite"
import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import user from "@lib/functions/user"
import { ModalProps } from "@pages/profile/models"
import { useEffect, useMemo, useRef, useState } from "react"

export default function PasswordModal({ value, dispatch }: ModalProps) {
    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()
    const invalidDivRef = useRef<HTMLDivElement>()

    const [password, setPassword] = useState(value)

    const [uid, setUid] = useState<string>()
    const Uid = useUID()
    useEffect(() => {
        setUid(Uid)
    }, [Uid])

    const handleClick = () => {
        if (uid) {
            const userDoc = doc(db, `Users/${uid}`)
            const fields: FirestoreUserValidKeys[] = ["password"]

            user.decryptCredentials(userDoc, fields).then(({ password }) => {
                if (inputRef.current.value === password) {
                    invalidDivRef.current.innerText =
                        "Cannot use current password as new password"
                    inputRef.current.classList.add("is-invalid")
                    return
                } else if (inputRef.current.value.length <= 6) {
                    invalidDivRef.current.innerText =
                        "Password must be at least 6 characters long"
                    inputRef.current.classList.add("is-invalid")
                    return
                } else if (inputRef.current.classList.contains("is-invalid")) {
                    inputRef.current.classList.remove("is-invalid")
                }
                dispatch("updatePassword", inputRef.current.value)
            })
        }
    }

    return (
        <>
            <Modal
                className='modal fade'
                id='changePassword'
                tabIndex={-1}
                aria-labelledby='modal-label'
                aria-hidden='true'
            >
                <Modal.Header
                    className='modal-title fs-5 text-dark'
                    id='modal-label'
                >
                    <Modal.Title>Change password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type='password'
                        ref={inputRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                    />
                    <div className='invalid-feedback' ref={invalidDivRef}></div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button' // Get rid of this
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                    >
                        Close
                    </button>
                    <button
                        type='button' // Get rid of this
                        ref={buttonRef}
                        onClick={handleClick}
                        className='btn btn-primary'
                        data-bs-dismiss=""
                    >
                        Save changes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
