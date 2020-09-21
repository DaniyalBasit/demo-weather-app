import { Alert } from 'react-native';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyAhonU0_TdAQ2jiIu9DyGKt5FH_OtvNPjk');

async function getGeocodedLocation(city: string) {
  try {
    const json = await Geocoder.from(city);
    if (json.results[0].geometry.location_type === "APPROXIMATE") {
      return json.results[0].geometry.location;
    } else {
      Alert.alert('No location found', `We couldn't find the entered city or town`);
      return null;
    }
  } catch (e) {
    Alert.alert('No location found', `${e.message}`);
    return null;
  }
}

export { getGeocodedLocation };
