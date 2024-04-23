import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './component/AuthContextProvider.jsx'

AuthContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
     
    <AuthContextProvider> 
    <App />
  </AuthContextProvider>
 
)
