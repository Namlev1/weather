import getWeatherData from './api'
import fillDomWithData from './domApiUtil'

export default async function changeCity() {
  const load = document.querySelector('#load')
  const errorText = document.querySelector('#error')
  const city = document.querySelector('input').value

  load.classList.toggle('visible')
  errorText.classList.remove('visible')
  try {
    const data = await getWeatherData(city)
    fillDomWithData(data)
  } catch (error) {
    errorText.classList.add('visible')
  }
  load.classList.toggle('visible')
}
