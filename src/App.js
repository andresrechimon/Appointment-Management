import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  //Appointments on Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem('Citas'));
  if(!initialAppointments){
    initialAppointments = []
  }
  //Appointments Array
  const [arrayAppointment, setArrayAppointment] = useState(initialAppointments);

  //Use Effect to do certain operations when the state changes.
  useEffect(() => {
    if(initialAppointments){
      localStorage.setItem('Citas', JSON.stringify(arrayAppointment))
    }else{
      localStorage.setItem('Citas', JSON.stringify([]))
    }
  }, [arrayAppointment, initialAppointments]);
  //Function that takes current appointments an add new ones
  const createAppointment = appointment => {
    setArrayAppointment([
      ...arrayAppointment,
      appointment
    ]);
  } 

  //Function that deletes an appointment by ID
  const deleteAppointment = id => {
    const newAppointments = arrayAppointment.filter(arrayA => arrayA.id !== id);
    setArrayAppointment(newAppointments);
  }

  //Conditional Message
  const title = arrayAppointment.length === 0 ? "No hay citas" : "Administra tus citas"

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
            createAppointment = {createAppointment}
            />
          </div>

          <div className="one-half column">
            <h2>{title}</h2>
            {arrayAppointment.map(arrayApp => (
              <Appointment 
              key={arrayApp.id}
              arrayApp={arrayApp}
              deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
