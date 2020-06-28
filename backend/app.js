const express = require("express");
const app = express();
const bp = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const route = require("./routes/route");

// -----------middle-wares-----------
app.use(morgan("dev"));
app.use(bp.urlencoded({
    extended: false
}));
app.use(bp.json());
app.use(cors());

// ------------routes[handle incoming req]-----------
// app.use("/auth", authRoute);
app.use("/route", route);

// -----------export-----------
module.exports = app;
