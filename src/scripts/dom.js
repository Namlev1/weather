const main = document.querySelector('#main')

function createDailyForecastDiv() {
  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'daily-forecast'
  for (let i = 0; i < 6; i++) {
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

export function createDomStructure() {
  const leftDiv = document.createElement('div')
  leftDiv.id = 'left'
  const rightDiv = document.createElement('div')
  rightDiv.id = 'right'
  const mainForecastDiv = createMainForecastDiv()
  leftDiv.appendChild(mainForecastDiv)
  main.appendChild(leftDiv)
  main.appendChild(rightDiv)
}
