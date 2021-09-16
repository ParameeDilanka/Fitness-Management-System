import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeInstructorname = this.onChangeInstructorname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        date: new Date(),
        time:'',
        firstname: '',
       lastname:'',
        email: '',
        phone:'',
        instructorname:'',
        users: []
      }
    }

  componentDidMount() {
    axios.get('http://localhost:5000/appointments/'+this.props.match.params.id)
      .then(response => {
        this.setState({
         date: new Date(response.data.date),
         time: response.data.time,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
         email: response.data.email,
          phone: response.data.phone,
       instructorname: response.data.instructorname,
         
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onChangeTime(e) {
    this.setState({
   time: e.target.value
    })
  }


  onChangeFirstname(e) {
    this.setState({
     firstname: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
     lastname: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
     email: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
     phone: e.target.value
    })
  } onChangeInstructorname(e) {
    this.setState({
      instructorname: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const appointment = {
        date: this.state.date,
        time: this.state.time,
         firstname: this.state.firstname,
     lastname: this.state.lastname,
         email: this.state.email,
         phone: this.state.phone,
         instructorname: this.state.instructorname
    }

    console.log(appointment);

    axios.post('http://localhost:5000/appointments/update/' + this.props.match.params.id, appointment)
    .then(() => {
      alert("Appointment Edited")
    }).catch((err)=>{
      alert("Failed to edit apointment")
    })
  window.location = '/';
  }

  
  render() {
    return (
    < div>
      <Link to={"/"}>Appointment List</Link><br></br>
      <center>
      <h3>Edit Appointment</h3><br></br>
      </center>
      <center>
      <form className="form2" onSubmit={this.onSubmit}>
        
      <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
             <label>Time:</label>
              <input type="text"
              className="form-control"
              required
             value={this.state.time}
             onChange={this.onChangeTime}
            />
        </div>
        <div className="form-group"> 
          <label>Firstname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
        </div>
      

        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              pattern = "[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}"
              />
        </div>
            

        <div className="form-group"> 
          <label>Phone: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              pattern = "[0-9]{10}"
              />
        </div>

        <div className="form-group"> 
          <label>Instructorname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.instructorname}
              onChange={this.onChangeInstructorname}
              />
        </div>

        </div>
        <div className="form-group">
        <input type ='submit' value='Edit Appointment'  name='Edit Appointment' className="form-control btn btn-primary"  style = {{marginTop:"30px"}}/>
        </div>
      </form>
      </center>
    </div>
    )
  }
}