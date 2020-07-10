import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const apiKey = 'AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM';

const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
        <div>
            <Marker position={{ lat: -34.397, lng: 150.144 }} />
            <Marker position={{ lat: -34.497, lng: 150.644 }} />
        </div>
    )}
  </GoogleMap>
));

export default MapContainer;