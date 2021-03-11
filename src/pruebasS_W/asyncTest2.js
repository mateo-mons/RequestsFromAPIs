const fetchData = require('../utils/fetchData')
const API = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const theFunction = async(id) => {
    try {
        const people = await fetchData(`${API}${PEOPLE_URL.replace(':id', id)}`)
        console.log(`Name: ${people.name}`)
        console.log(`Weight: ${people.mass}Kg`)
    } catch(error) {
        console.error(error)
    }
}

theFunction(1)