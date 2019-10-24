import { getLocalList, setLocalList } from "../localStorage";

export default function saveChar() {

    let listPeople = getLocalList("peopleINDB")
    console.log(listPeople);
    
    
    $(".save-people").click(function () {
        
        let peopleRow = $(this).parent().parent();
        let peopleEyesColour = $(this).parent().prev().text();
        let peopleMass = $(this).parent().prev().prev().text();
        let peopleHeight = $(this).parent().prev().prev().prev().text();
        let peopleGender = $(this).parent().prev().prev().prev().prev().text();
        let peopleName = $(this).parent().prev().prev().prev().prev().prev().text();
        let peopleId = $(this).parent().prev().prev().prev().prev().prev().prev().text();
        
        let peopleObj = {
            id: peopleId,
            name: peopleName,
            gender: peopleGender,
            height: peopleHeight,
            mass: peopleMass,
            eyes: peopleEyesColour
        }
        
        listPeople.push(peopleObj)
        setLocalList('peopleINDB', listPeople)
        
        peopleRow.remove();
    })
    
}


