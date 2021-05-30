import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { fizzbuzz } from "../routes/fizzbuzz.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home Page API
app.use("/home", (req, res) => {
  res.send("Home Page");
});

// Fizz Buzz API
app.post("/fizzbuzz", fizzbuzz);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
