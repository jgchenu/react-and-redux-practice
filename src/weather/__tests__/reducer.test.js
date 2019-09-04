
import reducer from '../reducer';
import * as actions from '../actions';
import * as Status from '../constants';

describe('weather/reducer', () => {
  it('should  return loading status', () => {
    const action = actions.fetchWeatherStarted();
    const newState = reducer({}, action);
    expect(newState.status).toBe(Status.LOADING)
  })
})