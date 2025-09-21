import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

// Endpoint to register the user
userRouter.post('/register',registerUser)


// Endpoint to login user
userRouter.post('/login',loginUser)

// Endpoint to get user Profile Page details
userRouter.get('/get-profile',authUser,getProfile)

// Endpoint to update user Profile Page details
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)

// Endpoint to book appointment
userRouter.post('/book-appointment',authUser,bookAppointment)

// Endpoint to show the user appointments
userRouter.get('/appointments',authUser,listAppointment)

// Endpoint to cancel the user appointments
userRouter.post('/cancel-appointment',authUser,cancelAppointment)


export default userRouter