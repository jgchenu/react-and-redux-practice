import React from 'react';


const CityCodes = {
  '北京': 101010100,
  '上海': 101020100 , 
  '广州': 101280101, 
  '深圳': 101280601
}

class CitySelector extends React.Component {

  componentDidMount() {
    const defaultCity =  Object.keys(CityCodes)[0];
    this.props.onSelectCity(CityCodes[defaultCity])
  }
  onChange = (value) => {
    this.props.onSelectCity(value.target.value);
  }
  render(){
    return (
      <select onChange={this.onChange}>
        {
          Object.keys(CityCodes).map(cityName => (
            <option value={CityCodes[cityName]} key={cityName}>{cityName}</option>
          ))
        }
      </select>
    )
  }
}

export default CitySelector;