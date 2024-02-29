/*
----- CONSIGNES -----
On veut développer un petit script qui teste la réactivité d’une série de sites, et qui classe ces sites par temps 
d’accès. L’objectif est donc de lancer en parallèle les demandes de chargement des sites et son url et le temps qu’a demandé 
le chargement. Vous choisissez vous-mêmes les sites à auditer en essayant de trouver des sources variées.
Bonus perso : je termine par trier les URL selon leur temps de chargement.
--------------------- */

//Mon tableau d'URL :

let tableauUrl = [
  "https://adatechschool.fr/",
  "https://fr.javascript.info/fetch",
  "https://www.ligue-cancer.net/44-loireatlantique",
  "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects",
  "https://www.w3schools.com/js/js_objects.asp",
];

//Fonction qui récupère (fetch) une URL et calcule le temps de chargement de la page et retourne un nouvel objet :

async function fetchUrlAndCalcul(url) {
  let startTime = Date.now();
  //   console.log(startTime);
  try {
    let response = await fetch(url);
    let endTime = Date.now();
    // console.log(endTime);
    let time = (endTime - startTime) / 1000; // Convertir en secondes
    // console.log(time);
    objet = { url: url, loadingTime: time };
    // console.log(objet);
    return objet;
  } catch (error) {
    return { url, error: true };
  }
}

//1è fonction asynchrone qui va boucle sur le tableau d'URL et retourne un tableau d'objets avec URL et temps de chargement :

async function testArray(arr) {
  let tabl = [];
  let tablPromises = [];

  for (i = 0; i < arr.length; i++) {
    index = await fetchUrlAndCalcul([arr[i]]);
    tablPromises.push(index);
  }

  tabl = await Promise.all(tablPromises);
  return tabl;
}

//fonction principale asynchrone qui appelle la 1è et trie les URL en fonction de leur temps de chargement :

async function sort() {
  let result = await testArray(tableauUrl);
  for (i = 0; i < result.length; i++) {
    result.sort(comparaison);
  }
  console.log("Mon tableau", result);
}

//Fonction qui sert à trier le tableau d'URL selon leur temps de chargement :
function comparaison(a, b) {
  return a.loadingTime - b.loadingTime;
}

//Enfin, j'appelle la fonction principale (à lancer dans la console avec node) :
sort();
