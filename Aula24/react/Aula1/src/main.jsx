import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Componente1 from './components/componente1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='row'>
      <div className='col-6'>
          <App />
      </div>
      <div className='col-6'>
          <Componente1/>
      </div>
    </div>
  </StrictMode>,
)
