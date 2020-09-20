import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { connect, ConnectedProps } from 'react-redux';

import { CURRENT_WEATHER } from '../../graphql/queries';
import {
  City,
  RootScreenNavigationProp,
  RootScreenRouteProp,
  CurrentWeather,
  CityQueryVars,
} from '../../types';
import { setCity, setCurrentWeather } from '../../store/currentCity/actions';

interface Props {
  city: City;
  route: RootScreenRouteProp;
  navigation: RootScreenNavigationProp;
}

interface WeatherData {
  weatherByCity: {
    current: CurrentWeather;
    timezone: string;
  };
}

const mapDispatch = {
  setCurrentCity: (city: City) => setCity(city),
  setCurrentWeather: (currentWeather: CurrentWeather) =>
    setCurrentWeather(currentWeather),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CityItem(props: Props & PropsFromRedux) {
  const { loading, error, data } = useQuery<WeatherData, CityQueryVars>(
    CURRENT_WEATHER,
    { variables: { lat: props.city.lat, lon: props.city.lon, units: 'metric' } },
  );
  const windowHeight = useWindowDimensions().height;

  if (error) {
    return (
      <View style={[styles.container, { height: windowHeight / 6 }]}>
        <Text>An error Occurred: {`${error}`}</Text>
      </View>
    );
  }

  function handleTouch() {
    if (data) {
      props.navigation.navigate('CityDetails');
      props.setCurrentCity(props.city);
      props.setCurrentWeather(data?.weatherByCity.current);
    }
  }

  return (
    <TouchableOpacity onPress={handleTouch}>
      <View style={[styles.container, { height: windowHeight / 6 }]}>
        <ImageBackground
          source={{ uri: props.city.url }}
          style={[styles.image, { height: windowHeight / 6 }]}>
          <View style={[styles.background, { height: windowHeight / 6 }]}>
            <View style={styles.descriptionWrap}>
              <Text style={styles.text}>
                {loading
                  ? `...`
                  : `${data?.weatherByCity.current.weather[0].main}`}
              </Text>
            </View>
            <View style={styles.infoWrap}>
              <Text style={styles.text}>{props.city.name}</Text>
              <Text style={styles.text}>
                {loading
                  ? `...`
                  : `${data && Math.round(data?.weatherByCity.current.temp)}°C`}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
  background: {
    width: '100%',
    backgroundColor: '#00000052',
    padding: 20,
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
  },
});

export default connector(CityItem);
