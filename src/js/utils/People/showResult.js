import { getLocalList, setLocalList } from '../localStorage'
import showError from '../../controllers/peopleController'
import getData from './getData';
import seeMore from './seeMore';
import saveChar from './saveChar';
import translateChar from './translateChar';

export default function showResults(_peopleData) {
    if (_peopleData.results) {

        let results = _peopleData.results;
        console.log(_peopleData);
        for (var i = 0; i < results.length; i++) {

            const element = results[i]
            translateChar(element)
            //console.log(results[i]);
            $("#personajes").append(
                "<tr><td>" +
                results[i].url.slice(28, -1) +
                "</td> <td>" +
                results[i].name +
                "</td> <td>" +
                results[i].gender +
                "</td> <td>" +
                results[i].height +
                "</td> <td>" +
                results[i].mass +
                "</td> <td>" +
                results[i].eye_color +
                "</td> <td><button class='save-people'>" +
                "Guardar" +
                "</button></td> </tr>"

            );

        }
        
        saveChar()
    }
    seeMore(_peopleData)
}