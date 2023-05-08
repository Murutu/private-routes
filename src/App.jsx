import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, NotFound } from "./pages";
import { useAuthValue } from "./context/Auth/AuthWrapper";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { actionTypes } from "./context/Auth/AuthReducer";




function App() {
  const [{ token }, dispatch] = useAuthValue();
  const [ cookies ] = useCookies(["jwt"]);

  useEffect(() => {

    if(token === null) {
      const { jwt } = cookies;
      if( jwt ) {
        dispatch({ type: actionTypes.SET_TOKEN, value: jwt })
      }
    }

  },[dispatch, token, cookies])

  return (
      <Routes>
        <Route path="login" 
          element={!token ? <Login /> : <Navigate to="/" replace={true}/>}
        />
        <Route path="/" 
          element={token ? <Home /> : <Navigate to="/login" replace={true}/>}
        />
        <Route path="*" element={<NotFound />}/>
      </Routes>
  )
}

export default App


/*
Protected Routes  
import { useAuthValue } from "./context/Auth/AuthWrapper";
const [{ token }] = useAuthValue();
*/
