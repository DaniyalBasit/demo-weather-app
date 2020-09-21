import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Text, View } from '../../components/Themed';
import Layout from '../../constants/Layout';
import { getGeocodedLocation } from '../../helpers/geocoderHelper';
import { RootScreenNavigationProp, RootScreenRouteProp } from '../../types';
import CityItem from '../CitiesScreen/CityItem';

interface LatLon {
  lat: number;
  lon: number;
}

interface Props {
  route: RootScreenRouteProp;
  navigation: RootScreenNavigationProp;
}

export default function SearchScreen(props: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const [cityCoords, setCityCoords] = useState<LatLon | null>(null);

  async function handleSubmit() {
    if (searchText.length) {
      const coords = await getGeocodedLocation(searchText);
      if (coords) {
        setCityCoords({
          lat: coords.lat,
          lon: coords.lng,
        });
      }
    }
  }

  function reset() {
    setSearchText('');
    setCityCoords(null);
  }

  return (
    <View style={styles.container}>
      <SearchBar
        blurOnSubmit
        autoCorrect={false}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Search Here..."
        onChangeText={setSearchText}
        value={searchText}
        onSubmitEditing={handleSubmit}
        onClear={reset}
        onCancel={reset}
        onFocus={reset}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {cityCoords && searchText && (
        <CityItem
          city={{
            name: searchText,
            lat: `${cityCoords.lat}`,
            lon: `${cityCoords.lon}`,
          }}
          route={props.route}
          navigation={props.navigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    alignSelf: 'center',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
