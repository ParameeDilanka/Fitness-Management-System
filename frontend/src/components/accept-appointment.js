import React, { Component } from 'react';
import axios from 'axios';
import { Footer } from './Footer';

const Appointment = props => (
  <tr>
    <td>{props.appointment.date.substring(0,10)}</td>
    <td>{props.appointment.time}</td>
    <td>{props.appointment.firstname}</td>
    <td>{props.appointment.lastname}</td>
    <td>{props.appointment.email}</td>
    <td>{props.appointment.phone}</td>
    <td>{props.appointment.instructorname}</td>
    <td>
    <a href="/demo"
   class="btn btn-success" id="schedule">
      <i class="fas fa-clock">&nbsp;Schedule</i></a>
      &nbsp;

 <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }}
   class="btn btn-danger" id="decline">
      <i class="fas fa-trash-alt">&nbsp;Decline</i></a>
</td>
  </tr>
);



export default class AcceptAppointment extends Component {
  constructor(props) {
    super(props);
    
    this.deleteAppointment = this.deleteAppointment.bind(this)

    this.state = {appointments: []};
  }
  

  componentDidMount() {
    axios.get('http://localhost:5000/appointments/')
      .then(response => {
        this.setState({ appointments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAppointment(id) {
    axios.delete('http://localhost:5000/appointments/'+id)
    .then(() => {
      alert("Appointment Declined")
    }).catch((err)=>{
      alert("Failed to decline apointment")
    })

    this.setState({
        appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  acceptAppointment() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }
  
  render() {
    return (
      <div className="container">
        <center>
        <h3>Aceept or Decline Appointments</h3><br></br>
        </center>
        <table className="table">
        <table bgcolor="#ddffdd"  align="center" width="100%">
          <thead className="text-gold">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Instructorname</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.acceptAppointment() }
          </tbody>
      </table>
        </table>
      </div>
     ) }
   
}