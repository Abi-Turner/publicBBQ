import express from "express";
import axios from "axios";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const API_URL = "https://data.melbourne.vic.gov.au/api/explore/v2.1/catalog/datasets/public-barbecues/records?limit=10"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data.results;
    res.render("index.ejs", { result });
    console.log(result)
  } catch (error) {
    res.render("index.ejs", { error: error.message })
    console.log(error.message)
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
});