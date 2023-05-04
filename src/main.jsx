import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/Auth/AuthWrapper.jsx'
import reducer, { initialState } from './context/Auth/AuthReducer.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider initialState={initialState} reducer={reducer}>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
