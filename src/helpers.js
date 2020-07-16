import axios from "axios";

export function fetchGPS (address){
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;
    const RESPONSE_TYPE = "json";
    const SERVER_URL = `https://maps.googleapis.com/maps/api/geocode/${RESPONSE_TYPE}?`;
    return axios.get(`${SERVER_URL}key=${google_api_key}&address=${address}`)   
}
export default null;