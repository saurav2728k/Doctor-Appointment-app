import express from 'express'
import { doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)

// Api to login doctor
doctorRouter.post('/login', loginDoctor)

// Api to get specific doctor appointments for doctor panel
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)

// Api to mark complete appointments by doctors from doctor panel
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)

// Api to cancel appointments by doctors from doctor panel
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)

// Api to get dashboard data of doctors for doctor panel
doctorRouter.get('/dashboard',authDoctor, doctorDashboard)

// Api to get doctors profile data for doctor panel
doctorRouter.get('/profile',authDoctor, doctorProfile)

// Api to update doctors profile data from doctor panel
doctorRouter.post('/update-profile',authDoctor, updateDoctorProfile)


export default doctorRouter