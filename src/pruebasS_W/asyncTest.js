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

        /* ASYNC-AWAIT */
async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]

    var promesas = ids.map((id) => {
        return obtenerPersonaje(id)
    })

    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(id){
        onError(id)
    }
}

obtenerPersonajes()
