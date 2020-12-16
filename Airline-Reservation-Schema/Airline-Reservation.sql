CREATE TABLE users(
    id NUMBER(11) PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    contact NUMBER(11),
    email VARCHAR(50),
    pwd VARCHAR(50),
    gender VARCHAR(50),
    date_of_birth DATE,
    role VARCHAR(50) DEFAULT 'user'
);



-----------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE flight(
    id NUMBER(11) PRIMARY KEY,
    name VARCHAR(255),
    from_loc VARCHAR(50),
    to_loc VARCHAR(50),
    arrive  VARCHAR(50),
    depart  VARCHAR(50),
    base_price FLOAT,
    duration VARCHAR(50)
);




--------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE flight_detail(
    id NUMBER(11) PRIMARY KEY,
    ticket VARCHAR(50),
    flight_id NUMBER(11),
    user_id NUMBER(11),
    booking_date DATE,
    journey_type VARCHAR(50),
    seat_no VARCHAR(50),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users,
    CONSTRAINT fk_flight_id FOREIGN KEY (flight_id) REFERENCES flight
);


------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE payment(
    id NUMBER(11) PRIMARY KEY,
    user_id NUMBER(11),
    flight_id NUMBER(11),
    payment_mode VARCHAR(255),
    date_of_payment DATE,
    amount FLOAT,
    CONSTRAINT p_user_id FOREIGN KEY (user_id) REFERENCES users,
    CONSTRAINT p_flight_id FOREIGN KEY (flight_id) REFERENCES flight
);

-----------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE passenger(
    id NUMBER(11) PRIMARY KEY,
    user_id NUMBER(11),
    name VARCHAR(255),
    date_of_birth DATE,
    gender VARCHAR(50),
    flight_id NUMBER(11),
    CONSTRAINT ps_user_id FOREIGN KEY (user_id) REFERENCES users,
    CONSTRAINT ps_flight_id FOREIGN KEY (flight_id) REFERENCES flight
);

------------------------------------------------------------------------------------------------