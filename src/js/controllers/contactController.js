$(document).ready(function() {
  $("button").attr("disabled", true);
  $("#name").on("input", validarNombre);
  $("#email").on("input", validarEmail);

  // $("#name").blur(validarNombre);
  $("#name").one("blur", validarNombre);
  $("#email").one("blur", validarEmail);
});

function ActualizarClases(_campoValido, _node) {
  if (_campoValido) {
    _node.classList.remove("is-invalid");
    _node.classList.add("is-valid");
  } else {
    _node.classList.remove("is-valid");
    _node.classList.add("is-invalid");
  }
}
function validateAddButton() {
  let addButton = document.getElementById("button");

  let inputNombre = document.getElementById("name");

  let validNombre = inputNombre.classList.contains("is-valid");
  if (validNombre) {
    addButton.disabled = false;
  }
}

function validarNombre(_event) {
  let inputNode = _event.target;
  let valorDelInput = inputNode.value;

  let esNombreValido =
    typeof valorDelInput === "string" &&
    isNaN(valorDelInput) === true &&
    valorDelInput != "";

  ActualizarClases(esNombreValido, inputNode);
  validateAddButton();
}

function validarEmail(_event) {
  let inputNode = _event.target;
  let valorDelInput = inputNode.value;

  let esMailValido =
    valorDelInput != "" &&
    valorDelInput.indexOf("@") != -1 &&
    valorDelInput.indexOf(".com") != -1;

  ActualizarClases(esMailValido, inputNode);
}




function contactController(){
    console.log('Se cargo la home')
   

  }
  
  export default contactController