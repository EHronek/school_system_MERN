import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';                  // Core CSS
import 'primeicons/primeicons.css';                               // Icons
import 'primeflex/primeflex.css';                                 // Flex utility

import { PrimeReactProvider } from 'primereact/api';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)