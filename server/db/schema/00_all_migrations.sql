DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS booking CASCADE;
DROP TABLE IF EXISTS yoga_session CASCADE;
DROP TABLE IF EXISTS yoga_center CASCADE;
DROP TABLE IF EXISTS yoga_position CASCADE;
DROP TABLE IF EXISTS booking CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    number INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE booking(
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    yoga_session_id INTEGER REFERENCES yoga_session(id) ON UPDATE CASCADE,
    date DATE NOT NULL
);

CREATE TABLE yoga_session(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
    duration INTEGER NOT NULL,
    price FLOAT,
    picture VARCHAR(255) NOT NULL,
    yoga_center_id INTEGER REFERENCES yoga_center(id) ON UPDATE CASCADE
);

CREATE TABLE yoga_center(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NULL,
    address VARCHAR(255) NOT NULL,

CREATE TABLE yoga_position(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NULL,
    video VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS position_session CASCADE;
CREATE TABLE position_session(
    yoga_session_id INTEGER REFERENCES yoga_session(id) ON UPDATE CASCADE,
    yoga_position_id INTEGER REFERENCES yoga_position(id) ON UPDATE CASCADE
);