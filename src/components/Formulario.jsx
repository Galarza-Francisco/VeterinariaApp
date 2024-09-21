import { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeValida, setMensajevalida] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, telefono, fecha, hora, sintomas].includes('')) {
      setMensajevalida("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensajevalida('');
      }, 3000);
      return;
    }

    // asigna id
    const id = Math.random().toString().slice(2);

    const cita = {
      id,
      nombre,
      propietario,
      telefono,
      fecha,
      hora,
      sintomas
    };

    console.log(cita);

    setMensajeExito("Cita agendada exitosamente");

    setNombre('');
    setPropietario('');
    setTelefono('');
    setFecha('');
    setHora('');
    setSintomas('');
    setTimeout(() => {
      setMensajeExito('');
    }, 3000); 
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl text-center">Seguimiento de pacientes</h2>

      <p className="font-black text-lg mt-5 text-center mb-10">Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Adminístralos</span></p>
      {/* agendada */}
      {mensajeExito && (
        <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-white dark:text-green-400 dark:border-green-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <div>
          <span className="font-medium">{mensajeExito}</span>
        </div>
      </div>
      )}
      {/* error valida */}
      {mensajeValida && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-white dark:text-red-400 dark:border-red-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <div>
          <span className="font-medium">{mensajeValida}</span>
        </div>
      </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre del paciente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propietario">Propietario</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="telefono"
            type="tel"
            placeholder="Teléfono del propietario"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hora">Hora</label>
          <input className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sintomas">Síntomas</label>
          <textarea className="shadow appearance-none border rounded 
          w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-none focus:shadow-outline"
            id="sintomas"
            placeholder="Describa los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
          type="submit">Agregar cita</button>
      </form>
    </div>
  );
};


export default Formulario