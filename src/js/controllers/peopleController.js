import showResults from "../utils/People/showResult";
import showError from "../utils/People/showError";
import getData from "../utils/People/getData";

function peopleController() {
  console.log('Se cargo la home')
  getData("https://swapi.co/api/people/", showResults, showError);
}

export default peopleController