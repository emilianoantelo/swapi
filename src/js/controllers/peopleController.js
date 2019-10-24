// import { setLocalList, getLocalList } from "../utils/localStorage";
import showResults from "../utils/People/showResult";

export function getData2(_url, _showResults, _showError) {
  $.ajax(_url)
    .done(function (data) {
      _showResults(data);
    })
    .fail(function (error) {
      _showError(error);
    });
}

// function showResults(_peopleData) {
//   if (_peopleData.results) {

//     var results = _peopleData.results;
//     console.log(_peopleData);
//     for (var i = 0; i < results.length; i++) {
//       //console.log(results[i]);
//       $("#personajes").append(
//         "<tr><td>" +
//         results[i].url.slice(28,-1) +
//         "</td> <td>" +
//         results[i].name +
//         "</td> <td>" +
//         results[i].gender +
//         "</td> <td>" +
//         results[i].height +
//         "</td> <td>" +
//         results[i].mass +
//         "</td> <td>" +
//         results[i].eye_color +
//         "</td> <td><button class='save-people'>" +
//         "Guardar" +
//         "</button></td> </tr>"

//       );
      
//     }
//   }
//   console.log($('#seeMore'))
//   $('#seeMore').off().click(function () {
//     console.log('funciono')
//     getData2(_peopleData.next, showResults, showError)
    
//   })
//   let listPeople = getLocalList("listaDepersonajes")
//   $(".save-people").click(function () {
//     var peopleRow = $(this).parent().parent();
//     var peopleEyesColour = $(this).parent().prev().text();
//     var peopleMass= $(this).parent().prev().prev().text();
//     var peopleHeight = $(this).parent().prev().prev().prev().text();
//     var peopleGender = $(this).parent().prev().prev().prev().prev().text();
//     var peopleName = $(this).parent().prev().prev().prev().prev().prev().text();
//     var peopleId = $(this).parent().prev().prev().prev().prev().prev().prev().text();

//     var peopleObj = {
//       id: peopleId,
//       name: peopleName,
//       gender: peopleGender,
//       height: peopleHeight,
//       mass: peopleMass,
//       eyes: peopleEyesColour
//     }
     
//       listPeople.push(peopleObj)
//       console.log(peopleObj);

//       setLocalList('listaDePersonajes', listPeople)
     
//     peopleRow.remove()
//   })



export function showError(_error) {
  console.log(_error);
}

function peopleController() {
  console.log('Se cargo la home')
  getData2("https://swapi.co/api/people/", showResults, showError);
}

export default peopleController