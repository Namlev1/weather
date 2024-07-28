import { format } from 'date-fns'

function getDayName(date) {
  const options = { weekday: 'short' }
  return date.toLocaleDateString('en-US', options)
}

function getIconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

function fillTodayRight(today) {
  const div = document.querySelector('#today-right')
  const img = div.querySelector('img')
  img.src = getIconUrl(today.icon)
  const min = div.querySelector(':nth-child(3)')
  min.textContent = `${today.min}°C`
  const max = div.querySelector(':nth-child(5)')
  max.textContent = `${today.max}°C`
  const city = document.querySelector('#city-right')
  city.textContent = 'Warsaw'
}

function fillDate(date, time) {
  const dateP = document.querySelector('#right :nth-child(1)')
  dateP.textContent = date
  const timeP = document.querySelector('#right :nth-child(2)')
  timeP.textContent = time
}

function fillToday(today) {
  const todayTemp = document.querySelector('#main-temp')
  todayTemp.textContent = `${today.temp}°C`
  const todayDesc = document.querySelector('#main-desc')
  todayDesc.textContent = `${today.desc}`
  const todayWind = document.querySelector('.wind > p')
  todayWind.textContent = `${today.wind} m/s`
  const todayHumid = document.querySelector('.humid > p')
  todayHumid.textContent = `${today.humidity}%`
  fillTodayRight(today)
}

function fillDaily(daily) {
  const dailyCards = document.querySelectorAll('#daily-forecast > .card')
  dailyCards.forEach((card, id) => {
    const dayName = card.querySelector(':nth-child(1)')
    dayName.textContent = getDayName(daily[id].date)
    const dayTemp = card.querySelector(':nth-child(2)')
    dayTemp.textContent = `${daily[id].temp}°C`
    const dayImg = card.querySelector('img')
    dayImg.src = getIconUrl(daily[id].icon)
  })
  const dailyToday = dailyCards[0].querySelector(':nth-child(1)')
  dailyToday.textContent = 'Today'
}

function fillHourly(hourly) {
  const hourlyCards = document.querySelectorAll('#hourly-forecast > .card')
  hourlyCards.forEach((card, id) => {
    const time = card.querySelector(':nth-child(1)')
    time.textContent = format(hourly[id].date, 'h a')
    const dayTemp = card.querySelector(':nth-child(2)')
    dayTemp.textContent = `${hourly[id].temp}°C`
    const dayImg = card.querySelector('img')
    dayImg.src = getIconUrl(hourly[id].icon)
  })
}

function changeCityName(name) {
  const cityName = document.querySelector('#city-right')
  cityName.textContent = name
}

export default function fillDomWithData(data) {
  const { today, cityName, date, time } = data
  const { daily, hourly } = data.forecast

  fillDate(date, time)
  fillToday(today)
  fillDaily(daily)
  fillHourly(hourly)
  changeCityName(cityName)
}
