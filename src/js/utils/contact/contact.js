
export function validarNombre() {
  console.log('entr')
  let inputNode = $('#firstName')
  let valorDelInput = inputNode.val()

  let esNombreValido =
    typeof valorDelInput === "string" &&
    isNaN(valorDelInput) === true &&
    valorDelInput != "";

  console.log(inputNode)
  ActualizarClases(esNombreValido, inputNode);
  validateAddButton();

  if (inputNode.hasClass('is-invalid')) {
    inputNode.next().text('es nombre invalido')
  }else {
    inputNode.next().text('')

  }
  
}

export function validarEmail() {
  let inputNode = $('#email');
  let valorDelInput = inputNode.val()

  let esMailValido =
    valorDelInput != "" &&
    valorDelInput.indexOf("@") != -1 &&
    valorDelInput.indexOf(".com") != -1;

  ActualizarClases(esMailValido, inputNode);
  validateAddButton();
 
  if (inputNode.hasClass('is-invalid')) {
    inputNode.next().text('su email debe contener @ y .com')
  }else {
    inputNode.next().text('')

  }
}

export function validarComentario() {
  let inputNode = $('#comments');
  let valorDelInput = inputNode.val();

  let esComentarioValido =
    valorDelInput.length >= 1

  ActualizarClases(esComentarioValido, inputNode)
  validateAddButton()

  if (inputNode.hasClass('is-invalid')) {
    inputNode.next().text('es campo obligatorio')
  }else {
    inputNode.next().text('')

  }
}

export function ActualizarClases(_campoValido, _node) {
  if (_campoValido) {
    _node.removeClass("is-invalid");
    _node.addClass("is-valid");
  } else {
    _node.removeClass("is-valid");
    _node.addClass("is-invalid");
  }
}

export function validateAddButton() {

  let isOkey = $('#firstName').hasClass('is-valid') && $("#email").hasClass('is-valid') && $("comments")
  if (isOkey) {
    $('#submitButton').attr('disabled', false)
  } else {
    $('#submitButton').attr('disabled', true)

  }
}



