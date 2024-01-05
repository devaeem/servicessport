import express, { Application, Request, Response } from 'express';
import { connectToDatabase, closeDatabaseConnection } from './Config/mongodb';
import { uuid } from 'uuidv4';
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')



const app: Application = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
require('dotenv').config()



const port:Number = 5431;

connectToDatabase();

app.get('/', (req:Request, res:Response) => {
  res.send('Hello, TypeScript with Express!');
  console.log('Hello')
});
const testapi = require("./Routes/test")
const category = require("./Routes/category")
const subcategory = require("./Routes/subcategory")


app.use('/api/',testapi)
app.use('/api/',category)
app.use('/api/',subcategory)

app.listen(port, () => {
  console.log(`Server is running on port tt ${process.env.PORT}`);
});
