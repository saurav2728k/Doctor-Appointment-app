import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')

    // State variable for getAllDoctors to store
    const [doctors, setDoctors] = useState([])

    // State variable for getAllAppointments to store
    const [appointments, setAppointments] = useState([])

    // State variable for dashboard of admin panel
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{aToken}})
            if(data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors);
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // change Doc Availablity
    const changeAvailability = async (docId) => {
        try {
            
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers:{aToken}})
            if(data.success) {
                toast.success(data.message)

                getAllDoctors()

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // get all appointments in admin panel
    const getAllAppointments = async () => {

        try {

            const {data} = await axios.get(backendUrl + '/api/admin/appointments', {headers:{aToken}})
            

            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments)


            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    // cancel appointment from admin panel
    const cancelAppointment = async (appointmentId) => {

        try {

            const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment', {appointmentId}, {headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                getAllAppointments()

            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    // fun to get the dashboard data from the api
    const getDashData = async () => {

        try {

            const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers:{aToken}})

            if(data.success) {
                setDashData(data.dashData)
                console.log(data.dashData);
                
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken,setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailability,
        appointments, setAppointments,getAllAppointments,
        cancelAppointment,
        dashData,getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider