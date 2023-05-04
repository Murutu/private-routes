import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/Auth/AuthWrapper.jsx'
import reducer, { initialState } from './context/Auth/AuthReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider initialState={initialState} reducer={reducer}>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
