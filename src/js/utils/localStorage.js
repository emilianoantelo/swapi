/**
 * La función getLocalList permite obtener una lista en formato
 * JavaScript del localStorage. Si la lista no existe devuelve un
 * array vacío.
 * @param { string } key 
 * @returns { array }
 */

export function getLocalList(key) {
    if (typeof key === 'string') {
        let localList = localStorage.getItem(key)
        if (localList) {
            let parsedList = JSON.parse(localList)
            return parsedList
        } else {
            return []
        }
    }
}

/**
 * La función setLocalList permite guardar una lista
 * en el localStorage en formato JSON
 * @param { string } key 
 * @param { array } list 
 */

export function setLocalList(key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
        let strList = JSON.stringify(list)
        localStorage.setItem(key, strList)
    }
}