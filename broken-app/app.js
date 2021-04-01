const express = require("express");
const axios = require("axios");
const ExpressError = require("./expressError");

const app = express();


app.use(express.json());


app.get("/", function (req, res) {
  res.send('Broken App');
});

app.post("/", async function (req, res, next) {

  // Accepts JSON requests containing an array of usernames, i.e. { "developers": ["joelburton", "elie"] } and returns their boi in JSON format.
  try {
    let githubUser = [];
    for (let dev of req.body.developers) {
      if (!dev) {
        throw new ExpressError("Username is required", 400);
      }
      let devInfo = await axios.get(`https://api.github.com/users/${dev}`);
      githubUser.push(devInfo);
    }
    let devs = await Promise.all(githubUser);
    let githubResponse = devs.map((dev) => {
      return { name: dev.data.name, bio: dev.data.bio };
    });
    return res.json(githubResponse);
  } catch (err) {
    next(err);
  }
});

/** 404 handler */
app.use(function (req, res, next) {
  return new ExpressError("Not found", 404);
});


/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;