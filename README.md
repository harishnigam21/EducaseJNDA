# GitHub Profile Analyzer API

A backend service built with Node.js, Express.js, MySQL, and the GitHub Public API that analyzes GitHub user profiles, generates useful insights, and stores the analysis results in a MySQL database.

## Features

* Fetch GitHub user profile data using GitHub Public API
* Analyze user profile statistics
* Store analyzed profiles in MySQL
* Retrieve all analyzed profiles
* Retrieve a specific analyzed profile
* Calculate custom profile insights such as:

  * Total public repositories
  * Followers count
  * Following count
  * Custom analysis score

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API
* Axios
* mysql2
* dotenv

---

## Architecture

Client
   │
   ▼
Express API
   │
   ├── GitHub API
   │
   ▼
MySQL Database

---

## Installation

### 1. Clone Repository
git clone https://github.com/harishnigam21/EducaseJNDA
cd EducaseJNDA

### 2. Install Dependencies
npm install

### 3. Configure Environment Variables
Create a `.env` file in the project root:

PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=githubtask
DB_USER=root
DB_PASSWORD=your_password

### 4. Create Database
CREATE DATABASE githubtask;

Run the SQL schema provided in:
/schema.sql

### 5. Start Development Server
npm run dev

Server will start at:
http://localhost:5000

---

## Database Schema

### github_profiles

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT UNIQUE,
    username VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255),
    bio TEXT,
    avatar_url TEXT,
    profile_url TEXT,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    analysis_score INT DEFAULT 0,
    account_created_at DATETIME,
    analysis_score INT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints

### Analyze GitHub Profile
Fetches GitHub data, generates insights, and stores the analysis in MySQL.
#### Request
POST /api/profiles/analyze/:username
#### Example
POST /api/profiles/analyze/octocat
#### Response
{
  "success": true,
  "data": {
    "username": "octocat",
    "followers": 500,
    "public_repos": 25,
    "total_stars": 300,
    "top_language": "JavaScript",
    "most_starred_repo": "awesome-project",
    "analysis_score": 1850
  }
}

---

### Get All Analyzed Profiles
#### Request
GET /api/profiles
#### Response
[
  {
    "id": 1,
    "username": "octocat",
    "followers": 500,
    "public_repos": 25
  }
]

### Get Single Profile
#### Request
GET /api/profiles/:username
Ex:
GET /api/profiles/octocat
#### Response
{
  "id": 1,
  "username": "octocat",
  "followers": 500,
  "public_repos": 25
}

## Analysis Logic
The application generates a custom profile score using public GitHub metrics.
### Analysis Score Formula
analysis_score = public_repos * 2 + followers * 3 + public_gists;

This score provides a simple indicator of GitHub profile activity and community engagement.

---

## Project Structure

EDUCASEJNDA/
├── config/
│   └── db.js

├── controllers/
│   └── githubTask.js

├── services/
│   └── githubTask.js

├── models/
│   └── Profile.js

├── routes/
│   └── githubTask.js

├── app.js
└── server.js

```

## Author

Harish Nigam
