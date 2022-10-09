const router = require('express').Router();

/*
register
*/
router.post('/register', (req, res) => {
    console.log('Register method');
    res.send("Register");
});


/*
login
*/
router.post('/login', (req, res) => {
    res.send("Login");
});

module.exports = router;

