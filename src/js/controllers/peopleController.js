
function getData2(_url, _showResults, _showError) {
  $.ajax(_url)
    .done(function (data) {
      _showResults(data);
    })
    .fail(function (error) {
      _showError(error);
    });
}
var id = 1;
function showResults(_peopleData) {
  if (_peopleData.results) {

    var results = _peopleData.results;
    console.log(_peopleData);
    for (var i = 0; i < results.length; i++) {
      //console.log(results[i]);
      $("#personajes").append(
        "<tr><td>" +
        id +
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
        "</td> <td><button>" +
        "Guardar" +
        "</button></td> </tr>"

      );
      id++;
    }
  }
  //if (_peopleData.next) {
    //getData2(_peopleData.next, showResults, showError);
  //}
  console.log($('#seeMore'))
  $('#seeMore').off().click(function () {
    console.log('funciono')
    getData2(_peopleData.next, showResults, showError)
  
  })
}
function showError(_error) {
  console.log(_error);
}

function peopleController() {
  console.log('Se cargo la home')
  getData2("https://swapi.co/api/people/", showResults, showError);
}

export default peopleController