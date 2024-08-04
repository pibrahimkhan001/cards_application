# User Cards Application
This project is a full-stack web application that displays cards of different users on a React frontend. The data is collected from a MongoDB database (demoDB) with a users collection. The backend is built using Node.js and Express, while the frontend is created with React.

## Table of Contents
* Installation
* Backend Setup
* Frontend Setup
* Database Setup
* Running the Application
* Screenshots
* Technologies Used
* Installation
To get started with this project, follow these steps.

### 1. Clone the repository
'''
git clone (https://github.com/pibrahimkhan001/cards_application.git)
cd user-cards-app
'''
### 2. Install dependencies
Navigate to both the backend and frontend directories and install the necessary npm packages.

For the backend:
'''
cd server
npm install
'''
For the frontend:
'''
cd ../client
npm install
'''
## Backend Setup
### 1. Environment Variables
Create a .env file in the backend directory and add the following variables:
'''
MONGO_URI=mongodb://127.0.0.1:27017/demoDB
PORT=5000
'''
### 2. Start the Backend Server
Start the backend server by running the following command in the backend directory:
'''
node server.js
'''
## Frontend Setup
### 1. Start the React Development Server
Navigate to the frontend directory and start the React development server:
'''
npm start
'''
The frontend should now be running on http://localhost:3000.

## Database Setup
### 1. Create the MongoDB Database
Ensure MongoDB is installed and running on your machine. Create a database named demoDB with a collection named users.

### 2. Import Data into MongoDB
You can import the initial data into the MongoDB demoDB database using the mongoimport command. Assuming you have a JSON file named users.json with your user data, run the following command:
'''
mongoimport --db demoDB --collection users --file users.json --jsonArray
'''
### Example users.json File
Here's an example of what your users.json file might look like:
'''
[
    {
        "albumId": 1,
        "id": 1,
        "name": "Mahammad Ibrahim",
        "email": "pibrahimkhan001@example.com",
        "title": "Lead Developer",
        "image": "/images/john.jpg"
    },
    {
        "albumId": 1,
        "id": 2,
        "name": "Aisha Khan",
        "email": "aishakhan999@example.com",
        "title": "Frontend Developer",
        "image": "/images/aisha.jpg"
    },
    {
        "albumId": 1,
        "id": 3,
        "name": "Rahul Sharma",
        "email": "rahul.sharma999@example.com",
        "title": "Backend Developer",
        "image": "/images/rahul.jpg"
    }
]
'''
### 3. Ensure the Images Are in Place
Make sure the images referenced in the image field are placed in the backend/images directory.

## Running the Application
Once both the backend and frontend servers are running, navigate to http://localhost:3000 in your browser. You should see the user cards displayed on the page.

## Technologies Used
* Frontend: React, CSS
* Backend: Node.js, Express
* Database: MongoDB
* Tools: Postman, MongoDB Compass

