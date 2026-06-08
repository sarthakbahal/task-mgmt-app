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

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- Git


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

Sarthak Bahal - MERN Stack Internship Assignment

## Acknowledgments

- Built as an internship assignment
- Uses MERN stack best practices
