import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSwr from 'swr'


const fetcher = (...args) => fetch(...args).then(response => response.json());

const Maps = () => {

	let url = "https://data.police.uk/api/crimes-at-location?date=2020-02&lat=52.629729&lng=-1.131592";


	const {data, error} = useSwr(url,fetcher );
	console.log(data)

	const crimes = data && !error ? data: [];

		return (
		 		<Map center={[43.5322015,-5.66111953]} zoom={13}>
		        <TileLayer
		          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		        />
		        {crimes.map(crime => {
		        	console.log(crime.id);
		        	return(
			        	<Marker
			        		key={crime.id}
			        		position={[crime.location.latitude, crime.location.longitude]}
		        		>
				          <Popup>
				            A pretty CSS3 popup. <br /> Easily customizable.
				          </Popup>
				        </Marker>
	        		)
		        	})}
		      </Map>
		)

}

export default Maps