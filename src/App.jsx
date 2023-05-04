import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, NotFound } from "./pages";
import { useAuthValue } from "./context/Auth/AuthWrapper";




function App() {
  const [{ token }] = useAuthValue();

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
*/
