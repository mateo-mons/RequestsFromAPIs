const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const theFunction = async(url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)
        console.log(data.info.count)
        console.log(`Name: ${character.name}`)
        console.log(`Origin: ${origin.dimension}`)
    } catch(error) {
        console.error(error)
    }
}

theFunction(API)