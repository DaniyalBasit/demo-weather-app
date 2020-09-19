import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store';
import Jumbotron from '../../components/Jumbotron';
import { humanize } from '../../helpers/appHelper';

const mapState = (state: RootState) => ({
  currentCity: state.currentCity,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CityDetailsScreen(props: PropsFromRedux) {
  const { currentCity } = props;
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
      <View style={styles.detailsContainer}></View>
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
