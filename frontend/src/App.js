import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js"
import AppointmentsList from "./components/appointments-list.component";
import EditAppointment from "./components/edit-appointment.component";
import AcceptAppointment from "./components/accept-appointment";
import CreateAppointment from "./components/create-appointment.component";
import Staff from "./components/appointment-staff-list";
import Mailer from "./components/mailer";
import Report from "./components/Report";
import Demo from "./components/Demo";
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/accept" component={ AcceptAppointment} />
      <Route path="/" exact component={AppointmentsList} />
      <Route path="/edit/:id" component={EditAppointment} />
      <Route path="/create" component={CreateAppointment} />
      <Route path="/staff" component={ Staff } />
      <Route path="/mailer" component={Mailer} />
      <Route path="/report" component={Report} />
      <Route path="/demo" component={Demo} />
      <Route path="/Footer" component={Footer} />
      <br></br><br></br>
      <Footer/>
      </div>
    </Router>
   
  );
}

export default App;
