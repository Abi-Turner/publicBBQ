import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { reverseGeocode } from "./utilities/geocoding.js";

const app = express();
const port = 3000;
const API_URL = "https://data.melbourne.vic.gov.au/api/explore/v2.1/catalog/datasets/public-barbecues/records?limit=63"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const locations = response.data.results;

    const promises = locations.map(async location => {
      const { lon, lat } = location.co_ordinates;
      const address = await reverseGeocode(lat, lon);
      location.address = address;
    });

    await Promise.all(promises);

    res.render("index.ejs", { locations: JSON.stringify(locations) });
  } catch (error) {
    res.render("index.ejs", { error: error.message });
    console.log(error.message);
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
