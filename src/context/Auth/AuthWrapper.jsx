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

/*
createContext => It does not hold any information.
It represents which context other components can read or provide
Lets you create context that components can read or write 
*/

