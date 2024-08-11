DROP DATABASE IF EXISTS user_registration;

CREATE DATABASE IF NOT EXISTS  user_registration;

SHOW DATABASES;

USE user_registration;

CREATE TABLE user (
                      id VARCHAR(15) PRIMARY KEY,
                      username VARCHAR(255) NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      email VARCHAR(255) NOT NULL
);
