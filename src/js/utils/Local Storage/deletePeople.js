import { getLocalList, setLocalList } from "../localStorage"

export default function deletePeople (){
    
    $('.delete-people').click(function(){
        
        let peopleId = $(this).parent().prev().prev().prev().prev().prev().prev().text()
        console.log(peopleId)
        let listChar = getLocalList('peopleINDB')
        for (let index = 0; index < listChar.length; index++) {
            const element = listChar[index].id
            if (element==peopleId) {

                listChar.splice(index, 1)

                setLocalList('peopleINDB',listChar)
                
            }
            
        } $(this).parent().parent().remove()
    })
}