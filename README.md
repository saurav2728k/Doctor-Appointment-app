A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows patients to book appointments with doctors, manage schedules, and streamline healthcare communication.

🚀 Features
👨‍⚕️ For Patients

Register & Login with JWT Authentication

Browse available doctors by specialization

Book appointments online

View and manage booked appointments

Update profile details

👩‍⚕️ For Doctors

Secure login and profile management

Manage appointment schedule

Accept or reject patient requests

View patient details

🛠️ Admin Panel (Optional)

Manage doctors and patients

Approve doctor registrations

Monitor bookings

🏗️ Tech Stack

Frontend: React.js, Tailwind CSS / Bootstrap (choose as per your project)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (JSON Web Token)

Other Tools:

Axios (API requests)

Bcrypt.js (Password hashing)

dotenv (Environment variables)


⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/saurav2728k/doctor-appointment-app.git
cd doctor-appointment-app

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside backend/ and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev
