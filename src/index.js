import getWeatherData from './assets/scripts/api'

const city = 'Warsaw'
const weatherData = await getWeatherData(city)
console.log(weatherData)
