import './styles.css'
import getWeatherData from './scripts/api'
import fillDomWithData from './scripts/domApiUtil'
import { createDomStructure, hideLoading } from './scripts/domStructure'

createDomStructure()
const data = await getWeatherData('Warsaw')
hideLoading()
fillDomWithData(data)
