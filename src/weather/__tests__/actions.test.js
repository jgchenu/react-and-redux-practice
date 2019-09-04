import * as actionTypes  from '../actionTypes';
import * as actions from '../actions';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { stub } from 'sinon';
const middlewares = [ thunk ];
const createMockStore = configureStore(middlewares);
const store = createMockStore({});

describe('weather/actions', () => {
  describe('fetchWeatherStarted', () => {
    it('should create an action to fetch start', () => {
      const action  =  actions.fetchWeatherStarted();
      expect(action.type).toBe(actionTypes.FETCH_STARTED);
    })
  })

  describe('fetchWeather', () => {
    let stubbedFetch;
    beforeEach(() => {
      stubbedFetch = stub(global, 'fetch');
    });
    afterEach(() => {
      stubbedFetch.restore();
    });

    it('should dispatch fetchWeatherSuccess action type on fetch success', () => {
      const mockResponse= Promise.resolve({
        status: 200,
        json: () => Promise.resolve ({
        weatherinfo: {}
        })
      });
      stubbedFetch.returns(mockResponse);
      return store.dispatch(actions.fetchWeather(1)).then(() => {
        const dispatchedActions = store.getActions();
        expect(dispatchedActions.length).toBe(2);
        expect(dispatchedActions[0].type).toBe(actionTypes.FETCH_STARTED);
        expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_SUCCESS);
        });
    })
  })
})


