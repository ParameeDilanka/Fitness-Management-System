const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    instructorname: { type: String, required: true },
  
}, {
  timestamps: true,
}
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;