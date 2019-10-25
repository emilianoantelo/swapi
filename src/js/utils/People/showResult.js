
import seeMore from './seeMore';
import saveChar from './saveChar';
import translateChar from './translateChar';
import findChar from './findChar';

export default function showResults(_peopleData) {
    if (_peopleData.results) {

        let results = _peopleData.results;
        console.log(_peopleData);
        for (var i = 0; i < results.length; i++) {

            const element = results[i]
            let id = element.url.slice(28, -1)

            let search = findChar(id)
            
            if (!search) {

                translateChar(element)
                //console.log(results[i]);
                $("#personajes").append(
                    "<tr><td>" +
                    element.url.slice(28, -1) +
                    "</td> <td>" +
                    element.name +
                    "</td> <td>" +
                    element.gender +
                    "</td> <td>" +
                    element.height +
                    "</td> <td>" +
                    element.mass +
                    "</td> <td>" +
                    results[i].eye_color +
                    "</td> <td><button class='save-people'>" +
                    "Guardar" +
                    "</button></td> </tr>"

                );
            }

        }

    }
    saveChar()
    seeMore(_peopleData)
}