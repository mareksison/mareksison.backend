-- ------------------------------
-- this is for initialising the database
-- ------------------------------

DROP TABLE IF EXISTS checkins;
DROP TABLE IF EXISTS users;

-- ------------------------------
-- table for user's credentials
-- ------------------------------
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL,
  team VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- ------------------------------
-- table for the individual checkin entries
-- ------------------------------
CREATE TABLE checkins (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  hrs FLOAT(10),
  tag TEXT,
  checkinText TEXT,
  checkinDate DATE DEFAULT (CURRENT_DATE),
  timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
