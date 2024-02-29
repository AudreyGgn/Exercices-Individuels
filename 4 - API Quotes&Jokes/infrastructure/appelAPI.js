//Fonction fetch qui va récupérer une citation via l'API affirmationsDev et que l'on utilise dans notre route :

async function citation() {
  let response = await fetch("https://www.affirmations.dev/");
  let citation = await response.json();
  // let result = (citation.affirmation);
  return citation;
}
exports.citation = citation;
