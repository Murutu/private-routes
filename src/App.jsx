import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound } from "./pages";
// import { useAuthValue } from "./context/Auth/AuthWrapper";




function App() {
  // const [{ token }] = useAuthValue();

  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  )
}

export default App


/*
Protected Routes  
*/
