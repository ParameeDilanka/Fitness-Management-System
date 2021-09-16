const router = require('express').Router();
let Appointment = require('../models/appointment.model');

router.route('/').get((req, res) => {
  Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const time = req.body.time;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const instructorname = req.body.instructorname;
  

  const newAppointment = new Appointment({
    date,
    time,
    firstname,
    lastname,
    email,
    phone,
    instructorname,

  });

  newAppointment.save()
  .then(() => res.json('Appointment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Appointment.findById(req.params.id)
  .then(appointment => res.json(appointment))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appointment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Appointment.findById(req.params.id)
    .then(appointment => {
    appointment.date = Date.parse(req.body.date);
    appointment.time = req.body.time;
    appointment.firstname = req.body.firstname;
    appointment.lastname = req.body.lastname;
    appointment.email = req.body.email;
    appointment.phone = Number(req.body.phone);
    appointment.instructorname = req.body.instructorname;
   
    appointment.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;