import { getLocalList } from "../localStorage";


export default function findChar (_char){
    let savedList = getLocalList("peopleINDB")
    for (let index = 0; index < savedList.length; index++) {
        const element = savedList[index];
       if (element.id == _char) {
            return true
        } 
    }
}