import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect, ConnectedProps } from 'react-redux';
import { MonoText } from "../../components/StyledText";
import { humanize } from "../../helpers/appHelper";
import { RootState } from "../../store";

const mapState = (state: RootState) => ({
  weatherDetails: state.currentCity.weatherDetails,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

function WeatherDetails(props: PropsFromRedux) {
  if (props.weatherDetails) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{humanize(props.weatherDetails.weather[0].description)}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.temp}>
            <MonoText>Morning: {`${Math.round(props.weatherDetails.temp.morn)}`}°C</MonoText>
            <MonoText>Day: {`${Math.round(props.weatherDetails.temp.day)}`}°C</MonoText>
            <MonoText>Evening: {`${Math.round(props.weatherDetails.temp.eve)}`}°C</MonoText>
            <MonoText>Night: {`${Math.round(props.weatherDetails.temp.night)}`}°C</MonoText>
          </View>
          <MonoText>Humidity: {`${props.weatherDetails.humidity}`}%</MonoText>
          <MonoText>Pressure: {`${props.weatherDetails.pressure}`}Pa</MonoText>
        </View>
      </View>
    )
  }
  return <View />;
}

export default connector(WeatherDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  date: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#eee',
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 10,
  },
  text: {
    alignSelf: 'center'
  },
  temp: {
    marginBottom: 15
  }
});
