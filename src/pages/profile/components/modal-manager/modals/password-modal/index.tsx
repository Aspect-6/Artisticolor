import Modal from "@components/modal"
import { UserContext } from "@contexts/userContext"
import { User } from "@lib/functions/auth"
import Crypto from "@lib/functions/crypto"
import { db } from "@lib/functions/firebase"
import { doc, getDoc } from "@lib/functions/firestore"
import firestore from "@lib/functions/firestoreUtils"
import user from "@lib/functions/user"
import { ModalProps } from "@pages/profile/models"
import {
    hideBoostrapInputError,
    showBoostrapInputError,
} from "@pages/profile/utils"
import { useContext, useEffect, useRef, useState } from "react"

export default function PasswordModal({
    value,
    dispatch,
}: ModalProps<HTMLDivElement, HTMLDivElement>) {
    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()
    const invalidDivRef = useRef<HTMLDivElement>()

    const [password, setPassword] = useState(value)

    const [currentUser, setCurrentUser] = useState<User>()
    const userContext = useContext(UserContext)

    useEffect(() => {
        setCurrentUser(userContext)
    }, [userContext])

    const handleClick = () => {
        if (currentUser?.uid) {
            const userDoc = doc(db, `Users/${currentUser?.uid}`)
            const fields: FirestoreUserValidKeys[] = ["password"]

            user.decryptCredentials(userDoc, fields).then(({ password }) => {
                if (inputRef.current.value === password) {
                    showBoostrapInputError(
                        inputRef,
                        invalidDivRef,
                        "Cannot use current password as new password"
                    )
                    return
                } else if (inputRef.current.value.length < 6) {
                    showBoostrapInputError(
                        inputRef,
                        invalidDivRef,
                        "Password must be at least 6 characters long"
                    )
                    return
                }
                hideBoostrapInputError(invalidDivRef)
                dispatch("updatePassword", inputRef.current.value)
                user.updateUserPassword(inputRef.current.value)
                    .then(() => {
                        getDoc(userDoc).then((user) => {
                            const { key } = user.data() as FirestoreUser
                            const encryptedPassword = Crypto.encrypt(
                                [inputRef.current.value],
                                key
                            )
                            firestore.updateFirestoreUser(userDoc, {
                                password: encryptedPassword[0],
                            })
                        })
                    })
                    .catch((e) => {
                        console.error(e.code)
                    })
            })
        }
    }

    return (
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
                    data-bs-dismiss=''
                >
                    Save changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}
