import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DailyWeather } from '../../types';
import { CurrentCityActionTypes } from '../../store/currentCity/types';

interface Props {
  item: DailyWeather;
  index: number;
  setWeather: (weather: DailyWeather) => CurrentCityActionTypes;
  selectedIndex: number;
  setSelectedIndex: any;
}

export default function DayilyWeatherItem(props: Props) {
  const { item } = props;
  const date = new Date(item.dt * 1000);
  const momentInt = moment(date);

  const backgroundColor = props.index === props.selectedIndex ? '#fff8e1' : '#eee';

  function handleTouch() {
    props.setWeather(item);
    props.setSelectedIndex(props.index);
  }

  return (
    <TouchableOpacity onPress={handleTouch}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.date, styles.text]}>
          {momentInt.format('DD MMM')}
        </Text>
        <Text style={styles.text}>Max: {`${Math.round(item.temp.max)}°C`}</Text>
        <Text style={styles.text}>Min: {`${Math.round(item.temp.min)}°C`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    width: 110,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 10,
  },
  date: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    alignSelf: 'center',
  },
});
