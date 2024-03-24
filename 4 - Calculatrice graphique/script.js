// Fonction qui récupère la valeur du bouton quand il est cliqué et l'affiche dans le display (sans le 0 devant) :

function lier_Bouton_Valeur(valeur) {
  valeur_var = document.getElementById(valeur).value;
  console.log(valeur_var);
  removeZero();
  document.getElementById("display").textContent += valeur_var;
}

// Fonction pour clear le display

function clear_display() {
  document.getElementById("display").textContent = "0";
}

// Fonction pour enlever le 0 du display une fois que l'on tape des chiffres :

function removeZero() {
  let value = document.getElementById("display").textContent;
  if (value == "0") {
    value = " ";
    document.getElementById("display").textContent = value;
  }
}

// Fonction magique qui calcule :

function calcule() {
  var equation = document.getElementById("display").textContent;
  var equation_resolue = eval(equation);
  document.getElementById("display").textContent = equation_resolue;
}
