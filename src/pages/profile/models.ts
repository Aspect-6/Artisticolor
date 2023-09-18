/**
 * All valid action types for credReducer function
 */
export type ActionTypes =
    | "updateEmail"
    | "updateUsername"
    | "updatePassword"
    | "confirmPassword"
    | "setData"

/**
 * Structure of inital state of credential object state
 */
export interface StateType {
    email: string
    username: string
    password: string
    confirmPassword: string
}

/**
 * Type of useReducer function payload param
 */
export interface ReducerPayloadType {
    type: ActionTypes
    payload: string | StateType
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string
    dispatch: (type: ActionTypes, value: string) => void
}
