/**
 * All valid action types for credReducer function
 */
export type ActionTypes =
    | "updateEmail"
    | "updateUsername"
    | "updatePassword"
    | "confirmText"
    | "setData"

/**
 * Structure of inital state of credential object state
 */
export interface StateType {
    email: string
    username: string
    password: string
    confirmText: string
}

/**
 * Type of the action parameter in the credReducder function
 */
export interface ReducerPayloadType {
    /** List of action types that can update the reducer state object */
    type: ActionTypes
    /** 
     * The value that can be passed in to update the reducer state object. This can be of type `string`
     * or `StateType` */
    payload: string | StateType
}

/**
 * @interface ModalProps
 *
 * @template T - Extends HTMLElement interface and is makes `ModalProps` interface extend it
 * @template K - Extends HTMLElement interface and is passed into ref object. Defaulted to value of `T`
 * 
 * Props passed into `Modal` component. Includes a `value` prop that is used as value of the input element
 * in the modal. Includes a `dispatch` prop that is used to update the state of the `value`. Also includes
 * an optional `ref` prop that is used to set the ref object of the input element in the modal.
 */
export interface ModalProps<
    T extends HTMLElement = HTMLDivElement,
    K extends HTMLElement = T
> extends React.HTMLAttributes<T> {
    /** Value of input field inside of modal managed by dispatch function */
    value: string
    /**
     * @param type - Type of action being dispatched to reducer function
     * @param value - Value that will update current reducer state object
     */
    dispatch: (type: ActionTypes, value: string) => void
    /**
     * Ref object being passed to modal component which extends the type passed in
     * @optional
     */
    Ref?: React.MutableRefObject<K>
}
