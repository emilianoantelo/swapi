import getData from "./getData"
import showResults from "./showResult"
import showError from "./showError"

export default function seeMore(_peopleData) {
    $('#seeMore').off().click(function () {
        console.log('funciono')
        getData(_peopleData.next, showResults, showError)

    })
}
