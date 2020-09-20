import { City, CurrentWeather, DailyWeather } from '../../types'
import { SET_CURRENT_CITY, SET_CURRENT_WEATHER, CurrentCityActionTypes, SET_WEATHER_DETAILS } from './types'

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

export function setWeatherDetails(weatherDetails: DailyWeather): CurrentCityActionTypes {
  return {
    type: SET_WEATHER_DETAILS,
    payload: { weatherDetails }
  }
}
