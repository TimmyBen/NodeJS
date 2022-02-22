const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");

const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/courses");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));
app.use(logger);
app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password"));

const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log(`Listening on port 3000!!...`));

app.listen(port, () => console.log(`Listening on port ${port}...`));
