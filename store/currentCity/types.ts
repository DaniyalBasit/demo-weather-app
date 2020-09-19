import { City, CurrentWeather } from "../../types";

export const SET_CURRENT_CITY = 'SET_CURRENT_CITY'
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER'

interface SetCurrentCityAction {
  type: typeof SET_CURRENT_CITY;
  payload: { details: City };
}

interface SetCurrentWeatherAction {
  type: typeof SET_CURRENT_WEATHER;
  payload: { currentWeather: CurrentWeather };
}

export interface CurrentCityState {
  details: City | null;
  currentWeather: CurrentWeather | null;
}

export type CurrentCityActionTypes = SetCurrentCityAction | SetCurrentWeatherAction
