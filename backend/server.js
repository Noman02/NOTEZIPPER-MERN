const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

const notes = require("./data/notes");

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.get("/", (req, res) => {
  res.send("app is running...");
});

app.listen(port, () => {
  console.log("server is running on port 5000");
});
