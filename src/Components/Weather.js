import React from 'react';

const Weather = props => {
    console.log(props);
    const { City,Country,Temperature, Description, Humidity,error} = props;
    return (
      <div className="weather__info">
        {City && Country && <p className="weather__key">
          Location: <span className="weather__value">{City},{Country}</span>
        </p>}
        {Temperature && <p className="weather__key">
          Temperature: <span className="weather__value">{Temperature}</span>
        </p>}
        {Description && <p className="weather__key">
          Description:<span className="weather__value">{Description}</span>
        </p>}
        {Humidity && <p className="weather__key">
          Humidity: <span className="weather__value">{Humidity}</span>
      </p>}
        {error && alert('Please enter the necessary values.')}
      </div>
    )
}

export default Weather;
