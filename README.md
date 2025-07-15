# SkillForge Backend

![Project Screenshot](./screenshot-backend.png)

## About the Project
SkillForge Backend is the server-side application for the SkillForge e-learning platform. It provides RESTful APIs for user authentication (including OAuth), course management, progress tracking, AI-powered features, and more. The backend is built with Node.js, Express, MongoDB, and integrates with Cloudinary for media storage and Google OAuth for authentication.

## Features
- User registration and login (JWT-based)
- Google OAuth authentication
- Instructor and student roles
- Course creation, management, and enrollment
- Progress tracking and streaks
- AI-powered features (Gemini API)
- Cloudinary integration for file uploads

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- Cloudinary account
- Google Cloud project (for OAuth)
- Gemini API key (for AI features)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-backend-repo-url>
   cd SkillForge-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root of `SkillForge-Backend` with the following variables:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SESSION_SECRET=your_session_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GEMINI_API_KEY=your_gemini_api_key
   NODE_ENV=development
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Documentation
- The backend exposes RESTful endpoints for authentication, courses, users, progress, and more.
- See the codebase for detailed route information.

## Project Structure
- `controllers/` - Business logic for each route
- `routes/` - Express route definitions
- `middleware/` - Custom middleware (auth, uploads, etc.)
- `models/` - Mongoose models
- `config/` - Configuration files (DB)

## Screenshot
 `screenshot-backend.png` 

---

## License
MIT 