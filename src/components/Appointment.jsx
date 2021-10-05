import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({arrayApp, deleteAppointment}) => (
    <div className="cita">
        <p>Mascota: <span> {arrayApp.pet} </span></p>
        <p>Dueño: <span> {arrayApp.owner} </span></p>
        <p>Fecha: <span> {arrayApp.date} </span></p>
        <p>Hora: <span> {arrayApp.time} </span></p>
        <p>Síntomas: <span> {arrayApp.symptom} </span></p>

        <button
        className="button eliminar u-full-width"
        onClick={() => deleteAppointment(arrayApp.id)}
        >Eliminar &times;</button>
    </div>
);

Appointment.propTypes = {
    arrayApp: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
} 
export default Appointment;