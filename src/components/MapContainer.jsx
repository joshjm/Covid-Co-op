import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY
const CENTRE_OF_AUSTRALIA = {lat: -25.363, lng: 134.211}
const MapContainer = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${google_api_key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={CENTRE_OF_AUSTRALIA}>
    {props.isMarkerShown && (
        <div>
            <Marker position={{ lat: -34.397, lng: 150.144 }} />
            <Marker position={{ lat: -34.497, lng: 150.644 }} />
        </div>
    )}
  </GoogleMap>
));

export default MapContainer;