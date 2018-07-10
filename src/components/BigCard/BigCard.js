import React from 'react';

import './style.css';

const BigCard = (props) => {
    console.log(props);
	return (
		<div>
            <h1>Weather for {props.weather.city}, {props.weather.country}</h1>
		</div>
	);
}


export default BigCard;