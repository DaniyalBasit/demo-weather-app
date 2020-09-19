export const DefaultCities = [
  {
    name: "London",
    lat: "51.5074",
    lon: "-0.1278",
    url: "https://www.discoverbritainmag.com/wp-content/uploads/2018/05/Victorian-London-Landmarks.jpg",
  },
  {
    name: "New York",
    lat: "40.7128",
    lon: "-74.0060",
    url: "https://cdn.britannica.com/66/154566-050-36E73C15/Times-Square-New-York-City.jpg",
  },
  {
    name: "Lahore",
    lat: "31.5204",
    lon: "74.3587",
    url: "https://lp-cms-production.imgix.net/2019-06/f08e7914532ff0507f29c0f978c415a1-badshahi-mosque.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1280&q=50&dpr=2",
  },
  {
    name: "Tokyo",
    lat: "35.6762",
    lon: "139.6503",
    url: "https://www.planetware.com/photos-large/JPN/japan-tokyo-asakusa-senso-ji-temple.jpg",
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
