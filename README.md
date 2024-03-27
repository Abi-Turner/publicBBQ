**Melbourne BBQ Explorer**

![Website Screenshot](https://private-user-images.githubusercontent.com/117294682/317399759-707e521f-a119-4f27-add1-c908d48c9854.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE1NjMyNTIsIm5iZiI6MTcxMTU2Mjk1MiwicGF0aCI6Ii8xMTcyOTQ2ODIvMzE3Mzk5NzU5LTcwN2U1MjFmLWExMTktNGYyNy1hZGQxLWM5MDhkNDhjOTg1NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyN1QxODA5MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZTYyODQyMjk5YzkxNDBkOTc5ODBlNjAwNDA2M2UzYjYyYTdjOWI0NmRiZDI0NjdjMzg4MTE5MmU2ZDA5MzM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sPhNSb3WroX6AqI-bgqsG8xO5dXkzWxDdmIQoUprdBE)

**Introduction:**
Melbourne BBQ Explorer is a web application designed to help users explore the locations of public barbecues across Melbourne, Australia. Users can visualize these locations on an interactive map and obtain information about each barbecue spot.

**How to Use:**

1. **Accessing the Website:**
   - Visit the deployed website [here](https://melbourne-bbq-explorer.com).

2. **Exploring BBQ Locations:**
   - Upon accessing the website, users will be presented with an interactive map displaying the locations of public barbecues across Melbourne.
   - Users can click on individual map markers to view additional details about each BBQ spot, including its address.

3. **Interacting with the Map:**
   - Users can zoom in/out of the map using the mouse scroll wheel or the map controls.
   - The map can be panned by clicking and dragging.

**Tech Stack:**

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - Leaflet.js: An open-source JavaScript library for interactive maps.
  - MarkerCluster plugin for Leaflet: Used for clustering multiple markers to improve performance.

- **Backend:**
  - Node.js with Express.js: A web application framework for Node.js used for server-side logic.
  - Axios: A promise-based HTTP client for making requests to external APIs.
  - Body-parser: Middleware for handling incoming request bodies.
  
- **Geocoding Service:**
  - Mapbox API: Utilized for reverse geocoding to obtain addresses from latitude and longitude coordinates.

**Installation:**

1. Clone the repository:

   ```
   git clone https://github.com/your-username/melbourne-bbq-explorer.git
   ```

2. Install dependencies:

   ```
   cd melbourne-bbq-explorer
   npm install
   ```

3. Obtain Mapbox API Token:
   - Sign up for a Mapbox account and obtain an access token.

4. Update Configuration:
   - Replace the placeholder `mapboxToken` in `config.js` with your Mapbox API token.

5. Run the Application:

   ```
   npm start
   ```

6. Access the Application:
   - Open your web browser and navigate to `http://localhost:3000` to access the Melbourne BBQ Explorer.

**Contributing:**

- Contributions to the project are welcome. Feel free to fork the repository, make changes, and submit pull requests.

**License:**

- This project is licensed under the MIT License. See the LICENSE file for more details.

**Author:**

- [Your Name](https://github.com/your-username)

**Acknowledgments:**

- Special thanks to [OpenStreetMap](https://www.openstreetmap.org) for providing map data, and [Mapbox](https://www.mapbox.com) for their geocoding services.
- Inspired by the love for BBQs and exploration of Melbourne's outdoor spaces.
