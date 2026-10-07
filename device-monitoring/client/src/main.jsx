import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import EmployeeList from './coba.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeList />
    <App />
  </StrictMode>,
)
