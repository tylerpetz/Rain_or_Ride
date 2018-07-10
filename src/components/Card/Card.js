import React from 'react';


const Card = (props) => {
	console.log(props);

	return (
		<li>
            temp: { props.stats.main.temp },
            humidity: { props.stats.main.humidity },
            wind: { props.stats.wind.speed },
            description: { props.stats.weather[0].description }
		</li>
	)	
}

export default Card;