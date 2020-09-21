/* tslint:disable */
/* eslint-disable */
import { gql } from '@apollo/client'

// fragments start
const weatherFragment = `
  weather {
    main
    description
  }
`

const tempFragment = `
  temp {
    day
    min
    max
    night
    eve
    morn
  }
`
const feelsFragment = `
  feels_like {
    day
    night
    eve
    morn
  }
`

const commonWeatherFragment = `
  dt
  clouds
  dew_point
  humidity
  pressure
`
// fragments end

export const CURRENT_WEATHER = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
      timezone
      current {
        temp
        feels_like
        pressure
        humidity
        wind_speed
        ${weatherFragment}
      }
    }
  }
`;

export const WEEKLY_WEATHER = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
      daily {
        uvi
        ${commonWeatherFragment}
        ${weatherFragment}
        ${tempFragment}
        ${feelsFragment}
      }
    }
  }
`;

export const DAILY_WEATHER = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
      hourly {
        temp
        feels_like
        visibility
        wind_speed
        wind_deg
        pop
        ${commonWeatherFragment}
        ${weatherFragment}
      }
    }
  }
`;
