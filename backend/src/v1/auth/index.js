const express = require('express');
const auth = express.Router();
const ctrl = require('./auth.ctrl');

auth.use('/auth', ctrl);

module.exports = auth;