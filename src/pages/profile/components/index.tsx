import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import { doc } from "@lib/functions/firestore"
import user from "@lib/functions/user"
import { useEffect, useReducer } from "react"
import { StateType } from "../models"
import DisplayCredential from "./display-fields"
import ModalManager from "./modal-manager"
import { ACTIONS, credReducer } from "./modal-manager/reducer"

interface ProfileBox {}

export default function ProfileBox({}: ProfileBox) {
    const [credentials, dispatch] = useReducer(credReducer, {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const uid = useUID()

    useEffect(() => {
        if (uid) {
            const userDoc = doc(db, `Users/${uid}`)
            user.decryptCredentials(userDoc, [
                "email",
                "username",
                "password",
            ]).then((data) => {
                dispatch({ type: ACTIONS.setData, payload: data as StateType })
            })
        }
    }, [uid])

    return (
        <>
            {/* <EmailModal value={credentials.email} setValue={dispatch} />
            <UsernameModal value={credentials.username} setValue={dispatch} />
            <ConfirmPasswordModal
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <PasswordModal value={credentials.password} setValue={dispatch} /> */}
            <ModalManager credentials={credentials} dispatch={dispatch} />
            <div className='position-absolute top-50 start-50 translate-middle col-9 col-md-7 col-lg-5 col-xl-4 p-3 bg-dark-subtle h-75 rounded'>
                <div>
                    <DisplayCredential
                        label='Email'
                        credential={credentials.email}
                    />
                    <DisplayCredential
                        label='Username'
                        credential={credentials.username}
                    />
                    <DisplayCredential
                        label='Password'
                        credential={credentials.password}
                    />
                    {/* <Form.Field className='d-flex align-items-center'>
                        <div className='col-3'>
                            <Form.FieldLabel className='align-content-center'>
                                Email
                            </Form.FieldLabel>
                        </div>
                        <div className='col-9 justify-content-end d-flex'>
                            <Form.FieldInput
                                type='email'
                                value={credentials.email}
                                className='mx-2 credential-display'
                                style={{
                                    backgroundImage:
                                        "url('../icons/email.svg')",
                                }}
                                readOnly
                            />
                            <EditBtn
                                id='edit-email'
                                className='btn btn-primary'
                                style={{ minWidth: "fit-content" }}
                                data-bs-toggle='modal'
                                data-bs-target='#changeEmail'
                            />
                        </div>
                    </Form.Field>
                    <Form.Field className='d-flex align-items-center my-2'>
                        <div className='col-3'>
                            <Form.FieldLabel className='align-content-center'>
                                Username
                            </Form.FieldLabel>
                        </div>
                        <div className='col-9 justify-content-end d-flex'>
                            <Form.FieldInput
                                type='text'
                                value={credentials.username}
                                className='mx-2 credential-display'
                                style={{
                                    backgroundImage: "url('../icons/user.svg')",
                                }}
                                readOnly
                            />
                            <EditBtn
                                id='edit-username'
                                className='btn btn-primary'
                                style={{ minWidth: "fit-content" }}
                                data-bs-toggle='modal'
                                data-bs-target='#changeUsername'
                            />
                        </div>
                    </Form.Field>
                    <Form.Field className='d-flex align-items-center'>
                        <div className='col-3'>
                            <Form.FieldLabel className='align-content-center'>
                                Password
                            </Form.FieldLabel>
                        </div>
                        <div className='col-9 justify-content-end d-flex'>
                            <Form.FieldInput
                                type='password'
                                value={credentials.password}
                                className='mx-2 credential-display'
                                style={{
                                    backgroundImage: "url('../icons/lock.svg')",
                                }}
                                readOnly
                            />
                            <EditBtn
                                id='edit-password'
                                className='btn btn-primary'
                                style={{ minWidth: "fit-content" }}
                                data-bs-toggle='modal'
                                data-bs-target='#confirmPassword'
                            />
                        </div>
                    </Form.Field> */}
                </div>
            </div>
        </>
    )
}
