import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { CURRENT_WEATHER } from '../graphql/queries';

interface CityTabProps {
  city: {
    name: string;
    lat: string;
    lon: string;
    url: string;
  };
}

interface WeatherDescription {
  main: string;
  description: string;
}

interface WeatherData {
  weatherByCity: {
    current: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      wind_speed: number;
      weather: WeatherDescription[];
    };
    timezone: string;
  };
}

interface CurrentWeatherVars {
  lat: string;
  lon: string;
  units: string;
}

export default function CityTab(props: CityTabProps) {
  const { loading, error, data } = useQuery<WeatherData, CurrentWeatherVars>(
    CURRENT_WEATHER,
    { variables: { lat: props.city.lat, lon: props.city.lon, units: 'metric' } },
  );
  const windowHeight = useWindowDimensions().height;

  if (error) return (
    <View style={[styles.container, { height: windowHeight / 6 }]}>
      <Text>An error Occurred: {`${error}`}</Text>
    </View>
  )

  return (
    <View style={[styles.container, { height: windowHeight / 6 }]}>
      <ImageBackground
        source={{ uri: props.city.url }}
        style={[styles.image, { height: windowHeight / 6 }]}>
        <View style={styles.descriptionWrap}>
          <Text style={styles.text}>
            {loading ? `...` : `${data?.weatherByCity.current.weather[0].main}`}
          </Text>
        </View>
        <View style={styles.infoWrap}>
          <Text style={styles.text}>{props.city.name}</Text>
          <Text style={styles.text}>
            {loading ? `...` : `${data?.weatherByCity.current.temp}`}°C
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
  descriptionWrap: {
    flex: 1,
    alignItems: 'flex-end',
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  image: {
    flex: 1,
    padding: 20,
  },
});
