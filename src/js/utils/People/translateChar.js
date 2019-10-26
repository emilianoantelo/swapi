
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
     switch (element.eye_color) {
         case 'red':
             element.eye_color = 'rojo'
             break;
             case 'yellow':
                element.eye_color = 'amarillo'
                break;
        case 'blue':
             element.eye_color = 'azul'
                    break;
        case 'brown':
            element.eye_color = 'marron'
                     break;
        case 'black':
            element.eye_color = 'negro'
                    break;
        case 'orange':
            element.eye_color = 'naranja'
                    break;
        case 'white':
            element.eye_color = 'blanco'
                    break;
        case 'gold':
            element.eye_color = 'dorado'
                    break;
        case 'hazel':
            element.eye_color = 'avellana'
                    break; 
        case 'dark':
            element.eye_color = 'oscuro'
                    break;
        case 'blue-gray':
            element.eye_color = 'azul-gris'
                    break;
        case 'red, blue':
            element.eye_color = 'rojo, azul'
                    break;            
        case 'green, yellow':
            element.eye_color = 'verde,amarillo'
                    break;            
             default:
             element.eye_color = 'desconocido'
             break;
     }
    

}