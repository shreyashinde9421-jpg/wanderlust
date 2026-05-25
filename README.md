# Wanderlust 🌍🏡

Wanderlust is a full-stack accommodation booking web application inspired by modern travel and stay platforms. It allows users to explore, create, and manage property listings while providing a secure and user-friendly booking experience for travelers.

---

## ✨ Features

* 🔐 User Authentication (Signup, Login & Logout)
* 🏠 Create, Edit & Delete Property Listings
* 👤 Owner-based Authorization & Protected Routes
* ⭐ Review and Rating System
* 🗑️ Delete Reviews with Ownership Verification
* 📍 Interactive Maps & Location Search
* 🔎 Search Listings by Location & Categories
* 💰 Dynamic Tax Display
* 🖼️ Image Upload & Cloud Storage Integration
* 📱 Responsive UI for Better User Experience

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS
* React

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* Passport.js
* passport-local
* passport-local-mongoose
* express-session
* connect-mongo

### Image & File Handling

* Cloudinary
* Multer
* multer-storage-cloudinary

### APIs

* OpenCage Geocoding API

### Deployment & Version Control

* Render
* Git
* GitHub

---

## 📂 Project Structure

```bash
Wanderlust/
│── models/
│── routes/
│── controllers/
│── views/
│── public/
│── utils/
│── middleware/
│── app.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/wanderlust.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd wanderlust
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create Environment Variables

Create a `.env` file in the root directory and add:

```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret

MAP_API_KEY=your_opencage_api_key

ATLASDB_URL=your_mongodb_connection_url

SECRET=your_session_secret
```

### 5️⃣ Run the Application

```bash
npm start
```

or

```bash
nodemon app.js
```


## 📚 What I Learned

* Building scalable full-stack applications
* Authentication & Authorization using Passport.js
* RESTful Routing
* MongoDB Database Management
* Cloud Image Storage Integration
* API Integration
* Deployment using Render
* Session & Cookie Handling
