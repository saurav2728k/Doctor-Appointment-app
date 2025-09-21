import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PayPage = () => {
  const { id } = useParams(); // get appointment ID from URL
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleProceed = async () => {
    try {
      // ✅ Make sure the API base URL is correct
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/appointments/${id}/pay`;

      const { data } = await axios.put(apiUrl);

      if (data.success) {
        setStatus('✅ Payment marked as done!');
        setStatusType('success');

        // Redirect to My Appointments
        setTimeout(() => {
          navigate('/my-appointments');
        }, 1500);
      } else {
        setStatus('❌ Error: Payment not marked. Server responded without success.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('💥 Axios Error:', error);
      setStatus('❌ Server error. Could not mark payment.');
      setStatusType('error');
    }
  };

  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Pay Online</h2>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=YOUR-UPI-ID"
        alt="QR Code"
        className="mx-auto my-4"
      />
      <p className="text-gray-600 mb-4">Scan the QR code using your UPI app to pay.</p>

      <button
        onClick={handleProceed}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Proceed
      </button>

      {status && (
        <p
          className={`mt-4 font-medium ${
            statusType === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default PayPage;
