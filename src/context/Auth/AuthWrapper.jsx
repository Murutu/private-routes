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
Inside this function we will create a stateful item that will hold the details of our user
export const AuthWrapper = () => {}
value={{details, login, logout}} => here we export our initialState and functions

<RenderHeader />
<RenderMenu />
<RenderRoutes />


const [details, setDetails] = useState({
        email: "",
        password: "",
        showPassword: false
    })
*/