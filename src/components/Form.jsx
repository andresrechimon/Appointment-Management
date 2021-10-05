import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {
    //Create Appointment State
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    });

    //Create Error State
    const [error, setError] = useState(false);
    //Function that is executed every time we modify an input.
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]:e.target.value
        })
    }

    //Function for extract values
    const {pet, owner, date, time, symptom} = appointment;

    //When the user press "Apuntar Cita"
    const submitAppointment = e => {
        e.preventDefault();

        //Validation
        if(pet.trim() == "" || owner.trim() == "" || date.trim() == "" || time.trim() == "" ||
        symptom.trim() == ""){
            setError(true)
            return;
        }
        //Delete Error Message
        setError(false);
        //Assign ID
        appointment.id = uuidv4();
        //Create appointment
        createAppointment(appointment);
        //Reset form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: ''
        })
    }   

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitAppointment}>
                <label>Nombre Mascota</label>
                <input 
                type="text" 
                name="pet"
                className="u-full-width"
                placeholder="Nombre de Mascota"
                onChange={handleChange}
                value={pet}
                />

                <label>Nombre Dueño</label>
                <input 
                type="text" 
                name="owner"
                className="u-full-width"
                placeholder="Nombre de Dueño"
                onChange={handleChange}
                value={owner}
                />

                <label>Fecha de Alta</label>
                <input 
                type="date" 
                name="date"
                className="u-full-width"
                onChange={handleChange}
                value={date}
                />

                <label>Hora</label>
                <input 
                type="time" 
                name="time"
                className="u-full-width"
                onChange={handleChange}
                value={time}
                />

                <label>Síntomas</label>
                <textarea
                className="u-full-width"
                name="symptom"
                onChange={handleChange}
                value={symptom}
                ></textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >Apuntar Cita</button>
            </form>
        </Fragment>
    );
}
 
Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
export default Form;