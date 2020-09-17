/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
import { gql } from '@apollo/client'

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
        weather {
          main
          description
        }
      }
    }
  }
`;


export const weatherByCity = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
      lat
      lon
      timezone
      timezone_offset
      current {
        sunrise
        dt
        sunset
        temp
        feels_like
        pressure
        humidity
        dew_point
        uvi
        clouds
        visibility
        wind_speed
        wind_deg
        weather {
          id
          main
          description
          icon
        }
      }
      minutely {
        dt
        precipitation
      }
      hourly {
        dt
        temp
        feels_like
        pressure
        humidity
        dew_point
        clouds
        visibility
        wind_speed
        wind_deg
        weather {
          id
          main
          description
          icon
        }
        pop
      }
      daily {
        dt
        sunrise
        sunset
        temp {
          day
          min
          max
          night
          eve
          morn
        }
        feels_like {
          day
          night
          eve
          morn
        }
        pressure
        humidity
        dew_point
        wind_speed
        wind_deg
        weather {
          id
          main
          description
          icon
        }
        clouds
        pop
        uvi
      }
    }
  }
`;
