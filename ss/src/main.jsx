import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider}  from '@chakra-ui/react'
import { FirebaseProvider } from "./context/firebase.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <FirebaseProvider>
      <App />
      </FirebaseProvider>  
    </ChakraProvider>
    
  </React.StrictMode>,
)
