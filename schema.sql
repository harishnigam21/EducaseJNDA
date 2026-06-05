CREATE DATABASE githubtask;
USE githubtask;
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT UNIQUE,
    username VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    bio TEXT,
    avatar_url TEXT,
    profile_url TEXT,
    public_repos INT DEFAULT 0,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    account_created_at DATETIME,
    analysis_score INT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);