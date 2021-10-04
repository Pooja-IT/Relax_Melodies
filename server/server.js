const db = require('./db');
const dbHelpers = require('./db/helpers/dbHelpers')(db);

const bcrypt = require('bcrypt');

const jwtGenerator = require("./utils/jwtGenerator");

const cors = require("cors");

const authorization = require("./middleware/authorization");

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const users = require('./routes/users');
require('dotenv').config();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
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

//login a user
app.post('/login', async (req, res) => {
  try {
    //1. destucture the res.body
    const { email, password } = req.body;

    //2. check if user doesnt exist (if not throw error)
    const user = await db.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //3. check if the incoming password is the same as the database password

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //4. give them jwt token
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });

  } catch (error) {
    console.error(error);
  }
});

//Create a user
app.post("/register", async (req, res) => {

  console.log(req.body);
  
  try {

    //1. destructure the req.body (not needed yet)
    const { name, email, password } = req.body;

    
    //2. check if user exist (if users does then throw error)
    const results = await db.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (results.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }

    //3. Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //4. Enter the new user insisde out database
    const newUser = await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) returning *", [
      name,
      email,
      bcryptPassword
    ]);

    //5. Generating our jwt token
    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ token });

    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     user: results.rows[0]
    //   }
    // });

  } catch (error) {
    console.error(error);
  }
});


//gets all sessions
app.get("/api/v1/sessions", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM yoga_session");

    console.log(results.rows);

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

// get a certain positions with id
app.get("/api/v1/positions/:id", async (req, res) => {
  console.log(req.params);

  try {
    const results = await db.query("SELECT * FROM yoga_position WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        YogaPosition: results.rows[0]
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
    console.log(error);
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

app.get("/auth/is-verify", authorization, async (req, res) => {
  try {
    res.json(true)

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error")
  }
})

app.get("/privateRoute", authorization, async (req, res) => {
  try {
    //req.user has payload
    //res.json(req.user);

    const user = await db.query("SELECT name FROM users WHERE id = $1", [req.user]);

    res.json(user.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error")
  }
})

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent', async (req, res) => {
  const {paymentMethodType, currency} = req.body;

  // Each payment method type has support for different currencies. In order to
  // support many payment method types and several currencies, this server
  // endpoint accepts both the payment method type and the currency as
  // parameters.
  //
  // Some example payment method types include `card`, `ideal`, and `alipay`.
  const params = {
    payment_method_types: [paymentMethodType],
    amount: 1999,
    currency: currency,
  }

  // If this is for an ACSS payment, we add payment_method_options to create
  // the Mandate.
  if(paymentMethodType === 'acss_debit') {
    params.payment_method_options = {
      acss_debit: {
        mandate_options: {
          payment_schedule: 'sporadic',
          transaction_type: 'personal',
        },
      },
    }
  }

  // Create a PaymentIntent with the amount, currency, and a payment method type.
  //
  // See the documentation [0] for the full list of supported parameters.
  //
  // [0] https://stripe.com/docs/api/payment_intents/create
  try {
    const paymentIntent = await stripe.paymentIntents.create(params);

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});

// module.exports = app;
