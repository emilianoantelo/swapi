import { validarNombre, validarEmail, validarComentario } from "../utils/contact/contact"



function contactController() {
  console.log('Se cargo la home')
  console.log('entro')
  let btn = $('#firstName')
  console.log(btn)
  $("#firstName").on("blur", function () {
    validarNombre()
  });
  $ ('#email').on("blur", function(){
    validarEmail()
  });
  $('#comments').on('blur', function(){
    validarComentario()
  });
  // $("#firsName").on("input", validarNombre);
  // $("#email").on("input", validarEmail);
  // $("#comments").on("input", validarComentario)

  // $("#name").blur(validarNombre);
  // $("#email").one("blur", validarEmail);
  // $('#comments').one('blur', validarComentario)
}

export default contactController