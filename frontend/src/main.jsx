import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ApiCalling from './components/ApiCalling.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ApiCalling/>
  </StrictMode>,
)
