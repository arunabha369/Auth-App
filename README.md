---
# Role-Based Authentication & Authorization 🚀

A secure **Authentication and Authorization system** built with **Node.js, Express, MongoDB, JWT, and bcrypt**.  
This project demonstrates **user signup, login, JWT authentication, and role-based access control (Admin/Student/Visitor)** using middleware.

---

## 📌 Features

- **User Signup** – Create a new account with name, email, password, and role.  
- **Password Security** – Passwords are hashed with **bcrypt** before storing.  
- **User Login** – Authenticate using email & password.  
- **JWT Authentication** – Generate and verify JSON Web Tokens.  
- **Cookie Support** – Store JWT in secure HTTP-only cookies.  
- **Middleware Protection** – Protect routes using authentication middleware.  
- **Role-Based Authorization** – Separate access for **Admin**, **Student**, and others.  
- **MongoDB Integration** – Store user details securely in a NoSQL database.  

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database & ORM  
- **bcrypt** – Password hashing  
- **jsonwebtoken (JWT)** – Authentication tokens  
- **dotenv** – Environment variable management  
- **cookie-parser** – Handle cookies in requests  

---

## 📂 Project Structure

```

├── config/
│   └── database.js        # MongoDB connection setup
├── controller/
│   └── Auth.js            # Signup & Login logic
├── middleware/
│   └── auth.js            # JWT verification & role-based checks
├── models/
│   └── User.js            # User schema
├── routes/
│   └── user.js            # API routes
├── index.js               # Server entry point
├── .env                   # Environment variables
├── package.json           # Dependencies & scripts

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/role-based-auth.git
cd role-based-auth
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder:

```
PORT=4000
DATABASE_URL=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 4️⃣ Run the Server

For development (with auto-restart using nodemon):

```bash
npm run dev
```

For production:

```bash
npm start
```

Server will start on **[http://localhost:4000](http://localhost:4000)**

---

## 🔑 API Endpoints

### Auth Routes

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/api/v1/signup` | Register a new user     |
| POST   | `/api/v1/login`  | Login user & return JWT |

### Protected Routes

| Method | Endpoint          | Access   | Description                     |
| ------ | ----------------- | -------- | ------------------------------- |
| GET    | `/api/v1/test`    | Any User | Test authentication middleware  |
| GET    | `/api/v1/student` | Student  | Accessible only by Student role |
| GET    | `/api/v1/admin`   | Admin    | Accessible only by Admin role   |

---

## 📬 Example API Usage (Postman)

### 1. Signup

```json
POST /api/v1/signup
{
  "name": "Priyansh",
  "email": "test@gmail.com",
  "password": "12345",
  "role": "Student"
}
```

### 2. Login

```json
POST /api/v1/login
{
  "email": "test@gmail.com",
  "password": "12345"
}
```

✅ Returns a `token` (JWT).

### 3. Access Student Route

```json
GET /api/v1/student
Headers: { "Authorization": "Bearer <your-token>" }
```

---

## 🔐 Authentication Flow

1. **Signup** – User registers → password is hashed → stored in MongoDB.
2. **Login** – User logs in → password verified → JWT created → sent as cookie.
3. **Auth Middleware** – Verifies token before accessing routes.
4. **Role Middleware** – Grants/denies access based on role.



## 🤝 Contributing

Pull requests are welcome!
If you’d like to add new features (like Refresh Tokens, Forgot Password, OAuth), feel free to fork and improve 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

```


