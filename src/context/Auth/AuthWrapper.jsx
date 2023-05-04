import { useReducer, useContext, createContext } from "react";
import { initialState } from "./AuthReducer";

export const AuthContext = createContext([initialState, () => initialState]);

export const AuthProvider = ({reducer, children, initialState}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthValue = () => useContext(AuthContext)

