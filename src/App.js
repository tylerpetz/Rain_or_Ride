import React, { Component } from 'react';
import { daysarray } from './daysarray'; 
import CardList from './components/CardList/CardList';

import './App.css';

//api
const clientId = 'dj0yJmk9aDNKM1MxTGVDYm5YJmQ9WVdrOVFsUmtjV296TldVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1kNg--';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className='headline'>Heres some Weather</h1>
        <CardList daysarray={daysarray}/>
      </div>
    );
  }
}

export default App;
