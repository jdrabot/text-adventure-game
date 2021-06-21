DROP DATABASE IF EXISTS game_items_db;

CREATE DATABASE game_items_db;

USE game_items_db;

CREATE TABLE characters (
    name VARCHAR (25) UNIQUE NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_role VARCHAR (25) UNIQUE NOT NULL
);

CREATE TABLE items (
    item_name VARCHAR (25) UNIQUE NOT NULL,
    item_description VARCHAR (150) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE weapons (
    weapon_name VARCHAR (25) UNIQUE NOT NULL,
    weapon_description VARCHAR (150) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE miscellaneous (
    misc_name VARCHAR (25) UNIQUE NOT NULL,
    misc_description VARCHAR (150) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY
); 