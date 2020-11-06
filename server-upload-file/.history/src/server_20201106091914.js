const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;
let port = 3005;

var corsOptions = {
  origin: `http://localhost:`
};

app.use(cors(corsOptions));

const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});