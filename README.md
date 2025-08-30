Me-API Playground

This is a personal API playground that stores a candidate's profile information in a database and exposes it via a small API. The project includes a minimal frontend to showcase the data and demonstrate the API's functionality.

Resume Link: https://drive.google.com/file/d/1XrkoDZY-4tbUcKhmzGb8i0a5CyNvUuwJ/view?usp=sharing

Architecture
The application follows a classic client-server architecture:

Backend (Server): A RESTful API built with Node.js and the Express.js framework. It connects to a MongoDB database using Mongoose for data modeling.

Database: A MongoDB database hosted on MongoDB Atlas, configured to store a single document representing the candidate's profile.

Frontend: A single-page application built with React and bundled using Vite. It fetches and displays data from the backend API.

Deployment: The application is designed to be deployed with a static frontend served separately from the backend API, with CORS properly configured.

Setup (Local)
Prerequisites
Node.js (v18 or higher)

npm

MongoDB Atlas account (or a local MongoDB instance)

Backend Setup (server/ directory)
Navigate to the server directory:

cd server

Install backend dependencies:

npm install

Create a .env file from the .env.example file and configure your environment variables.

cp .env.example .env

MONGO_URI: Your MongoDB Atlas connection string.

PORT: The port for the server (e.g., 5000).

API_KEY: A secret key for write operations.

FRONTEND_URL: The URL of your frontend app (e.g., http://localhost:5173).

Seed the database with the profile data:

npm run seed

This command will populate your database with the data from seed/seed.js.

Start the backend server:

npm run dev

The server will run on the specified port, typically http://localhost:5000.

Frontend Setup (frontend/ directory)
Open a new terminal and navigate to the frontend directory:

cd frontend

Install frontend dependencies:

npm install

Create a .env file for the frontend and set the API URL:

cp .env.example .env

VITE_API_URL: The base URL for your backend API (e.g., http://localhost:5000/api).

Start the frontend development server:

npm run dev

The frontend will be available at http://localhost:5173.

Database Schema
The database stores a single Profile document.

Profile Collection Schema
name (String)

email (String)

education (String)

skills (Object, _id: false)

languages (Array of Strings)

frameworks (Array of Strings)

backendAndDatabase (Array of Strings)

toolsAndPlatforms (Array of Strings)

cloudDevOps (Array of Strings)

operatingSystems (Array of Strings)

coursework (Array of Strings)

projects (Array of Objects)

title (String)

description (String)

links (Object)

github (String)

live (String)

work (Array of Objects)

company (String)

role (String)

startDate (String)

endDate (String)

description (String)

links (Object, _id: false)

certificate (String, optional)

lor (String, optional)

offerLetter (String, optional)

links (Object)

github (String)

linkedin (String, optional)

portfolio (String)

resume (String, optional)

Sample API Calls
You can test the API endpoints using curl or Postman.

Read the Full Profile
curl http://localhost:5000/api/profile

Get All Projects
curl http://localhost:5000/api/query/projects

Search for Projects by a Skill
curl http://localhost:5000/api/query/projects?skill=react

Search for a Profile by Keyword (e.g., in skills, projects, or work)
curl http://localhost:5000/api/query/search?q=MongoDB

Get Health Check
curl http://localhost:5000/health

Known Limitations
The API currently stores only a single user profile.

Write operations (POST, PUT) are protected by a simple API key, which is not a secure authentication method for production.

The search functionality is a basic text search and could be optimized with more advanced MongoDB indexing.

The UI is minimal and does not include full error handling or comprehensive data validation.
