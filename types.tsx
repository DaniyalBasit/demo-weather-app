import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
  CityDetails: undefined;
};

export type BottomTabParamList = {
  Cities: undefined;
  TabTwo: undefined;
};

export type CitiesParamList = {
  CitiesScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
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
  url: string;
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
