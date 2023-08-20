/**
 * All valid action types for useReducer function
 */
type ActionTypes =
    | "updateEmail"
    | "updateUsername"
    | "updatePassword"
    | "confirmPassword"
    | "setData"

/**
 * The structure of the inital state of the credential object state
 */
interface StateType {
    email: string
    username: string
    password: string
    confirmPassword: string
}

/**
 * Type of useReducer function payload param
 */
interface ReducerPayloadType {
    type: ActionTypes
    payload: string | StateType
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string
    dispatch: React.Dispatch<ReducerPayloadType>
}