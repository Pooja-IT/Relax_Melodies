const db = require('./db');
const dbHelpers = require('./db/helpers/dbHelpers')(db);

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api/users', usersRouter(dbHelpers));

//get all users
app.get("/api/v1/users", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM users");

    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        users: results.rows
      }
    })

  } catch (error) {
    console.log(error);
  }
  

});

//Create a user
app.post("/api/v1/users", async (req, res) => {

  console.log(req.body);
  
  try {
    const results = await db.query("INSERT INTO users (name, number, email, password) VALUES ($1, $2, $3, $4) returning *", [
      req.body.name,
      req.body.number,
      req.body.email,
      req.body.password
    ]);

    res.status(201).json({
      status: "success",
      data: {
        user: results.rows[0]
      }
    })

  } catch (error) {
    console.log(error);
  }
});


//gets all sessions
app.get("/api/v1/sessions", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM yoga_session");

    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        YogaSessions: results.rows
      }
    })

  } catch (error) {
    console.log(error);
  }
});

//get a certain session with id
app.get("/api/v1/sessions/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("SELECT * FROM yoga_session WHERE id = $1", [req.params.id]);
    // SELECT * FROM yoga_session WHERE id = req.params.id

    res.status(200).json({
      status: "success",
      data: {
        YogaSession: results.rows[0]
      }
    })
  } catch (error) {
    console.log(error);
  }
});


//Create a booking (book a session)
app.post("/api/v1/booking/:id", async (req, res) => {
  console.log(req.body);
  
  try {
    const results = await db.query("INSERT INTO booking (user_id, yoga_session_id, date, time) VALUES ($1, $2, $3, $4)", [
      req.body.user_id,
      req.body.yoga_session_id,
      req.body.date,
      req.body.time
    ]);
  } catch (error) {
    
  }
});

//Update a booking (Update a booked session)
app.put("/api/v1/booking/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
});

//Delete a booking
app.put("/api/v1/booking/:id", (req, res) => {
  req.status(204).json({
    status: 'sucess'
  })
});


const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});

// module.exports = app;