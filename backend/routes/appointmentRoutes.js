import express from 'express';
const router = express.Router();
import Appointment from '../models/appointmentModel.js'; // adjust path if needed

// Update payment status (mark as paid)
router.put('/:id/pay', async (req, res) => {
  try {
    console.log("📩 Received payment update for ID:", req.params.id);

    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      console.log("❌ Appointment not found with ID:", req.params.id);
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    // ✅ Only update the payment field (Boolean)
    appointment.payment = true;

    await appointment.save();

    console.log("✅ Payment marked as done for:", appointment._id);
    res.json({ success: true });
  } catch (error) {
    console.error('💥 Error updating payment:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
