import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          Cities: {
            screens: {
              CitiesScreen: 'cities',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'two',
            },
          },
        },
      },
      CityDetails: 'cityDetails',
      NotFound: '*',
    },
  },
};
