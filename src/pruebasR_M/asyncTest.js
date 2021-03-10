const fetchData = require('../utils/fetchData')
const API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const theFunction = async(url_api, id) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${PEOPLE_URL.replace(':id', id)}`)
        const people = await fetchData(people.origin.url)
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.gender)
    } catch(error) {
        console.error(error)
    }
}

console.log('before')
theFunction(API, 1)
console.log('after')