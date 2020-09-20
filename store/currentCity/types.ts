import { City, CurrentWeather, DailyWeather } from '../../types';

export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_WEATHER_DETAILS = 'SET_WEATHER_DETAILS';

interface SetCurrentCityAction {
  type: typeof SET_CURRENT_CITY;
  payload: { details: City };
}

interface SetCurrentWeatherAction {
  type: typeof SET_CURRENT_WEATHER;
  payload: { currentWeather: CurrentWeather };
}

interface SetWeatherDetailsAction {
  type: typeof SET_WEATHER_DETAILS;
  payload: { weatherDetails: DailyWeather };
}

export interface CurrentCityState {
  details: City | null;
  currentWeather: CurrentWeather | null;
  weatherDetails: DailyWeather | null;
}

export type CurrentCityActionTypes =
  | SetCurrentCityAction
  | SetCurrentWeatherAction
  | SetWeatherDetailsAction;
