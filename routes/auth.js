const express = require('express');
const { model } = require('mongoose');
const app = express();
const router = require('express').Router();

/*
register
*/
app.post('/register', (req, res) => {
    res.send("Register");
});


/*
login
*/
app.post('/login', (req, res) => {
    res.send("Login");
});

module.exports = router;

