import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import v1 from './v1';  //restful api

const app = express();
const { PORT } = process.env;

//using body-parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//static url
app.use('/', express.static(path.join(__dirname, './../public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', v1);

//server
app.listen(PORT, () => {
  console.log(`Express is listening on ${ PORT }`);
});