export const DefaultCities = [
  {
    name: "London",
    lat: "51.5074",
    lon: "-0.1278",
  },
  {
    name: "New York",
    lat: "40.7128",
    lon: "-74.0060",
  },
  {
    name: "Lahore",
    lat: "31.5204",
    lon: "74.3587",
  },
  {
    name: "Tokyo",
    lat: "35.6762",
    lon: "139.6503",
  }
]

export const humanize = (str: string) => {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

export const weatherImage = (weather: string) => {
  if (weather === 'Rain') {
    return 'https://s7d2.scene7.com/is/image/TWCNews/owen_jones_rain_jpg?wid=2000&hei=1125&$wide-bg$';
  } else if (weather === 'Clouds') {
    return 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Weather-Background.jpg';
  } else if (weather === 'Clear') {
    return 'https://images.financialexpress.com/2020/04/sky1200.jpg?w=1200&h=800&imflag=true';
  } else if (weather === 'Haze') {
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXmzTgZmM4LIsShvaUgozsJrcnLZvrT9CICA&usqp=CAU';
  }
  return 'https://wallpapercave.com/wp/X49EwD0.jpg';
}

export const weatherIcon = (weather: string) => {
  if (weather === 'Rain') {
    return 'weather-partly-rainy';
  } else if (weather === 'Clouds') {
    return 'weather-cloudy';
  } else if (weather === 'Clear') {
    return 'weather-sunny';
  } else if (weather === 'Haze') {
    return 'weather-hazy';
  }
  return 'weather-sunset';
}
