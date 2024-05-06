const express = require('express');
const cors = require("cors");

const accessLogsController = require("./controllers/accessLogsController.js");
const authorsController = require("./controllers/authorsController.js");
const booksController = require("./controllers/booksController.js");
const rolesController = require("./controllers/rolesController.js");
const usersController = require("./controllers/usersController.js")

var app = express();
app
    .use(cors())
    .use(express.json())
    .use(booksController)
    .use(rolesController)

const portName = process.env.PORT || 3000;
app.listen(portName, () => {
    console.log(`Listening in on PORT ${portName}`)
})