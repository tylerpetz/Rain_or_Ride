import React, { Component } from 'react';

import Form from './components/Form/Form';
import BigCard from './components/BigCard/BigCard';
import CardList from './components/CardList/CardList';
import './App.css';

const API_KEY = "1a93796ff9e54d849be4786794a606d1";

class App extends Component {
   state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    humidity: undefined,
    description: undefined,
    loading: false,
    forecast: [],
    error: false
  } 

  
  getWeather = async (e) => {

    e.preventDefault();
    const city = 'Sarasota';
    const country = 'us';

    const api_call = await 
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=
      ${city},${country}&appid=${API_KEY}&units=imperial`);

      const data = await api_call.json();
      console.log(data);

      const dataItem = data.list[0];

    this.setState({
      city: data.city.name,
      country: data.city.country,
      forecast: {
        temp: dataItem.main.temp,
        humidity: dataItem.main.humidity,
        wind: dataItem.wind.speed,
        description: dataItem.weather[0].description
      }
    })
  }   

  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <BigCard weather={this.state} />
        <CardList forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
