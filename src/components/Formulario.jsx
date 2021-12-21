import React, {Fragment, useState} from 'react';
// import uuid from "uuid/v4";
// import PropTypes from "prop-types";


const Formulario = ({crearCita}) => {
   

    //State de citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [error, actualizarError] = useState(false);

    //Función  que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        // console.log(e.target.value)
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

        //Función para extraer los valores
        const {mascota, propietario, fecha, hora, sintomas} = cita;

        //Cuando el usuario presiona agrgar cita
        const submitCita = e => {
            e.preventDefault();

            //Validar
            if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {  //El trim lo que hace es eliminar los espacios en blanco que agregue el usuario
                actualizarError(true);
                return;   
        }
        //Eliminar el mensaje previo
        actualizarError(false);    

        // //Asignar id
        // cita.id = uuid();
        
        
        //Crear la cita
        crearCita(cita);
        

        //Reiniciar el form
        actualizarCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    }
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño De La Mascota"
                onChange={actualizarState}
                value={propietario}
                />
                <label>Fecha</label>
                <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
                />
                <label>Hora</label>
                <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
                />
                <label>Síntomas</label>
                <textarea 
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
                >
                </textarea>
                <button
                typeof="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
    }


// Formulario.PropTypes = {
//     crearCita: PropTypes.func.isRequired
// }
export default Formulario;


