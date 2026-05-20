import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom'
import LayoutProvider from './service/LayoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <LayoutProvider>

        <App />

    </LayoutProvider>

        
    </BrowserRouter>
  </StrictMode>,
)
