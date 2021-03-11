const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const options = {crossDomain: true}


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, options, function(data){
                resolve(data)    
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`El personaje es ${personaje.name}`)
    })
    .catch(onError)


        /* PROMESAS EN PARALELO */
/*let ids = [1, 2, 3, 4, 5, 6, 7]

let promesas = ids.map((id) => {
    return obtenerPersonaje(id)
})

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)*/


        /* PROMESAS EN SERIE */ 
/*obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)
        //return obtenerPersonaje()
    })
    .catch(onError)*/