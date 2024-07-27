function getDayName(date) {
  const options = { weekday: 'short' }
  return date.toLocaleDateString('en-US', options)
}

function getIconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

function fillToday(today) {
  const todayTemp = document.querySelector('#main-temp')
  todayTemp.textContent = `${today.temp}°C`
  const todayDesc = document.querySelector('#main-desc')
  todayDesc.textContent = `${today.desc}`
  const todayWind = document.querySelector('.wind > p')
  todayWind.textContent = `${today.wind} km/h`
  const todayHumid = document.querySelector('.humid > p')
  todayHumid.textContent = `${today.humidity}%`
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

export default function fillDomWithData(data) {
  const { today } = data
  const { daily } = data.forecast
  const { hourly } = data.forecast

  fillToday(today)
  fillDaily(daily)
}
