import React from 'react';
import sunny from '../Logos/sunny.png';
import rainy from '../Logos/rainy.png';
import cloudy from '../Logos/cloudy.png';
import './style.css';

const Card = ({ forecast, id }) => {
	const weatherDay = forecast[id].day;
	const weatherHigh = forecast[id].high;
	const weatherLow = forecast[id].low;
	const weatherText = forecast[id].text;

	function weatherImage() {
		if (weatherText === 'Thunderstorms') {
			return rainy;
		} 
	}


	return (
		<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'> 
			<img src={weatherImage()}></img>
			<div>{weatherDay}</div>
			<div>High: {weatherHigh}</div>
			<div>Low: {weatherLow}</div>
			<div>{weatherText}</div>
		</div>
	); 
}


export default Card;