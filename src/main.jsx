import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider'
import { FlightPassengerProvider } from './context/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FlightPassengerProvider>
    <App />
    </FlightPassengerProvider>
  </AuthProvider>,
)
