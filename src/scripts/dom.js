const main = document.querySelector('#main')
import Magnify from '../assets/icons/magnify.svg'

function createDailyForecastDiv() {
  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'daily-forecast'
  for (let i = 0; i < 6; i += 1) {
    const forecastDiv = document.createElement('div')
    forecastDiv.classList.add('card')
    const day = document.createElement('p')
    day.textContent = 'Wed'
    const temp = document.createElement('p')
    temp.textContent = '20°C'
    const desc = document.createElement('p')
    desc.textContent = 'Rainy'
    forecastDiv.appendChild(day)
    forecastDiv.appendChild(temp)
    forecastDiv.appendChild(desc)

    forecastContainer.appendChild(forecastDiv)
  }
  return forecastContainer
}

function createMainForecastDiv() {
  const div = document.createElement('div')
  div.id = 'main-forecast'

  const currentTemp = document.createElement('h1')
  currentTemp.textContent = '20°C'
  const currentDesc = document.createElement('p')
  currentDesc.textContent = 'Cloudy'

  const dailyForecastDiv = createDailyForecastDiv()

  div.appendChild(currentTemp)
  div.appendChild(currentDesc)
  div.appendChild(dailyForecastDiv)
  return div
}

function createInputWrap() {
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

export function createDomStructure() {
  const leftDiv = document.createElement('div')
  leftDiv.id = 'left'
  const rightDiv = document.createElement('div')
  rightDiv.id = 'right'
  const inputWrap = createInputWrap()

  const mainForecastDiv = createMainForecastDiv()

  leftDiv.appendChild(inputWrap)
  leftDiv.appendChild(mainForecastDiv)
  main.appendChild(leftDiv)
  main.appendChild(rightDiv)
}
