import { City, Forecast, Segment, Weather } from '../models/Forecast'

export const assembleForecast = (data: any): Forecast => {
  const forecast: Forecast = {
    cod: data.cod || '',
    message: data.message || '',
    cnt: data.cnt || 0,
    list: data.list.map(assembleSegment),
    city: assembleCity(data.city),
  }

  return forecast
}

const assembleCity = (data: any) => {
  const city: City = {
    coord: {
      lat: data.coord.lat || 0,
      lon: data.coord.lon || 0,
    },
    country: data.country || 'None',
    id: data.id || 0,
    name: data.name || 'No Name',
    population: data.population || 0,
    sunrise: data.sunrise || 0,
    sunset: data.sunset || 0,
    timezone: data.timezone || 0,
  }
  return city
}

const assembleSegment = (data: any) => {
  const segment: Segment = {
    main: {
      feels_like: data.main.feels_like || 0,
      humidity: data.main.humidity || 0,
      pressure: data.main.pressure || 0,
      temp: data.main.temp || 0,
    },
    weather: data.weather.map(assembleWeather),
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  }
  return segment
}

const assembleWeather = (data: any) => {
  const weather: Weather = {
    description: data.description || 'no description',
    icon: data.icon || '',
    id: data.id || 0,
    main: data.main || '',
  }
  return weather
}
