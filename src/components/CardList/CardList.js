import React from 'react';

const CardList = (props) => {
	return (
		<div>
            <h1>Temperature: {props.forecast.temp}</h1>
            <h3>Description: {props.forecast.description}</h3>
            <h3>Humidity: {props.forecast.humidity}%</h3>
            <h3>Wind: {props.forecast.wind}%</h3>
		</div>
	)	
}

export default CardList;