
export default function translateChar(element) {
    console.log(element.gender)
    if (element.gender == 'male') {
        _objecto.gender = 'masculino'
    } else if (element.gender=='famale'){
        element.gender = 'femenino'
    }else if (element.gender=="n/a"){
        element.gender='no definido'
    } 
}