import useUID from "@hooks/useUID"
import { db } from "@lib/functions/firebase"
import { doc } from "@lib/functions/firestore"
import user from "@lib/functions/user"
import { useEffect, useReducer } from "react"
import { ActionTypes, StateType } from "../models"
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

    const credDispatch = (type: ActionTypes, value: string) => {
        dispatch({ type: ACTIONS[type], payload: value })
    }

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
            <ModalManager credentials={credentials} dispatch={credDispatch} />
            <div className='position-absolute top-50 start-50 translate-middle col-9 col-md-7 col-lg-5 col-xl-4 p-3 bg-dark-subtle h-75 rounded'>
                <DisplayCredential
                    label='Email'
                    credential={credentials.email}
                    className='d-flex align-items-center'
                />
                <DisplayCredential
                    label='Username'
                    credential={credentials.username}
                    className='d-flex my-2 align-items-center'
                />
                <DisplayCredential
                    label='Password'
                    credential={credentials.password}
                    className='d-flex align-items-center'
                />
            </div>
        </>
    )
}
