# MERN Music Player Web Application

A small full-stack web application developed using the MERN stack that allows users to play music tracks. The application features a user-friendly React.js frontend interface displaying all available music tracks, and a Node.js backend server to handle search requests and retrieve music data from MongoDB.

Live Link : https://music-player-web-app-eta.vercel.app/

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Frontend](#frontend)
- [Server](#server)


## Features

**Music Track List:** Display a list of available music tracks.

**Play Functionality:** Users can play a selected track from the results.

**Search Capability:** Implement a search functionality for users to find specific tracks.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, mongoose
- **Database:** MongoDB
- **Additional Libraries:** Redux, React-router

## Getting Started

### Prerequisites

**Node.js and npm installed.**

### Installation

Clone the repository:

   ```
   git clone https://github.com/your-username/music-player-app.git
   ```
#### Server Installation

Go to server folder
   ```
   cd server
   ```

install dependencies
```
npm install
```

run server
```
npm start
```

#### Frontend Installation

Go to frontend folder
   ```
   cd frontend
   ```

install dependencies
```
npm install
```

build and run
```
npm run dev
```

## Front End

- Home Page
![frontend01](https://github.com/tawsifmahmud05/MERN-Music-Player/assets/85132422/7c91e353-d729-473a-a5cc-2440ab4a7322)

- Search Page
![frontend02](https://github.com/tawsifmahmud05/MERN-Music-Player/assets/85132422/5ef92c2d-9c84-462d-a30b-e44ddefc8ed0)

## Server
### **API endpoint**
  
  POST /api/songs
  
  GET /api/songs
  
  GET api/songs/:id
  
  DELETE api/songs/:id
  
  POST /api/songs/search/

