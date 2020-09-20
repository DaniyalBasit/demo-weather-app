import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { View } from '../../components/Themed';
import { RootState } from '../../store';
import Jumbotron from '../../components/Jumbotron';
import { humanize } from '../../helpers/appHelper';
import { WEEKLY_WEATHER } from '../../graphql/queries';
import { CityQueryVars, DailyWeather } from '../../types';
import WeeklyWeather from './WeeklyWeather';
import WeatherDetails from './WeatherDetails';

const mapState = (state: RootState) => ({
  currentCity: state.currentCity,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface WeatherData {
  weatherByCity: {
    daily: DailyWeather[];
  };
}

function CityDetailsScreen(props: PropsFromRedux) {
  const { currentCity } = props;

  if (currentCity.details) {
    let { loading, error, data } = useQuery<WeatherData, CityQueryVars>(
      WEEKLY_WEATHER,
      {
        variables: {
          lat: currentCity.details.lat,
          lon: currentCity.details.lon,
          units: 'metric',
        },
      },
    );

    return (
      <View style={styles.flexOne}>
        <View style={styles.flexOne}>
          {currentCity.details && currentCity.currentWeather && (
            <Jumbotron
              heading={currentCity.details.name}
              subHeading={`${currentCity.currentWeather &&
                Math.round(currentCity.currentWeather.temp)
                }°C`}
              description={humanize(
                `${currentCity.currentWeather.weather[0].description}`,
              )}
            />
          )}
        </View>
        <View style={styles.detailsContainer}>
          {loading && <Text>Loading Data...</Text>}
          {data && <WeeklyWeather weeklyData={data.weatherByCity.daily} />}
          {data && <WeatherDetails />}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.flexOne}>
      <View style={styles.flexOne}>
        {currentCity.details && currentCity.currentWeather && (
          <Jumbotron heading="Error" subHeading="There are no city details" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  detailsContainer: {
    flex: 3,
  },
});

export default connector(CityDetailsScreen);
