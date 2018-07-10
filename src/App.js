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
    error: undefined
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

      
   this.setState({
        temp: data.list[0].main.temp,
        city: data.city.name,
        wind: data.list[0].wind.speed,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: "",
        forecast: data.list.map(data => ({
          temp: data.main.temp,
          humidity: data.main.humidity,
          weather: data.weather[0].description,
          
      }))



  })    


  }

  render() {

    return (
      <div className="App">
      	 <Form
            getWeather={this.getWeather} 
         />
         <BigCard 
            temp={this.state.temp}
            description={this.state.description} 
            humidity={this.state.humidity}
            wind={this.state.wind}
          />
          <CardList forecast={this.state.forecast}
          />
          
      </div>
    );
  }
}

export default App;
