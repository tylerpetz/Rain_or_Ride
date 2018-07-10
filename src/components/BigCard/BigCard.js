import React from 'react';

import './style.css';

const BigCard = (props) => {
	return (
		<div>
			<h1>Temperature: {props.temp}</h1>
			<h3>Description: {props.description}</h3>
			<h3>Humidity: {props.humidity}%</h3>
			<h3>Wind Speed: {props.wind}mph</h3>

		</div>
		
	);
}


export default BigCard;