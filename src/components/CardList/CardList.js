import React from 'react';
import Card from '../Card/Card';

const CardList = (props) => {
    const cardListItems = props.forecast.map(card => {
        return <Card stats={card} />
    })
	return (
        <ul>
            {cardListItems}
        </ul>
	)	
}

export default CardList;