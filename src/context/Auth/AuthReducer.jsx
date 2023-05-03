import { initialAuthState, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from "./AuthAction";

export const authReducer = (state = initialAuthState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: undefined,
                user: action.payload.user,
                token: action.payload.token
            };
        case LOGIN_FAILED: 
            return {
                ...state,
                fetching: false,
                error: action.payload
            }   
        case LOGIN_LOADING:
            return {
                ...state,
                fetching: true
            }
        default:
            return state;
    }   
}