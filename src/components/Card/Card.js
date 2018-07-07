import React from 'react';
import sunny from '../Logos/sunny.png';
import rainy from '../Logos/rainy.png';
import cloudy from '../Logos/cloudy.png';
import './style.css';

const Card = ({ forecast, wind, id }) => {
	const weatherDay = forecast[id].day;
	const weatherHigh = forecast[id].high;
	const weatherLow = forecast[id].low;
	const weatherText = forecast[id].text;
	const windSpeed = wind.speed;


	function weatherImage() {
		if (weatherText === 'Thunderstorms' || weatherText === 'Scattered Showers' || weatherText === 'Scattered Thunderstorms' || weatherText === 'Rain') {
			return rainy;
		} else if (weatherText === 'Cloudy' || weatherText === 'Mostly Cloudy' || weatherText === 'Partly Cloudy') {
			return cloudy;
		} else if (weatherText === 'Sunny' || weatherText === 'Mostly Sunny') {
			return sunny;
		}
	}

	return (
		<div className='avenir card ba bw0 tc grow bg-light-blue br3 pa1 ma2 dib bw2 shadow-5'> 
			<div className='b pt1 avenir f4'>{weatherDay}</div>
			<img className='pt3 pb3' alt='logo' src={weatherImage()}></img>
			<div className='pt1 pb1'>High: {weatherHigh}</div>
			<div className='pt1 pb1'>Low: {weatherLow}</div>
			<div className='pt1 pb1'>{weatherText}</div>
			<div className='pt1 pb1'>Wind Speed:{windSpeed} MPH</div>
		</div>
	); 
}


export default Card;