const express = require('express');
const router = express.Router();
const {
    getPostsByUsers
} = require('../db/helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/posts', (req, res) => {
        getUsersPosts()
            .then((usersPosts) => {
                const formattedPosts = getPostsByUsers(usersPosts);
                res.json(formattedPosts);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.post('/', (req, res) => {

        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    });
    // router.get('/login', (req, res) => {
    //     const userID = req.cookies.userID;
    //     if (userID) {
    //       res.redirect('/');
    //     } else {
    //       res.render('login');
    //     }
    //   });

    router.post("/login", (req, res) => {
        console.log(req.body);
        res.json("user login");
    //     const { email, password } = req.body;
    //     let queryString = `
    //   SELECT * FROM users
    // `;
    // let queryParams = [email, password];
    //     db.query(queryString, queryParams)
    //       .then(data => {
    //           req.cookies = 
    //           {
    //             userID: data.rows[0].id,
    //             // userEmail: data.rows[0].email,
    //             // userPassword: data.rows[0].password
    //           }
    //           res.status(200);

    //       })
    //       .catch(err => {
    //         res
    //           .status(500)
    //           .json({ error: err.message });
    //       });
      });
    
      

    return router;
};
