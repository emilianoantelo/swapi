
export default function translateChar(element) {
    console.log(element.gender)
    if (element.gender == 'male') {
        element.gender = 'masculino'
    } else if (element.gender == 'female') {
        element.gender = 'femenino'
    } else if (element.gender == "n/a") {
        element.gender = 'no definido'
    }
    if (element.mass == "unknown") {
        element.mass = "indefinido"
    } else {
        element.mass += "kg"
    }
    if (element.height == "unknown") {
        element.height = "indefinido"
    } else {
        element.height += "cm"
    }
    // switch (element.eye_color) {
    //     case 'red':
    //         element.eye_color = 'rojo'
    //         break;
    //     default:
    //         element.eye_color = 'sinverguenza'
    //         break;
    // }


}