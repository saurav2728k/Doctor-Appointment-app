import express from 'express'
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)

// api to get all doctors in admin panel
adminRouter.post('/all-doctors',authAdmin,allDoctors)

// api to change doctors availability in admin panel
adminRouter.post('/change-availability',authAdmin,changeAvailability)

// api to get all appointments of user & doctors in admin panel
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)


// api to cancel appointments of users from admin panel
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)

// api to get data for admin dashboard in admin panel
adminRouter.get('/dashboard',authAdmin,adminDashboard)



export default adminRouter