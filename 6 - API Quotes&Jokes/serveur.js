const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const fs = require("fs");
const database = require("./bdd/bdd.json");
const { citation } = require("./infrastructure/appelAPI");
const jsonDb = { database: database };

//Middlewares-----
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (pour lire ce qui nous est renvoyé dans ce format)
app.use(cors());
//----------------

//Met le serveur sur l'écoute du port choisi, en attente des requêtes HTTP:
app.listen(port, () => {
  console.log("You are on PORT", port);
});

//ROUTAGE
//Définir la doc et les endpoints de son API (comment on va utiliser les verbes get, post, put...)

//Méthode get pour appeler API extérieure (citationDev)
app.get("/citation", async (req, res) => {
  let result = await citation();
  console.log(result);
  res.send(result);
});

//Méthode post (inutilisée dans notre cas)
app.post("/", async (req, res) => {
  let request = await req.body;
  console.log(request);
  res.send(`Votre requête est bien reçue ${JSON.stringify(request)} `);
});

//Méthode get pour récupérer citation de notre BDD (affiche toute la BDD)
app.get("/bdd/bdd", (req, res) => {
  console.log(jsonDb);
  res.status(200).json(jsonDb);
});

//Idem mais affiche uniquement 1 citation de notre BDD selon l'id :
app.get("/bdd/bdd/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blagueDev = database.find((blagueDev) => blagueDev.id === id);
  res.status(200).json(blagueDev);
  console.log("ceci est blagueDev:", blagueDev);
  console.log("id:", id);
  res.send(blagueDev);
});

//Méthode post pour récupérer les données de l'utilisateur et créer un nouvel objet qui sera rajouté dans notre BDD :
app.post("/renvoiClient", (req, res) => {
  const newCitation = req.body.newJoke;
  console.log(req);
  console.log(req.body);
  console.log(newCitation);
  database.push({ id: database.length + 1, affirmation: newCitation });
  res.send("Citation ajoutée avec succès !");

  //Ce nouvel objet est réécrit dans notre BDD :
  fs.writeFile("./bdd/bdd.json", JSON.stringify(database), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'écriture dans le fichier JSON");
    } else {
      res.status(200).json(database);
    }
  });
});
