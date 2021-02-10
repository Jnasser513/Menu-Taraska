const express = require("express");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const database = require("@internal/config/mongoose");

const apiRouter = require("@internal/routes/api.router");

const app = express();

database.connect();


app.use(cors());
app.use(logger('dev')); //Para logs de las peticiones
app.use(express.json()); //Para parsear el body de la req a json
app.use(express.urlencoded({ extended: false })); //Para parsear body's urlencoded
app.use(cookieParser());//Para parsear las cookies a JSON.

app.use("/api", apiRouter);

module.exports = app;