import React, { Component } from 'react';
import './App.css';
import Titles from './Components/titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '1a832790f787d7a0735d9af604add437';

class App extends Component {
  state = {
    Temperature:"",
    City: "",
    Country:"",
    Humidity:"",
    Description:"",
    error:""
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const City= e.target.elements.City.value;
    const Country= e.target.elements.Country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if (City && Country) {
      this.setState({
        City: data.name,
        Country:data.sys.country,
        Temperature:data.main.temp,
        Humidity:data.main.humidity,
        Description:data.weather[0].description,
        error:""
      });
    }else {
      this.setState({
        Temperature:"",
        City: "",
        Country:"",
        Humidity:"",
        Description:"",
        error:"Please enter the necessary values."
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 col-lg-6 title-container">
                  <Titles/>
                  </div>
                  <div className="col-xs-7 col-lg-6 form-container">
                    <Form getWeather = {this.getWeather}/>
                  <Weather
                    City= {this.state.City}
                    Country= {this.state.Country}
                    Temperature={this.state.Temperature}
                    Description={this.state.Description}
                    Humidity={this.state.Humidity}
                    error={this.state.error}
                  />
                  </div>
                </div>
             </div>
           </div>
         </div>
       </div>
    );
  }
}

export default App;
