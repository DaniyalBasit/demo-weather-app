import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { DailyWeather } from '../../types';
import { setWeatherDetails } from '../../store/currentCity/actions';
import DayilyWeatherItem from './DailyWeatherItem';

const mapDispatch = {
  setWeather: (weather: DailyWeather) => setWeatherDetails(weather),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  weeklyData: DailyWeather[];
}

function WeeklyWeather(props: Props & PropsFromRedux) {
  const [selectedIndex, setSelectedIndex ] = useState<number>(0);

  useEffect(() => {
    if (props.weeklyData.length) {
      props.setWeather(props.weeklyData[0]);
    }
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={props.weeklyData}
        renderItem={({ item, index }) => (
          <DayilyWeatherItem
            item={item}
            index={index}
            setWeather={props.setWeather}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        )}
        keyExtractor={(item) => `weekly${item.dt}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default connector(WeeklyWeather);
