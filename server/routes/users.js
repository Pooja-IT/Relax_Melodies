const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO users (email, password, firstname, lastname)
       VALUES ($1::text, $2::text, $3::text, $4::text)
       RETURNING id;
    `,
      [req.body.email, req.body.password, req.body.firstname, req.body.lastname]
    );
  });
  return router;
};