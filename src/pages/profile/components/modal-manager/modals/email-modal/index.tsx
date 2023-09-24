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

export default function ChangeEmail({ value, dispatch }: ModalProps) {
    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()
    const invalidDivRef = useRef<HTMLDivElement>()

    const [email, setEmail] = useState(value)

    const [currentUser, setCurrentUser] = useState<User>()
    const userContext = useContext(UserContext)

    useEffect(() => {
        setCurrentUser(userContext)
    }, [userContext])

    const handleClick = () => {
        if (currentUser?.uid) {
            const userDoc = doc(db, `Users/${currentUser?.uid}`)
            const fields: FirestoreUserValidKeys[] = ["email"]

            user.decryptCredentials(userDoc, fields).then(({ email }) => {
                if (inputRef.current.value === email) {
                    showBoostrapInputError(
                        inputRef,
                        invalidDivRef,
                        "Cannot use current email address as new email address"
                    )
                    return
                }
                hideBoostrapInputError(invalidDivRef)
                user.updateUserEmail(inputRef.current.value)
                    .then(() => {
                        console.log(currentUser)
                        getDoc(userDoc).then((user) => {
                            const { key } = user.data() as FirestoreUser
                            const encryptedEmail = Crypto.encrypt(
                                [inputRef.current.value],
                                key
                            )
                            firestore.updateFirestoreUser(userDoc, {
                                email: encryptedEmail[0],
                            })
                        })
                        dispatch("updateEmail", inputRef.current.value)
                    })
                    .catch((e) => {
                        if (e.code === "auth/invalid-email") {
                            showBoostrapInputError(
                                inputRef,
                                invalidDivRef,
                                "Please enter a valid email address"
                            )
                        }
                        if (e.code === "auth/email-already-in-use") {
                            showBoostrapInputError(
                                inputRef,
                                invalidDivRef,
                                "Email currently in use"
                            )
                        }
                    })
            })
        }
    }

    return (
        <Modal
            className='modal fade'
            id='changeEmail'
            tabIndex={-1}
            aria-labelledby='modal-label'
            aria-hidden='true'
        >
            <Modal.Header
                className='modal-title fs-5 text-dark'
                id='modal-label'
            >
                <Modal.Title>Change email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type='email'
                    value={email}
                    ref={inputRef}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control'
                />
                <div className='invalid-feedback' ref={invalidDivRef}></div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                </button>
                <button
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
