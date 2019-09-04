import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAIL } from './actionTypes';

let nextSeqid = 0;

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
    const seqid = ++ nextSeqid;
    const dispatchIfValid = (action) => {
      if(seqid === nextSeqid) {
        return dispatch(action)
      }
    }
    dispatchIfValid(fetchWeatherStarted());
    return fetch(apiUrl).then((response) => {
      if(response.status !== 200){
        throw new Error('Fail to get response with status', response.status);
      }
      response.json().then(responseJson => {
        dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch(error=>{
        dispatchIfValid(fetchWeatherFail(error));
      })
    }).catch(error => {
      dispatchIfValid(fetchWeatherFail(error));
    })
  }
}