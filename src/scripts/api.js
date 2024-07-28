import { isAfter, parse, startOfToday } from 'date-fns'

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const WEATHER_URL = `${API_BASE_URL}weather?`
const FORECAST_URL = `${API_BASE_URL}forecast?`
const API_KEY = '9fb2da87e60bc2656c1083417596f171'
const DEFAULT_PARAMS = {
  appid: API_KEY,
  units: 'metric'
}

function extractHourly(data) {
  const { list } = data
  return list.slice(0, 6)
}

function extractDaily(data) {
  return data.list.filter(forecast => {
    const day = parse(forecast.dt_txt, 'yyyy-MM-dd HH:mm:ss', new Date())
    return day.getHours() === 15 && isAfter(day, startOfToday())
  })
}

function formatData(item) {
  const temp = Math.round(item.main.temp)
  const { humidity } = item.main
  const { main: desc } = item.weather[0]
  const wind = Math.round(item.wind.speed * 10) / 10
  const date = new Date(item.dt * 1000)
  const { icon } = item.weather[0]
  const { temp_min: min, temp_max: max } = item.main
  return { temp, desc, wind, humidity, date, icon, min, max }
}

function getCityTime(timestamp, timezoneOffset) {
  const date = new Date((timestamp + timezoneOffset) * 1000)

  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  let hours = date.getUTCHours()
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours %= 12
  hours = hours || 12 // the hour '0' should be '12'
  const formattedHours = String(hours).padStart(2, '0')

  const formattedDate = `${day}.${month}.${year}`
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`

  return { formattedDate, formattedTime }
}

function processCurrentWeather(data) {
  const formattedData = formatData(data)
  const cityName = data.name
  const { formattedDate: date, formattedTime: time } = getCityTime(
    data.dt,
    data.timezone
  )
  return {
    formattedData,
    cityName,
    date,
    time
  }
}

function processNext4Days(data) {
  return extractDaily(data).map(formatData)
}

function processHourly(data) {
  return extractHourly(data).map(formatData)
}

function processForecast(data) {
  const daily = processNext4Days(data)
  const hourly = processHourly(data)
  return {
    daily,
    hourly
  }
}

async function fetchWeatherData(url, params) {
  const response = await fetch(url + new URLSearchParams(params).toString())
  return response.json()
}

async function getWeatherToday(city) {
  const params = { ...DEFAULT_PARAMS, q: city }
  const data = await fetchWeatherData(WEATHER_URL, params)
  return processCurrentWeather(data)
}

async function getForecast(city) {
  const params = { ...DEFAULT_PARAMS, q: city }
  const data = await fetchWeatherData(FORECAST_URL, params)
  return processForecast(data)
}

export default async function getWeatherData(city) {
  const {
    formattedData: today,
    cityName,
    date,
    time
  } = await getWeatherToday(city)
  const forecast = await getForecast(city)
  return {
    today,
    forecast,
    cityName,
    date,
    time
  }
}
