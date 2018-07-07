import React from 'react';
import Card from '../Card/Card';
import ReactSiema from 'react-siema'

const CardList = (props) => {
	let slider
	
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

	const options = {
    duration: 750,
    perPage: 3,
    startIndex: 1

}



	return (
		<div>
            <ReactSiema {...options}>
    			{weatherCards}
			</ReactSiema>
        </div>
		);
};

export default CardList;