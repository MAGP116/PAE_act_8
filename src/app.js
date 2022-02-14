const express = require("express");

const petsRoute = require("./routes/pet.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/pets", petsRoute);

// Handle errors with express
app.use("/pets", function (err, req, res, next) {
  if (err.details) return res.status(400).send(err.details[0].message);
  if (err instanceof NotFoundError) {
    return res.status(404).send(err.message);
  }
  res.status(503).send("Oooops something went wrong, try again");
});

module.exports = app;
