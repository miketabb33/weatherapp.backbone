export type Forecast = {
  cod: string
  message: string
  cnt: number
  list: Segment[]
  city: City
}

export type City = {
  coord: Coordinates
  country: string
  id: number
  name: string
  population: 0
  sunrise: number
  sunset: number
  timezone: number
}

export type Coordinates = {
  lat: number
  lon: number
}

export type Segment = {
  main: MainDetails
  weather: Weather[]
  wind: Wind
}

export type MainDetails = {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
}

export type Weather = {
  description: string
  icon: string
  id: number
  main: string
}

export type Wind = {
  deg: number
  gust: number
  speed: number
}
