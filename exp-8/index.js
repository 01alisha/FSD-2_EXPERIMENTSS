const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
  { id: 1, name: "Alisha" },
  { id: 2, name: "John" },
];

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  users.push(newUser);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});