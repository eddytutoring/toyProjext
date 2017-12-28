import mysql from 'mysql';
import sha1 from 'sha1';
import dbConfig from '../../db';
import { Router } from 'express';

const controller = Router();
const connection = mysql.createConnection(dbConfig);

controller.post('/login', (req, res) => {
  const sql =
    `SELECT 
      * 
    FROM 
      USER 
    WHERE 
      email = '${req.body.email}' AND
      pwd = '${sha1(req.body.password)}'`;

  connection.query(sql, function(err, rows) {
      if(err) throw err;
      res.send(rows);
  });
});

module.exports = controller;