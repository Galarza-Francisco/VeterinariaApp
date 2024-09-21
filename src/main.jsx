import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Formulario from './components/Formulario.jsx'
import ListadoPacientes from './components/ListadoPacientes.jsx'
import Navbar from './components/Navbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Formulario/>
    <ListadoPacientes/>
  </StrictMode>,
)
