import CitySelector from './CitySelector';

import { connect } from 'react-redux';
import { fetchWeather } from '@/weather/actions';

const mapDispatchToProps = {
  onSelectCity: fetchWeather
}

export default connect(null, mapDispatchToProps)(CitySelector);