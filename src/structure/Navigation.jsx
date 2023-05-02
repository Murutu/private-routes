import { About, Home } from "../pages";



export const nav = [
    {path: "/", name: "Home", element: <Home />, isMenu: true},
    {path: "/about", name: "About", element: <About />, isMenu: true}
    
]

export default nav;