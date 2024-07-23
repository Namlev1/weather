const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const KEY = '9fb2da87e60bc2656c1083417596f171'
const params = {
  appid: KEY,
  units: 'metric'
}

export default async function getWeatherData(city) {
  params.q = city
  const response = await fetch(
    BASE_URL + new URLSearchParams(params).toString()
  )
  return response.json()
}
