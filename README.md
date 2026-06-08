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

## Project Structure

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
│   │   │   └── Dashboard.jsx
│   │   ├── context/                # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── services/               # API services
│   │   │   ├── api.js
│   │   │   └── authService.js
│   │   ├── utils/                  # Helper functions
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
│   ├── .env.example                # Environment variables template
│   ├── server.js                   # Entry point
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- Git

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd crud
```

### 2. Setup MongoDB

#### Option A: MongoDB Atlas (Recommended)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string (格式: `mongodb+srv://username:password@cluster.mongodb.net/database`)

#### Option B: Local MongoDB

1. Install MongoDB from [official website](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   sudo systemctl start mongod
   ```

### 3. Backend Setup

```bash
cd server
npm install
```

#### Configure Environment Variables

Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

Update `.env` with your configuration:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d
```

#### Start Backend Server

```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### 4. Frontend Setup

```bash
cd ../client
npm install
```

#### Start Frontend Development Server

```bash
npm start
```

Frontend will run on `http://localhost:3000`

### 5. Access the Application

- Open browser and go to: `http://localhost:3000`
- Register a new account
- Login with your credentials
- Start managing your tasks!

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
  - Body: `{ name, email, password }`
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
- `GET /api/auth/me` - Get current user profile
  - Headers: `Authorization: Bearer <token>`

### Tasks

- `GET /api/tasks` - Get all tasks for authenticated user
  - Query params: `?page=1&limit=10&status=pending&search=query`
- `POST /api/tasks` - Create new task
  - Body: `{ title, description }`
  - Headers: `Authorization: Bearer <token>`
- `PUT /api/tasks/:id` - Update task
  - Body: `{ title, description, status }`
  - Headers: `Authorization: Bearer <token>`
- `DELETE /api/tasks/:id` - Delete task
  - Headers: `Authorization: Bearer <token>`

## Usage Guide

### Dashboard Features

1. **View Statistics**: See total, pending, and completed tasks at a glance
2. **Add Tasks**: Click "+ Add Task" button to create new tasks
3. **Edit Tasks**: Click edit icon on any task card
4. **Delete Tasks**: Click delete icon on any task card (with confirmation)
5. **Toggle Status**: Click check icon to mark task as completed/pending
6. **Search Tasks**: Use search bar to find tasks by title or description
7. **Filter Tasks**: Use status dropdown to filter by all/pending/completed
8. **Navigate Pages**: Use pagination controls for large task lists

### Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- CORS enabled
- Environment variables for sensitive data

## Development

### Running in Development Mode

**Backend:**
```bash
cd server
npm run dev  # Uses nodemon for auto-restart
```

**Frontend:**
```bash
cd client
npm start    # React hot reload
```

### Building for Production

**Frontend:**
```bash
cd client
npm run build
```

The build artifacts will be stored in the `client/build/` directory.

## Deployment

### Option 1: Frontend + Backend Separately

**Frontend (Vercel/Netlify):**
```bash
cd client
npm run build
# Deploy build folder
```

**Backend (Heroku/Render/ Railway):**
```bash
cd server
# Set environment variables
# Deploy server directory
```

### Option 2: Monorepo Deployment

Combine frontend build into backend and deploy as one app.

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your MONGODB_URI in `.env`
   - Verify MongoDB is running or Atlas is accessible
   - Check IP whitelist in MongoDB Atlas

2. **CORS Error**
   - Ensure backend CORS is configured
   - Check frontend proxy in `package.json`

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token is being sent in headers
   - Clear localStorage if needed

4. **Port Already in Use**
   - Kill process using port 5000 or 3000
   - Or change PORT in `.env`

## Performance Optimization

- **Client-side**: Debounced search, efficient re-renders
- **Server-side**: Server-side pagination, indexed queries
- **Network**: Axios interceptors, proper error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Your Name - MERN Stack Internship Assignment

## Acknowledgments

- Built as an internship assignment
- Uses MERN stack best practices