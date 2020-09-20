/* tslint:disable */
/* eslint-disable */
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

export const WEEKLY_WEATHER = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
      daily {
        dt
        clouds
        dew_point
        humidity
        pressure
        uvi
        weather {
          main
          description
        }
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
      }
    }
  }
`;

export const DAILY_WEATHER = gql`
  query WeatherByCity($lat: String!, $lon: String!, $units: String!) {
    weatherByCity(lat: $lat, lon: $lon, units: $units) {
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
    }
  }
`;
