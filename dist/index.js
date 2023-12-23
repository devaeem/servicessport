"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = (0, express_1.default)();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
require('dotenv').config();
const port = parseInt(process.env.PORT || '3001', 10);
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
    console.log('Hello');
});
const testapi = require("./Routes/test");
app.use('/api/', testapi);
app.listen(port, () => {
    console.log(`Server is running on port tt ${process.env.PORT}`);
});
