import './styles.css'
import createDomStructure from './scripts/domStructure'
import getWeatherData from './scripts/api'
import fillDomWithData from './scripts/domApiUtil'

createDomStructure()
const data = await getWeatherData('Warsaw')
console.log(data)
fillDomWithData(data)
