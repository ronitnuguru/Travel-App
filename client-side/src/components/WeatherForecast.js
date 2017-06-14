import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


import * as actions from '../actions';
import Chart from './Chart';

class WeatherForecast extends Component {
  componentDidMount(){
    this.props.getWeatherForecast(this.props.latitude, this.props.longitude);
    this.props.getCurrentWeatherForecast(this.props.latitude, this.props.longitude);
  }

  renderTempIcon(icon) {
    switch(icon) {
      case 'Mist':
        return <img src="https://png.icons8.com/water-element/win10/32" title="Water Element" width="32" height="32" />;
      case 'Clear':
        return <img src="https://png.icons8.com/sun/win8/32" title="Sun" width="32" height="32" />
      case 'Clouds':
        return <img src="https://png.icons8.com/cloud/win10/32" title="Cloud" width="32" height="32" />;
      case 'Rain':
        return <img src="https://png.icons8.com/rain/win10/32" title="Rain" width="32" height="32" />;
      case 'Snow':
        return <img src="https://png.icons8.com/snow/win8/32" title="Snow" width="32" height="32" />;
      case 'Haze':
        return <img src="https://png.icons8.com/fog-day/android/32" title="Fog Day" width="32" height="32" />;
      default:

    }
  }

  renderTodaysWeather(weather) {
    const sunriseDate = new Date(weather.sys.sunrise*1000);
    const sunriseFormattedTime = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;
    const sunsetDate = new Date(weather.sys.sunset*1000);
    const sunsetFormattedTime = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`;
    return (
      <div className="textCenter">
        <p>
          {this.renderTempIcon(weather.weather[0].main)}
          &nbsp;&nbsp;{Math.round(1.8*(weather.main.temp-273)+32)}
        </p>
        <p>
          <img src="https://png.icons8.com/sunrise/win8/32" title="Sunrise" width="32" height="32" />
          &nbsp;&nbsp;{sunriseFormattedTime}
        </p>
        <p>
          <img src="https://png.icons8.com/sunset/win8/32" title="Sunset" width="32" height="32" />
          &nbsp;&nbsp;{sunsetFormattedTime}
        </p>
      </div>
    );
  }

  renderWeatherData() {
    const { weatherForecast, currentWeatherForecast } = this.props;
    if (_.isEmpty(weatherForecast) || _.isEmpty(currentWeatherForecast)){
      return;
    }
    else{
      const name = weatherForecast.city.name;
      const temps = weatherForecast.list.map(weather => 1.8*(weather.main.temp-273)+32);
      const pressures = weatherForecast.list.map(weather => weather.main.pressure);
      const humidities = weatherForecast.list.map(weather => weather.main.humidity);

      return(
        <tr key={name}>
          <td>{this.renderTodaysWeather(currentWeatherForecast)}</td>
          <td><Chart data={temps} color="red" units="F" /></td>
          <td><Chart data={pressures} color="orange" units="hPa" /></td>
          <td><Chart data={humidities} color="green" units="%" /></td>
        </tr>
      );
    }


  }
  render() {
    return (
      <div>
        <br />
        <h4 className="mainSubHeading">Weather Forecast</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="textCenter">Today&#39;s Weather</th>
              <th className="textCenter">Temperature (F)</th>
              <th className="textCenter">Pressure (hPa)</th>
              <th className="textCenter">Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWeatherData()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weatherForecast, currentWeatherForecast }) {
  return {
    weatherForecast,
    currentWeatherForecast
  };
}

export default connect (mapStateToProps, actions)(WeatherForecast);
