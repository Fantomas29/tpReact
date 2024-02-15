// serveur.js
const express = require('express');
const bodyParser = require('body-parser');
const { listerLivres } = require('./modules/lister_livre'); // Assurez-vous de la bonne importation
const { insererLivre } = require('./modules/post_livre'); // Assurez-vous de la bonne importation
const path = require('path');
// const { listerLivres } = require('./modules/mysql2');
// const { insererLivre } = require('./modules/mysql2');

const app = express();
const port = 3100;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'html')));

// Route pour obtenir la liste des livres
app.get('/lister_livres', async (req, res) => await listerLivres(req, res, app));

// Route pour insérer un livre
app.post('/inserer_livre', async (req, res) => {
    console.log("Requête reçue :", JSON.stringify(req.body));
    // Ajoutez l'en-tête CORS pour autoriser les requêtes depuis n'importe quelle origine
    await insererLivre(req, res);
});




app.post('/test_champs', (req, res) => {
    console.log("Champs reçus test :", req.body);
    res.send('Champs reçus sur le serveur !');
});


app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
