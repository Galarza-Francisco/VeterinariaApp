export const ListadoPacientes = ({ citas }) => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl text-center">Listado de Pacientes</h2>

      {citas.length === 0 ? (
        <p className="text-center mt-5">No hay citas aún</p>
      ) : (
        <ul className="mt-5">
          {citas.map((cita) => (
            <li key={cita.id} className="mb-3 p-4 border-b-2">
              <p><strong>Paciente:</strong> {cita.nombre}</p>
              <p><strong>Propietario:</strong> {cita.propietario}</p>
              <p><strong>Teléfono:</strong> {cita.telefono}</p>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Síntomas:</strong> {cita.sintomas}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListadoPacientes;
