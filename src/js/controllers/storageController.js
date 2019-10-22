import { getLocalList } from "../utils/localStorage"
function peopleSaved() {
  var miLista = getLocalList('listaDePersonajes')
  for (let index = 0; index < miLista.length; index++) {
    const element = miLista[index];
    console.log(element)
    //console.log(results[i]);
    //console.log($('$tableBody'));
    
    $("#tableBody").append(
      "<tr><td>" +
      element.id +
      "</td> <td>" +
      element.name +
      "</td> <td>" +
      element.gender +
      "</td> <td>" +
      element.height +
      "</td> <td>" +
      element.mass +
      "</td> <td>" +
      element.eye +
      "</td> <td><button class='delete-people'>" +
      "Borrar" +
      "</button></td> </tr>"

    );

  }
}

function storageController() {
  console.log('Se cargo la home')
  peopleSaved()
}

export default storageController