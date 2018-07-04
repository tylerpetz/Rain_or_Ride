import React, { Component } from 'react';
import { daysarray } from './daysarray'; 
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

//some things i added
const moment = require('moment');
const yw = require('weather-yahoo');
const time = moment().format('MMMM Do, YYYY');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { forecast: [] };

      yw.getSimpleWeather('sarasota,fl').then(res => {
        this.setState({ forecast: res.forecast });
        console.log(this.state)
    });
  }

  render() {
    return (
      <div className="App">
      	<SearchBar />
      	<h1 className='avenir headline'>Forecast for the week of {time}</h1>
        <CardList 
          forecast={this.state.forecast}
          daysarray={daysarray}
        />
      </div>
    );
  }
}

export default App;
