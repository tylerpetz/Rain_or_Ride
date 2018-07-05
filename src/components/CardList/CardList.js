import React from 'react';
import Card from '../Card/Card';

const CardList = (props) => {
	
	if(!props.forecast){
		return <div> Loading ... </div>;
	}

	const weatherCards = props.forecast.map((item, i) => {
		return <Card 
			key={i}
			id={i}
			forecast={props.forecast}
			wind={props.wind}
			/>
	});

	return (
		<ul>{weatherCards}</ul>
		);
};

export default CardList;