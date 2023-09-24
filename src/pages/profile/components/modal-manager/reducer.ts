import {
    ActionTypes,
    ReducerPayloadType,
    StateType,
} from "@pages/profile/models"

export const ACTIONS: Record<ActionTypes, ActionTypes> = {
    updateEmail: "updateEmail",
    updateUsername: "updateUsername",
    updatePassword: "updatePassword",
    confirmText: "confirmText",
    setData: "setData",
}

/**
 *
 * @param state - Type of the StateType interface
 * @param action - Type of the ReducerPayloadType interface
 * @returns modified state object with one field changed, all fields changed, or the state passed in
 */
export function credReducer(
    state: StateType,
    action: ReducerPayloadType
): StateType {
    switch (action.type) {
        case ACTIONS.updateEmail:
            return {
                ...state,
                email: action.payload as string,
            }
        case ACTIONS.updateUsername:
            return {
                ...state,
                username: action.payload as string,
            }
        case ACTIONS.updatePassword:
            return {
                ...state,
                password: action.payload as string,
            }
        case ACTIONS.confirmText:
            return {
                ...state,
                confirmText: action.payload as string,
            }
        case ACTIONS.setData:
            return {
                ...state,
                ...(action.payload as StateType),
            }
        default:
            return state
    }
}
