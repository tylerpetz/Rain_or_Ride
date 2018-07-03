import React from 'react';
import sunny from '../Logos/sunny.png';
import './style.css';

const Card = (props) => {
	return (
		<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
			<div>
				<h2>{props.day}</h2>
			</div>
			<div>
				<img style={{paddingTop: '5px'}} alt='logo' src={sunny}/>
			</div>
		</div>
	)
}

export default Card;