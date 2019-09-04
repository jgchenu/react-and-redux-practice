import Weather from './Weather';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const weather = state.weather;
  return {
    status: weather.status,
    weather: weather.weather,
    temp1: weather.temp1,
    temp2: weather.temp2,
    city: weather.city
  }
}

export default  connect(mapStateToProps)(Weather);