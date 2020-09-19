import { City, CurrentWeather } from '../../types'
import { SET_CURRENT_CITY, SET_CURRENT_WEATHER, CurrentCityActionTypes } from './types'

export function setCity(city: City): CurrentCityActionTypes {
  return {
    type: SET_CURRENT_CITY,
    payload: { details: city }
  }
}

export function setCurrentWeather(currentWeather: CurrentWeather): CurrentCityActionTypes {
  return {
    type: SET_CURRENT_WEATHER,
    payload: { currentWeather }
  }
}
