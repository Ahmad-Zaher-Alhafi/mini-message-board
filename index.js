const express = require("express");
const path = require("node:path");

const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.get("/new", (req, res) => {
  res.render("form", { messages });
});

app.post("/new", (req, res) => {
  const user = req.body.autherText;
  const text = req.body.messageText;
  const added = new Date();

  messages.push({
    user,
    text,
    added,
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is listening to https://localhost:3000");
});
