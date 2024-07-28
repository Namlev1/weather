import Magnify from '../assets/icons/magnify.svg'
import Wind from '../assets/icons/wind.svg'
import Drop from '../assets/icons/drop.svg'
import Loading from '../assets/icons/loading.gif'
import changeCity from './changeCity'

const main = document.querySelector('#main')

function createCard() {
  const forecastDiv = document.createElement('div')
  forecastDiv.classList.add('card')

  const day = document.createElement('p')
  const temp = document.createElement('p')
  const img = document.createElement('img')
  img.classList.add('img-shadow')

  forecastDiv.appendChild(day)
  forecastDiv.appendChild(temp)
  forecastDiv.appendChild(img)
  return forecastDiv
}

function createInputDiv() {
  const inputWrap = document.createElement('div')
  inputWrap.id = 'input-wrap'

  const cityInput = document.createElement('input')
  cityInput.type = 'text'
  cityInput.value = 'Warsaw'
  cityInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      changeCity()
    }
  })

  const searchBtn = document.createElement('img')
  searchBtn.classList.add('search-btn')
  searchBtn.src = Magnify
  searchBtn.alt = 'Search button'
  searchBtn.addEventListener('click', changeCity)

  const load = document.createElement('img')
  load.alt = 'Loading icon'
  load.src = Loading
  load.id = 'load'

  const inputError = document.createElement('p')
  inputError.id = 'error'
  inputError.textContent = 'Invalid city name or network error.'

  inputWrap.appendChild(cityInput)
  inputWrap.appendChild(searchBtn)
  inputWrap.appendChild(load)
  inputWrap.appendChild(inputError)
  return inputWrap
}

function createDailyForecastDiv() {
  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'daily-forecast'

  for (let i = 0; i < 5; i += 1) {
    const forecastDiv = createCard()
    forecastContainer.appendChild(forecastDiv)
  }
  return forecastContainer
}

function createTodayRightDiv() {
  const todayDiv = document.createElement('div')
  todayDiv.id = 'today-right'
  const icon = document.createElement('img')
  icon.classList.add('img-shadow')
  icon.alt = 'Weather icon'
  const minP = document.createElement('p')
  const minTemp = document.createElement('p')
  const maxP = document.createElement('p')
  const maxTemp = document.createElement('p')

  minP.textContent = 'min:'
  maxP.textContent = 'max:'

  const city = document.createElement('p')
  city.id = 'city-right'

  todayDiv.appendChild(icon)
  todayDiv.appendChild(minP)
  todayDiv.appendChild(minTemp)
  todayDiv.appendChild(maxP)
  todayDiv.appendChild(maxTemp)
  todayDiv.appendChild(city)

  return todayDiv
}

function createHourlyForecastDiv() {
  const div = document.createElement('div')
  div.id = 'hourly-forecast'

  const header = document.createElement('p')
  header.textContent = 'Hourly Forecast'
  div.appendChild(header)

  for (let i = 0; i < 6; i += 1) {
    const card = createCard()
    div.appendChild(card)
  }

  return div
}

function createMainForecastDiv() {
  const div = document.createElement('div')
  div.id = 'main-forecast'

  const todayDiv = document.createElement('div')
  todayDiv.id = 'today-forecast'

  const todayTemp = document.createElement('h1')
  todayTemp.id = 'main-temp'

  const todayDesc = document.createElement('p')
  todayDesc.id = 'main-desc'

  const windDiv = document.createElement('div')
  windDiv.classList.add('today-param')
  windDiv.classList.add('wind')
  const windImg = document.createElement('img')
  windImg.alt = 'Wind image'
  windImg.src = Wind
  const todayWind = document.createElement('p')
  windDiv.appendChild(windImg)
  windDiv.appendChild(todayWind)

  const humidDiv = document.createElement('div')
  humidDiv.classList.add('today-param')
  humidDiv.classList.add('humid')
  const humidImg = document.createElement('img')
  humidImg.alt = 'Wind image'
  humidImg.src = Drop
  const todayHumid = document.createElement('p')
  humidDiv.appendChild(humidImg)
  humidDiv.appendChild(todayHumid)

  todayDiv.appendChild(todayTemp)
  todayDiv.appendChild(todayDesc)
  todayDiv.appendChild(windDiv)
  todayDiv.appendChild(humidDiv)

  const dailyForecastDiv = createDailyForecastDiv()

  div.appendChild(todayDiv)
  div.appendChild(dailyForecastDiv)
  return div
}

function createLeftDiv() {
  const leftDiv = document.createElement('div')
  leftDiv.id = 'left'
  const inputWrap = createInputDiv()
  const mainForecastDiv = createMainForecastDiv()

  leftDiv.appendChild(inputWrap)
  leftDiv.appendChild(mainForecastDiv)
  return leftDiv
}

function createRightDiv() {
  const rightDiv = document.createElement('div')
  rightDiv.id = 'right'

  const date = document.createElement('p')
  date.classList.add('header-text')
  const time = document.createElement('p')
  time.classList.add('header-text')

  const todayDiv = createTodayRightDiv()
  const hourlyForecast = createHourlyForecastDiv()

  rightDiv.appendChild(date)
  rightDiv.appendChild(time)
  rightDiv.appendChild(todayDiv)
  rightDiv.appendChild(hourlyForecast)
  return rightDiv
}

function createLoadingPage() {
  const div = document.createElement('div')
  div.id = 'loading-page'
  div.classList.add('visible')
  const loadGif = document.createElement('img')
  loadGif.alt = 'Loading icon'
  loadGif.src = Loading
  div.appendChild(loadGif)
  return div
}

export function createDomStructure() {
  const loadingPage = createLoadingPage()
  const leftDiv = createLeftDiv()
  const rightDiv = createRightDiv()
  main.appendChild(loadingPage)
  main.appendChild(leftDiv)
  main.appendChild(rightDiv)
}

export function hideLoading() {
  const loading = document.querySelector('#loading-page')
  loading.style.opacity = 0
  setTimeout(() => {
    loading.remove()
  }, 600)
}
