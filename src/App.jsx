import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario.jsx'
import ListadoPacientes from './components/ListadoPacientes.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <>
      <Navbar />
      <Formulario agregarCita={agregarCita} />
      <ListadoPacientes citas={citas} />
    </>
  );
}

export default App
