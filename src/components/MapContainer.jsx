import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.css';

const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY
const CENTRE_OF_AUSTRALIA = {lat: -25.363, lng: 134.211}
const style = {
	width: '100%',
	height: '100%'
}
const containerStyle = {
	position: 'relative',  
	left: '0',
	width: '100%',
	height: '500px'
}

export class MapContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
		console.log(this.props);

	};

	render(){
		return (
			<Map 
			google={this.props.google}
			zoom={this.props.isLoggedIn ? 8 : 4}
			style={style}
			containerStyle={containerStyle}
			// centre on user if logged in
			initialCenter={this.props.isLoggedIn ? {lat: this.props.user.lat, lng: this.props.user.lng} : CENTRE_OF_AUSTRALIA}

			>
			{this.props.products.map((product) => {
				let coords = {lat: product.lat, lng: product.lng} 
				return(
					<Marker
						key={product.id}
						name={product.name}
						position={coords}
					>
					</Marker>	
				)
			})}
			</Map>
		);
	}
}
// export default MapContainer;
export default GoogleApiWrapper({
	apiKey: google_api_key
})(MapContainer);