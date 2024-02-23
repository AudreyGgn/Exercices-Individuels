const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
  "/": " ",
};

//Traduction français to morse :

function getLatinCharacterList(string) {
  return string.split("");
}

function translateLatinCharacter(car) {
  return latinToMorse[car];
}

function encode(string) {
  string2 = string.toUpperCase();
  let tablEncode = [];
  let tablstr = getLatinCharacterList(string2);
  for (i = 0; i < tablstr.length; i++) {
    tablEncode.push(translateLatinCharacter(tablstr[i]));
  }
  return tablEncode.join(" ");
}

function affiche() {
  let textatrad = document.getElementById("ftom").value;
  let reponse = encode(textatrad);
  let reponse1 = document.getElementById("reponse1");
  reponse1.textContent = "Traduction : " + reponse.toString();
}

//Traduction morse to français :

function getMorseCharacterList(string) {
  return string.split(" ");
}

function translateMorseCharacter(car) {
  return morseToLatin[car];
}

function decode(string) {
  let tabldecode = [];
  let tablstr = getMorseCharacterList(string);
  for (i = 0; i < tablstr.length; i++) {
    tabldecode.push(translateMorseCharacter(tablstr[i]));
  }
  return tabldecode.join("");
}

function affiche2() {
  let textatrad2 = document.getElementById("mtof").value;
  let reponse2 = decode(textatrad2);
  let reponsebis = document.getElementById("reponse2");
  reponsebis.textContent = "Traduction : " + reponse2.toString();
}
