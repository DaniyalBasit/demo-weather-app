import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
  CityDetails: undefined;
};

export type BottomTabParamList = {
  Cities: undefined;
  Search: undefined;
};

export type CitiesParamList = {
  CitiesScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type CityParamList = {
  CityScreen: { city: City; currentWeather: CurrentWeather };
};

export type RootScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type RootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type City = {
  name: string;
  lat: string;
  lon: string;
}

export type CityQueryVars = {
  lat: string;
  lon: string;
  units: string;
}

type  WeatherDescription = {
  main: string;
  description: string;
}

export type CurrentWeather = {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherDescription[];
}

export type DailyWeather = {
  dt: number;
  clouds: number;
  dew_point: number;
  humidity: number;
  pressure: number;
  uvi: number;
  weather: WeatherDescription[];
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  }
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  }
}

export type WeeklyWeather = {
  weekly: DailyWeather[];
}
