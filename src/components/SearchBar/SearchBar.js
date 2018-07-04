import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {term: ''};
	}
	render() {
	return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })}
					className='search' 
					type='text'
					placeholder='Where are you?'
					/>
			</div>
		)
	}
}

export default SearchBar;