import Magnify from '../assets/icons/magnify.svg'
import Wind from '../assets/icons/wind.svg'
import Drop from '../assets/icons/drop.svg'

const main = document.querySelector('#main')

function createDailyForecastDiv() {
  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'daily-forecast'

  for (let i = 0; i < 5; i += 1) {
    const forecastDiv = document.createElement('div')
    forecastDiv.classList.add('card')

    const day = document.createElement('p')
    day.textContent = 'Wed'
    const temp = document.createElement('p')
    temp.textContent = '20°C'
    const img = document.createElement('img')
    img.src = 'https://openweathermap.org/img/wn/10d@2x.png'

    forecastDiv.appendChild(day)
    forecastDiv.appendChild(temp)
    forecastDiv.appendChild(img)

    forecastContainer.appendChild(forecastDiv)
  }
  return forecastContainer
}

function createMainForecastDiv() {
  const div = document.createElement('div')
  div.id = 'main-forecast'

  const todayDiv = document.createElement('div')
  todayDiv.id = 'today-forecast'

  const todayTemp = document.createElement('h1')
  todayTemp.textContent = '20°C'
  todayTemp.id = 'main-temp'

  const todayDesc = document.createElement('p')
  todayDesc.id = 'main-desc'
  todayDesc.textContent = 'Cloudy'

  const windDiv = document.createElement('div')
  windDiv.classList.add('today-param')
  windDiv.classList.add('wind')
  const windImg = document.createElement('img')
  windImg.alt = 'Wind image'
  windImg.src = Wind
  const todayWind = document.createElement('p')
  todayWind.textContent = '8.9 km/h'
  windDiv.appendChild(windImg)
  windDiv.appendChild(todayWind)

  const humidDiv = document.createElement('div')
  humidDiv.classList.add('today-param')
  humidDiv.classList.add('humid')
  const humidImg = document.createElement('img')
  humidImg.alt = 'Wind image'
  humidImg.src = Drop
  const todayHumid = document.createElement('p')
  todayHumid.textContent = '80%'
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

function createInputDiv() {
  const inputWrap = document.createElement('div')
  inputWrap.id = 'input-wrap'

  const cityInput = document.createElement('input')
  cityInput.type = 'text'

  const searchBtn = document.createElement('img')
  searchBtn.classList.add('search-btn')
  searchBtn.src = Magnify
  searchBtn.alt = 'Search button'
  searchBtn.addEventListener('click', () => {
    console.log(cityInput.value)
  })

  inputWrap.appendChild(cityInput)
  inputWrap.appendChild(searchBtn)
  return inputWrap
}

export default function createDomStructure() {
  const leftDiv = document.createElement('div')
  leftDiv.id = 'left'
  const rightDiv = document.createElement('div')
  rightDiv.id = 'right'
  const inputWrap = createInputDiv()

  const mainForecastDiv = createMainForecastDiv()

  leftDiv.appendChild(inputWrap)
  leftDiv.appendChild(mainForecastDiv)
  main.appendChild(leftDiv)
  main.appendChild(rightDiv)
}
