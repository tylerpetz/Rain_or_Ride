import React from 'react';
import Card from '../Card/Card';


const CardList = ({ daysarray }) => {
	return (
		<div>
		{
			daysarray.map((days, i) => {
				return (
					<Card 
						key={i}
						day={daysarray[i].day} 
						id={daysarray[i].id}  
					/>
				);
			})
		}
		</div>	
	);
}	




export default CardList;

