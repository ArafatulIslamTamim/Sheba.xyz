# 🧰 Sheba.xyz — Fullstack Home Service Platform

A modern **fullstack web application** for booking and managing home services.  
**Sheba.xyz** acts as your *personal assistant* — a one-stop solution where users can order any service, anytime.  
Built with **React**, **TailwindCSS**, **Node.js**, **Express**, and **MongoDB**, it provides a seamless experience for both customers and admins.

---

## 🌟 Key Features

### 👤 User Features
- 🔐 Register, login, and manage accounts  
- 🛠 Book and manage services (e.g., AC repair, car wash, salon)  
- 💳 Secure online payments with **SSLCommerz**  
- 📅 View booking and payment history  

### 🧑‍💼 Admin Features
- 🗂 Manage categories, services, and staff  
- 📊 View and control appointments and transactions  
- 🔒 Role-based route protection  
- 🧾 Real-time data updates for better management  

---

## 🏗️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Payment Gateway** | SSLCommerz |
| **Environment Management** | dotenv |
| **Utilities** | body-parser, CORS |

---

## 🗂️ Project Structure

```bash
sheba.xyz/
│
├── sheba.xyz-backend/          # Backend (API server)
│   ├── .env                    # Environment variables
│   ├── index.js                # Entry point
│   ├── package.json            # Backend dependencies
│   ├── package-lock.json
│   ├── .gitignore
│   └── README.md
│
└── sheba.xyz-frontend/         # React frontend
    ├── public/                 # Static assets
    ├── src/
    │   ├── components/         # Reusable UI components
    │   │   ├── Admin/          # Dashboard components
    │   │   │   ├── Appointment/
    │   │   │   ├── Category/
    │   │   │   ├── Payment/
    │   │   │   ├── Service/
    │   │   │   ├── Slot/
    │   │   │   ├── Staff/
    │   │   │   └── User/
    │   │   ├── Booking/
    │   │   │   └── BookingModal.js
    │   │   ├── Homepage/
    │   │   │   └── HeroSection.js
    │   │   ├── Services/
    │   │   │   └── ServiceCard.js
    │   │   ├── User/
    │   │   │   ├── AppointmentsHistory.js
    │   │   │   └── PaymentsHistory.js
    │   │   ├── Navbar.js
    │   │   ├── Sidebar.js
    │   │   ├── NotFound.js
    │   │   └── PrivateOutlet.js
    │   ├── context/
    │   ├── data/
    │   ├── hooks/
    │   ├── images/
    │   ├── pages/              # Main application pages
    │   │   ├── Admin/
    │   │   ├── Category/
    │   │   ├── Home/
    │   │   ├── Login/
    │   │   ├── Services/
    │   │   ├── SignUp/
    │   │   ├── Staffs/
    │   │   └── User/
    │   ├── App.js
    │   ├── index.js
    │   ├── App.css
    │   ├── index.css
    │   └── reportWebVitals.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ArafatulIslamTamim/Sheba.xyz
cd sheba.xyz


### 2️⃣ Backend Setup
cd sheba.xyz-backend
npm install


Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
STORE_ID=your_sslcommerz_store_id
STORE_PASSWORD=your_sslcommerz_store_password


Start the backend server:

npm run dev


📍 Backend runs at http://localhost:5000

3️⃣ Frontend Setup
cd ../sheba.xyz-frontend
npm install
npm start


Frontend runs at http://localhost:3000

🌐 Environment Variables
Variable	Description
PORT	Server port
MONGO_URI	MongoDB connection string
STORE_ID	SSLCommerz store ID
STORE_PASSWORD	SSLCommerz API password
📡 Example API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
GET	/api/services	Fetch all services
POST	/api/appointments	Create appointment
GET	/api/payments	Get payment records
🧠 Future Improvements

✅ JWT-based authentication

✅ Role-based authorization

✅ Booking cancellation

✅ Email or SMS notifications

✅ Admin analytics dashboard

🤝 Contributing

Contributions are welcome!
To contribute:

Fork this repository

Create a feature branch

Commit and push changes

Open a pull request 🎉

🪪 License

This project is licensed under the ISC License.
See the LICENSE
 file for more details.