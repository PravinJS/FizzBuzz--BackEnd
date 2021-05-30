import { getFizzBuzzResult } from "../src/fizzbuzz/index.js";
export const fizzbuzz = (req, res) => {
  try {
    if (req.query && req.query.count) {
      let result = getFizzBuzzResult(req.query.count);
      res.status(200).send(result);
    } else {
      res.status(400).send("Invalid Parameter");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
