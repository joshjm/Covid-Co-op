// Constants.js
const prod = {
    url: {
        API_URL: "https://covid-co-op.herokuapp.com",
        FRONT_END_URL: "https://joshjm.github.io/Covid-Co-op"
     }
   };
const dev = {
    url: {
        API_URL: "http://localhost:3000", // rails - start first
        FRONT_END_URL: "http://localhost:3001" // react
    }
   };
export const config = process.env.NODE_ENV === "development" ? dev : prod;
