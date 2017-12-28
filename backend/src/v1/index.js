const express = require('express');
const auth = require('./auth');

const v1 = express.Router();

v1.use('/v1', auth);

module.exports = v1;