//Fonction pour choisir un nombre aléatoire entre 1 et 100 :
function generateNumber() {
  let min = 1;
  let max = 50;
  let numberToFind = Math.floor(Math.random() * (max - min)) + min;
  return numberToFind;
}

//Fonction pour cleaner l'input :
function doResetInput(id) {
  let input = document.getElementById(id);
  input.value = "";
}

//Initialisation compteur de tentative(s) et génération du chiffre à deviner :
let attempts = 1;
let userNumberToFind = generateNumber();

//Gameplay :

function didIWin() {
  let userGuess = document.getElementById("guess").value;
  let message = document.getElementById("message");

  //console.log(userNumberToFind, userGuess, attempts);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 51) {
    message.textContent = "Please enter a number between 1 and 50.";
    message.style.color = "red";
  } else if (userGuess == userNumberToFind) {
    message.textContent = `Congratulations ! You won in ${attempts} attempt(s) !`;
    message.style.color = "green";
  } else if (userGuess < userNumberToFind) {
    message.textContent = "Too low, try again !";
    message.style.color = "orange";
  } else {
    message.textContent = "Too high, try again !";
    message.style.color = "orange";
  }
  attempts++;
  doResetInput("guess");
}
