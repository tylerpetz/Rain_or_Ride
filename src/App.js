import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

//some things i added
const moment = require('moment');
const time = moment().format('MMMM Do, YYYY');
const location = "sarasota, fl";
const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}")&format=json&env=store://datatables.org/alltableswithkeys`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      forecast: [],
      wind: [], 
    };
    
    this.forecastQuery();
    }

   forecastQuery = () => {
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({ 
        forecast: res.query.results.channel.item.forecast, 
        wind: res.query.results.channel.wind}))
      .catch(error => console.error(error));
  }
  

  render() {
    return (
      <div className="App">
      	<SearchBar />
      	<h1 className='avenir headline'>Forecast for the week of {time}</h1>
        <CardList 
          wind={this.state.wind}
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
