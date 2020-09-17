import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { CURRENT_WEATHER } from '../graphql/queries';

interface City {
  name: string;
  lat: string;
  lon: string;
}

interface CityTabProps {
  city: City;
}

interface WeatherDescription {
  main: string;
  description: string;
}

interface CurrentWeather {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherDescription
}

interface CurrentWeatherVars {
  lat: string;
  lon: string;
  units: string;
}

export default function CityTab(props: CityTabProps) {
  const { loading, error, data } = useQuery<CurrentWeather, CurrentWeatherVars>(
    CURRENT_WEATHER,
    { variables: { lat: "31.5204", lon: "74.3587", units: "metric" } }
  );
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>An error Occurred: {`${error}`}</Text>
  return (
    <View>
      <Text>{props.city.name}</Text>
      <Text>{`${data?.temp}`}</Text>
    </View>
  )
}
