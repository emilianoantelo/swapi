import { getLocalList } from "../localStorage";
import deletePeople from "./deletePeople";

export default function peopleSaved() {

  let peopleSaved = getLocalList('peopleINDB')

  for (let index = 0; index < peopleSaved.length; index++) {
    const element = peopleSaved[index];

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
      element.eyes +
      "</td> <td><button class='delete-people'>" +
      "Borrar" +
      "</button></td> </tr>")
  }
  deletePeople()
}