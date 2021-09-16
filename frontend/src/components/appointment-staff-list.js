import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Appointment = props => (
  <tr>
    <td>{props.appointment.date.substring(0,10)}</td>
    <td>{props.appointment.time}</td>
    <td>{props.appointment.firstname}</td>
    <td>{props.appointment.lastname}</td>
    <td>{props.appointment.email}</td>
    <td>{props.appointment.phone}</td>
    <td>{props.appointment.instructorname}</td>
    <a href="/mailer"
   class="btn btn-outline-primary" id="email">
      <i class="fas fa-envelope">&nbsp;Send email</i></a>
      &nbsp;
  </tr>
)

export default class Staff extends Component {
  constructor(props) {
    super(props);
   
    
   
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

 

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }


  render() {
    return (
      <div className="container">
        <Link to={"/report"}>Generate report</Link><br></br>
     <center>
        <h3>Appointment List</h3><br></br>
        </center>
        <table className="table">
        <table bgcolor="#DEDEDE" align="center" width="100%">
          <thead className="text-gold">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Instructorname</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.appointmentList() }
          </tbody>
        </table>
        </table>
      </div> 
  )
  }
}