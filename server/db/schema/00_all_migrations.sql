DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS booking CASCADE;
DROP TABLE IF EXISTS yoga_session CASCADE;
DROP TABLE IF EXISTS yoga_center CASCADE;
DROP TABLE IF EXISTS yoga_position CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE yoga_center(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NULL,
    address VARCHAR(255) NOT NULL,
    lat FLOAT NOT NULL,
    lng FLOAT NOT NULL
);

CREATE TABLE yoga_session(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    availability BOOLEAN NOT NULL,
    duration INTEGER NOT NULL,
    price FLOAT,
    picture VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    yoga_positions INTEGER ARRAY,
    yoga_center_id INTEGER REFERENCES yoga_center(id) ON UPDATE CASCADE
);

CREATE TABLE booking(
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    yoga_session_id INTEGER REFERENCES yoga_session(id) ON UPDATE CASCADE,
    date DATE NOT NULL,
    time VARCHAR(225) NOT NULL
);

CREATE TABLE yoga_position(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NULL,
    video VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- CREATE TABLE position_session(
--     yoga_session_id INTEGER REFERENCES yoga_session(id) ON UPDATE CASCADE,
--     yoga_position_id INTEGER REFERENCES yoga_position(id) ON UPDATE CASCADE
-- );