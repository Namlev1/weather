import getWeatherData from './api'
import fillDomWithData from './domApiUtil'

export default async function changeCity() {
  const load = document.querySelector('#load')
  const city = document.querySelector('input').value

  load.classList.toggle('visible')
  const data = await getWeatherData(city)
  fillDomWithData(data)
  load.classList.toggle('visible')
}
