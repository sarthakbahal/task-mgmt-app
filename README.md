# Task Management Web Application

A fully-featured task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

### Core Functionality
- ✅ User authentication (Registration & Login)
- ✅ JWT-based secure authentication
- ✅ Create, Read, Update, Delete (CRUD) operations for tasks
- ✅ Mark tasks as completed or pending
- ✅ Protected routes and middleware

### Advanced Features ✨
- 🔍 Real-time search functionality
- 🎯 Filter tasks by status
- 📄 Pagination for efficient data handling
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Debounced search for performance
- 🚀 Smooth transitions and animations
- 📱 Fully responsive design
- 🔐 Secure password handling with bcrypt
- 🌊 Beautiful gradient backgrounds
- 📊 Task statistics dashboard

## Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **PostCSS & Autoprefixer** - CSS processing

### Backend
- **Node.js & Express.js** - Server framework
- **MongoDB & Mongoose** - Database
- **JWT (JSON Web Token)** - Authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** - [Download Git](https://git-scm.com/downloads)
- **npm** (comes with Node.js) or **Yarn**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd crud
```

### 2. Setup MongoDB

#### Option A: MongoDB Atlas (Recommended - Free)

1. **Create Account**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account

2. **Create Cluster**:
   - Click "Build a Database"
   - Choose "Free" tier
   - Select any cloud provider/region closest to you
   - Wait for cluster to be created (2-5 minutes)

3. **Create Database User**:
   - Go to "Database Access" → "Add New Database User"
   - Username: Choose a username (e.g., `taskmanager`)
   - Password: Create a strong password (remember this!)
   - Permissions: "Read and write to any database"

4. **Whitelist IP Addresses**:
   - Go to "Network Access" → "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add your specific IP address

5. **Get Connection String**:
   - Go to "Database" → "Connect" → "Connect your application"
   - Copy the connection string
   - Format: `mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority`

#### Option B: Local MongoDB Installation

1. **Install MongoDB**:
   - **Windows**: Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - **MacOS**: Use Homebrew: `brew install mongodb-community`
   - **Linux**: Follow distribution-specific instructions

2. **Start MongoDB Service**:
   ```bash
   # Windows
   net start MongoDB
   
   # MacOS
   brew services start mongodb-community
   
   # Linux (systemd)
   sudo systemctl start mongod
   ```

3. **Verify Installation**:
   ```bash
   mongosh --version
   # OR
   mongo --version
   ```

### 3. Backend Setup

#### Navigate to server directory:
```bash
cd server
```

#### Install dependencies:
```bash
npm install
```

#### Create environment file:
```bash
# Windows: copy .env.example .env
# Mac/Linux: cp .env.example .env
```

### 4. Frontend Setup

#### Navigate to client directory:
```bash
cd ../client
```

#### Install dependencies:
```bash
npm install
```

### 5. Run the Application

#### Option A: Run Both Servers Separately (Recommended)

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

#### Option B: Run All Together Using Root Scripts (if configured)

```bash
# From project root
npm run dev
```

### 6. Access the Application

- **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser
- **Backend API**: Available at [http://localhost:5000](http://localhost:5000)
- **API Documentation**: Visit [http://localhost:5000/](http://localhost:5000/)

## 📖 Usage Guide

### Getting Started

1. **Register**: Create a new account on the registration page
2. **Login**: Use your credentials to log in
3. **Dashboard**: You'll see the task management interface

### Dashboard Features

**Task Statistics**:
- View total, pending, and completed tasks at a glance
- Color-coded cards for quick overview

**Task Management**:
- **Add Task**: Click "+ Add Task" button to create new tasks
- **Edit Task**: Click the pencil icon to modify task details
- **Delete Task**: Click the trash icon to remove tasks (with confirmation)
- **Toggle Status**: Click the checkmark to mark tasks as completed/pending

**Advanced Features**:
- **Search**: Real-time search by task title or description
- **Filter**: Filter tasks by status (All/Pending/Completed)
- **Pagination**: Navigate through pages of tasks (10 per page)
- **Responsive**: Works seamlessly on desktop, tablet, and mobile

## 🔧 Project Structure

```
crud/
├── client/                          # React frontend
│   ├── public/
│   │   └── index.html              # HTML template
│   ├── src/
│   │   ├── components/             # Reusable components
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/                  # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/                # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── services/               # API services
│   │   │   ├── api.js
│   │   │   └── authService.js
│   │   ├── App.jsx                 # Main App component
│   │   ├── index.jsx               # Entry point
│   │   └── index.css               # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                         # Express backend
│   ├── config/
│   │   └── db.js                   # Database configuration
│   ├── middleware/
│   │   └── auth.js                 # Authentication middleware
│   ├── models/                     # Mongoose schemas
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/                     # API routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── controllers/                # Route controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── .env                        # Environment variables (not in git)
│   ├── server.js                   # Entry point
│   ├── vercel.json                 # Vercel configuration
│   └── package.json
├── .gitignore
└── README.md
```

## 🌐 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```

- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```

- `GET /api/auth/me` - Get current user profile
  - Headers: `Authorization: Bearer <token>`

### Tasks

- `GET /api/tasks` - Get all tasks for authenticated user
  - Query params: `?page=1&limit=10&status=pending&search=query`
  - Headers: `Authorization: Bearer <token>`

- `POST /api/tasks` - Create new task
  ```json
  {
    "title": "Complete project",
    "description": "Add all required features"
  }
  ```
  - Headers: `Authorization: Bearer <token>`

- `PUT /api/tasks/:id` - Update task
  ```json
  {
    "title": "Updated project",
    "description": "Add more features",
    "status": "completed"
  }
  ```
  - Headers: `Authorization: Bearer <token>`

- `DELETE /api/tasks/:id` - Delete task
  - Headers: `Authorization: Bearer <token>`

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Passwords hashed with bcrypt
- **Protected Routes**: All task operations require valid tokens
- **Input Validation**: Server-side validation with express-validator
- **CORS Protection**: Configured cross-origin policies
- **Environment Variables**: Sensitive data stored securely



## 📦 Building for Production

### Frontend

```bash
cd client
npm run build
```

This creates an optimized `build/` directory ready for deployment.

### Backend

The backend server is production-ready with:
- Environment variable configuration
- Error handling
- Security headers
- CORS configuration
- MongoDB connection pooling

## 🌍 Deployment Options

### Vercel (Recommended)

#### Frontend Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app/api
   ```
3. Deploy!

#### Backend Deployment

1. Create a new Vercel project from the `server/` directory
2. Set environment variables:
   ```
   MONGODB_URI=mongodb+srv://...
   JWT_SECRET=your_production_secret
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```
3. Deploy!

### Other Platforms

**Netlify, Heroku, Render, Railway** - Similar process:
1. Deploy frontend to platform
2. Deploy backend to platform  
3. Configure environment variables
4. Update frontend API URL

## 📊 Performance Optimization

### Client-Side Optimizations

- **Debounced Search**: 500ms delay to reduce API calls
- **Efficient Re-renders**: React.memo for expensive operations
- **Axios Interceptors**: Centralized error handling
- **Code Splitting**: Route-based splitting for smaller bundles

### Server-Side Optimizations

- **Server-side Pagination**: 10 tasks per page by default
- **Indexed Queries**: MongoDB indexes on searchable fields
- **Connection Pooling**: Efficient MongoDB connections
- **Input Validation**: Prevent invalid requests

## 🧪 Testing

### Manual Testing Checklist

- [ ] User can register a new account
- [ ] User can login with valid credentials
- [ ] User is redirected to dashboard after login
- [ ] Tasks display correctly
- [ ] User can create a new task
- [ ] User can edit existing tasks
- [ ] User can delete tasks
- [ ] Task status toggle works
- [ ] Search functionality works
- [ ] Filter by status works
- [ ] Pagination works correctly
- [ ] Protected routes work (cannot access without auth)
- [ ] Logout functionality works
- [ ] Error handling displays properly

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Test your changes before submitting
- Update README if needed
- Follow MERN best practices

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Sarthak Bahal** - MERN Stack Internship Assignment

## 🙏 Acknowledgments

- Built as an internship assignment for demonstrating full-stack development skills
- Uses MERN stack best practices
- Inspired by modern task management applications
- Includes responsive design with Tailwind CSS
