import React, { Component} from 'react';
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
    <td>
    <a href={"/edit/"+props.appointment._id}
   class="btn btn-warning" id="delete">
      <i class="fas fa-edit">&nbsp;Edit</i></a>
      &nbsp;
  
    <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }}
   class="btn btn-danger" id="delete">
      <i class="fas fa-trash-alt">&nbsp;Delete</i></a>
</td>
  </tr>
);



export default class AppointmentsList extends Component {
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
      alert("Appointment Deleted")
    }).catch((err)=>{
      alert("Failed to delete apointment")
    })

    this.setState({
        appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }
    
  filterContent(appointments, searchTerm){
    const result=appointments.filter((appointment) =>
    appointment.firstname.includes(searchTerm));
  
  this.setState({appointments: result});
  }



  handleTextSearch =(e)=>{
    const searchTerm=e.currentTarget.value;
    axios.get('http://localhost:5000/appointments/')
    .then((res) =>{
 if(res.data.success){
   this.filterContent(res.data.appointment, searchTerm)
 }
   });
  };
 
 
   

  render() {
    return (
      <div className ="container">
        <center>
        <h3>Appointments List</h3><br></br></center>
      <div className ="row">
        <div className="col-lg-9 mt-2-mb-2">
          </div> 
          <div className="col-lg-3 mt-2-mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchTerm"
            onChange={this.handleTextSearch}></input>
          </div>
      </div>

      <div>
        <table className="container">
        <table className="table">
        <table bgcolor="#ddddff" align="center" width="100%">
          <thead  className="text-gold">
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
            { this.appointmentList() }
            </tbody>
            </table> 
        </table>
        </table>
      </div>
      </div>
    )
  }
}










