import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import CityDetailsScreen from '../screens/CityDetailsScreen';
import { CityParamList } from '../types';

const CityStack = createStackNavigator<CityParamList>();

export function CityNavigator() {
  return (
    <CityStack.Navigator>
      <CityStack.Screen
        name="CityScreen"
        component={CityDetailsScreen}
        options={{ title: 'Details' }}
      />
    </CityStack.Navigator>
  );
}