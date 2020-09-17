import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import CityTab from '../components/CityTab';

import { Text, View } from '../components/Themed';
import { DefaultCities } from '../helpers/appHelper';



export default function CitiesScreen() {
  const [tempData, setTempData] = useState(null);

  return (
    <View style={styles.container}>
      <CityTab city={DefaultCities[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
