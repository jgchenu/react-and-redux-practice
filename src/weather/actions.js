import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAIL } from '@/weather/actionTypes';


export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
})

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  payload: result
})

export const fetchWeatherFail = (error) => ({
  type: FETCH_FAIL,
  payload: error
})

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    dispatch(fetchWeatherStarted());
    fetch(apiUrl).then((response) => {
      if(response.status !== 200){
        throw new Error('Fail to get response with status', response.status);
      }
      response.json().then(responseJson => {
        dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch(error=>{
        throw new Error('Invalid json response :', error);
      })
    }).catch(error => {
      dispatch(fetchWeatherFail(error));
    })
  }
}