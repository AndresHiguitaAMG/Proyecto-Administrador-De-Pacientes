import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if(!citasIniciales) {
    citasIniciales = [];

  }
  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operaciones cuando el state cambia 

  //Función que tome las ciertas actuales y agregue la nueva
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if(citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas))
    } else {
      localStorage.setItem("citas", JSON.stringify([]))
    }
  },[citas]);
  
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id); //De esta manera el filter solo elimina el que especifique
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Aministra tus citas";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
      <div className="row"></div>
      <div className="one-half column">
        <Formulario
        crearCita={crearCita}
        />
      </div>
      <div className="one-half column">
        <h2>{titulo}</h2>
        {citas.map(cita => (
          <Cita
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
          />
        ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
