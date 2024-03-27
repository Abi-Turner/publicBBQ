import axios from 'axios';
import { mapboxToken } from './config.js';

async function reverseGeocode(lat, lon) {
    try {
        const token = mapboxToken;
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxToken}`);
        
        const address = response.data.features[0].place_name;
        return address;
    } catch (error) {
        console.error("Error in reverse geocoding: ", error);
        throw error;
    }
}

export { reverseGeocode };




