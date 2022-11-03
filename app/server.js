const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const myRoutes = require('./routes');
const PORT = process.env.PORT;

// connect db
require('./config/db').connect();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", myRoutes());

app.listen(PORT, () => console.log(`connected on PORT: ${PORT}`));


