import getWeatherData from './assets/scripts/api'

const city = 'Warsaw'
console.log(await getWeatherData(city))
