import React from 'react';
import * as Status from '@/weather/constants';

class Weather extends React.Component {
  render() {
    const { status, city, weather, temp1, temp2 } = this.props;
    switch (status) {
      case Status.LOADING: {
        return <div>天气信息请求中...</div>
      }
      case Status.SUCCESS: {
        return <div>
          城市: {city},天气: {weather}
          最低: {temp1}, 最高: {temp2}
        </div>
      }
      case Status.FAIL: {
        return <div>天气信息请求失败</div>
      }
      default: {
        return <div>unexpected status {status}</div>
      }
    }
  }
}

export default Weather;