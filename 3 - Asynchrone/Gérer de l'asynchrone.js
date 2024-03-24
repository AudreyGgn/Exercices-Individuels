//Tableau des URLs à tester
let urls = [
  "https://adatechschool.fr/",
  "https://fr.javascript.info/fetch",
  "https://github.com/AudreyGgn",
  "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects",
  "https://www.w3schools.com/js/js_objects.asp",
];

// Fonction qui récupère une URL, calcule son temps de chargement et retourne un objet contenant l'URL et le temps de chargement
async function fetchUrlAndCalculateLoadingTime(url) {
  let startTime = Date.now();
  try {
    let response = await fetch(url);
    let endTime = Date.now();
    let loadingTime = (endTime - startTime) / 1000; // Conversion en secondes
    return { url: url, loadingTime: loadingTime };
  } catch (error) {
    return { url, error: true };
  }
}

// Fonction qui teste un tableau d'URL et retourne un tableau d'objets avec URL et temps de chargement
async function testUrlsArray(urlsArray) {
  let results = [];
  let promises = [];

  for (let i = 0; i < urlsArray.length; i++) {
    let result = await fetchUrlAndCalculateLoadingTime(urlsArray[i]);
    promises.push(result);
  }

  results = await Promise.all(promises);
  return results;
}

// Fonction principale qui teste les URLs et trie les résultats en fonction de leur temps de chargement
async function main() {
  let results = await testUrlsArray(urls);
  results.sort(compareLoadingTimes);
  console.log("Résultats triés par temps de chargement :", results);
}

// Fonction de comparaison pour le tri des résultats
function compareLoadingTimes(a, b) {
  return a.loadingTime - b.loadingTime;
}

// Appel de la fonction principale
main();
