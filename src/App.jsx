import { BrowserRouter } from "react-router-dom";
import './App.css'
import { RenderHeader } from "./structure";
import { RenderMenu, RenderRoutes } from "./structure/RenderNavigation";
import { AuthProvider } from "./context/Auth/AuthWrapper";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RenderHeader />
        <RenderMenu />
        <RenderRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

