import {
  CurrentCityState,
  CurrentCityActionTypes,
  SET_CURRENT_WEATHER,
  SET_CURRENT_CITY, SET_WEATHER_DETAILS
} from './types'

const initialState: CurrentCityState = {
  details: null,
  currentWeather: null,
  weatherDetails: null,
}

export function currentCityReducer(
  state = initialState,
  action: CurrentCityActionTypes
): CurrentCityState {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {
        ...state,
        details: action.payload.details
      }
    case SET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload.currentWeather
      }
    case SET_WEATHER_DETAILS:
      return {
        ...state,
        weatherDetails: action.payload.weatherDetails
      }
    default:
      return state
  }
}