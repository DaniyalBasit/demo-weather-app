import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  heading: string;
  subHeading: string;
  description?: string;
}

export default function Jumbotron(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={[styles.heading, styles.subHeading]}>
        {props.subHeading}
      </Text>
      {props.description && (
        <Text style={[styles.heading, styles.subHeading]}>
          {props.description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc107',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  subHeading: {
    fontSize: 24,
  },
});
