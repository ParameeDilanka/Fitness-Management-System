import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZZZcfFeMiHPbuND7zck8rlcn6epFAnvuGBELtiSpQd2SP5HjGlSusp8fCfgr6NNQfUE&usqp=CAU" 
alt="Avatar" class="avatar"/>
</div>
<div class="header">
<img src="https://images.squarespace-cdn.com/content/v1/57b65e7fc534a53e7203ab60/1471573011955-R99ZL41TYS1SM3276RHW/C4FinalLogo.png?format=1500w" className="logo" alt="logo" />
<h1>C4 Fitness Center</h1>
</div>
<br></br><br></br><br></br>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">C4 Fitness Center</Link>
         <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Appointment </Link>
          </li>

          <li className="navbar-item">
          <Link to="/" className="nav-link">Appointment List</Link>
         </li>

          <li className="navbar-item">
          <Link to="/accept" className="nav-link">Accept Appointments</Link>
          </li>
          <li className="navbar-item">
          <Link to="/staff" className="nav-link">Staff </Link>
          </li>
         
          <li className="navbar-item">
          <Link to="/mailer" className="nav-link">Email </Link>
          </li>
          <li className="navbar-item">
          <Link to="/demo" className="nav-link">Schedular</Link>
          </li>

          <li className="navbar-item">
          <Link to="/report" className="nav-link">Report</Link>
          </li>
        </ul>
     </div>
      </nav>
    </div>
  
    );
  }
}