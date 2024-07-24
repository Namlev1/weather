const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const KEY = '9fb2da87e60bc2656c1083417596f171'
const params = {
  appid: KEY,
  units: 'metric'
}

function getWindDirection(degree) {
  if (degree > 337.5 || degree <= 22.5) {
    return 'North'
  }
  if (degree > 22.5 && degree <= 67.5) {
    return 'Northeast'
  }
  if (degree > 67.5 && degree <= 112.5) {
    return 'East'
  }
  if (degree > 112.5 && degree <= 157.5) {
    return 'Southeast'
  }
  if (degree > 157.5 && degree <= 202.5) {
    return 'South'
  }
  if (degree > 202.5 && degree <= 247.5) {
    return 'Southwest'
  }
  if (degree > 247.5 && degree <= 292.5) {
    return 'West'
  }
  return 'Northwest'
}

function processData(data) {
  const date = new Date(data.dt * 1000)
  const windDirection = getWindDirection(data.wind.deg)
  const sunrise = new Date(data.sys.sunrise * 1000)
  const sunset = new Date(data.sys.sunset * 1000)
  const returnData = {
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    description: data.weather[0].description,
    date,
    city: data.name,
    real: data.main.feels_like,
    min: data.main.temp_min,
    max: data.main.temp_max,
    wind: {
      speed: data.wind.speed,
      direction: windDirection
    },
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    clouds: data.clouds.all,
    sunrise,
    sunset,
    lon: data.coord.lon,
    lat: data.coord.lat
  }
  return returnData
}

export default async function getWeatherData(city) {
  params.q = city
  const response = await fetch(
    BASE_URL + new URLSearchParams(params).toString()
  )
  const json = await response.json()
  return processData(json)
}
