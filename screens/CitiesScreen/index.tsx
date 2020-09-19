import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import CityItem from './CityItem';
import { View } from '../../components/Themed';
import { DefaultCities } from '../../helpers/appHelper';
import { RootScreenNavigationProp, RootScreenRouteProp } from '../../types';

interface Props {
  route: RootScreenRouteProp;
  navigation: RootScreenNavigationProp;
}

export default function CitiesScreen(props: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DefaultCities}
        renderItem={({ item }) => (
          <CityItem
            city={item}
            route={props.route}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(item) => `city${item.name}`}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});
