import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from "@mui/material";

import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const OnlineAppointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, currencySymbol } = useContext(AppContext);

  const docInfo = doctors.find(doc => doc._id === docId);
  
  if (!docInfo) {
    return <p className='text-center text-red-500'>Doctor not found</p>;
  }

  const handleChatConsultation = () => {
    toast.info("Redirecting to chat consultation...");
    navigate('/chat/' + docId);
  };
  

  const handleJoinVideoCall = () => {
    toast.info("Redirecting to video consultation...");
    navigate('/video-call/' + docId);
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Card>
        <CardContent className='p-6'>
          <div className='flex flex-col sm:flex-row gap-6 items-center'>
            <img
              className='w-32 h-32 rounded-full shadow-md'
              src={docInfo.image}
              alt={docInfo.name}
            />
            <div>
              <h2 className='text-2xl font-bold'>{docInfo.name}</h2>
              <p className='text-gray-600'>{docInfo.speciality} - {docInfo.degree}</p>
              <p className='text-gray-500'>Experience: {docInfo.experience} years</p>
            </div>
          </div>
          
          <div className='mt-6'>
            <h3 className='text-xl font-semibold'>Consultation Details</h3>
            <p className='text-gray-600'>You have booked an online consultation with Dr. {docInfo.name}.</p>
          </div>
          
          <div className='mt-6'>
            <h3 className='text-lg font-medium'>Fees</h3>
            <p className='text-gray-700'>{currencySymbol}{docInfo.digitalFee}</p>
          </div>
          
          <div className='mt-6 flex flex-col sm:flex-row gap-4'>
            <Button onClick={handleJoinVideoCall} className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700'>Join Video Call</Button>
            <Button onClick={handleChatConsultation} className='w-full sm:w-auto bg-green-600 hover:bg-green-700'>
  Chat Consultation
</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnlineAppointment;
