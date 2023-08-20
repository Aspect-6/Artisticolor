import Modal from "@components/Modal/Modal"
import { doc } from "@firebase/firestore/lite"
import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import user from "@lib/functions/user"
import { useEffect, useRef, useState } from "react"
import { ACTIONS } from "../reducer"

interface PasswordModalProps extends ModalProps {
    confirmPassword: string
}

export default function PasswordModal({
    value,
    dispatch,
    confirmPassword,
}: PasswordModalProps) {
    // if (!visible) return

    // const [whichPassword, setWhichPassword] = useState<"confirm" | "displayed">(
    //     "confirm"
    // )

    const inputRef = useRef<HTMLInputElement>()
    const buttonRef = useRef<HTMLButtonElement>()

    // const [passwordModalVisible, setPasswordModalVisible] =
    //     useState<boolean>(false)

    const [dataBsToggle, setDataBsToggle] = useState({ "data-bs-toggle": "" })

    // setDataBsToggle({ "data-bs-toggle": "modal" })
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
                    setDataBsToggle({ "data-bs-toggle": "modal" })
                    buttonRef.current.click()
                    // setDataBsToggle({ "data-bs-toggle": "" })
                    dispatch({ type: ACTIONS.confirmPassword, payload: "" })
                }
            })
        }
    }

    return (
        <>
            {dataBsToggle["data-bs-toggle"] ? (
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
                        Change password
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => {
                                dispatch({
                                    type: ACTIONS.updatePassword,
                                    payload: e.target.value,
                                })
                            }}
                            className='form-control'
                        />
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
                            onClick={handleClick}
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                        >
                            Save changes
                        </button>
                    </Modal.Footer>
                </Modal>
            ) : null}
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
                        {...dataBsToggle}
                        ref={buttonRef}
                        onClick={handleClick}
                        className='btn btn-primary'
                        data-bs-target='#changePassword'
                    >
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
