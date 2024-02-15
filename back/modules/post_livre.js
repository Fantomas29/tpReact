const verifier_champs = require('./verifier_champs.js');
const livre_verif = require('./livre_verif.js');
const mysqlConn = require('./mysql.js')


async function insererLivre(req, res) {
    console.log("champs reçus", req.body);

    let validation = verifier_champs(req.body, livre_verif);

    if (validation.res) {
        try {
            // Établir la connexion à la base de données
            const dbConn = await mysqlConn.connectToDatabase();

            // Si la validation est réussie, insérer le livre dans la base de données
            const livre = {
                titre: req.body.titre,
                auteur: req.body.auteur,
                annee: req.body.annee
            };

            // Requête d'insertion
            const sql = 'INSERT INTO t_livre (titre, auteur, annee) VALUES (?, ?, ?)';
            dbConn.query(sql, [livre.titre, livre.auteur, livre.annee], (err, result) => {
                dbConn.end();  // Fermer la connexion après l'exécution de la requête

                if (err) {
                    console.error("Erreur lors de l'insertion du livre :", err);
                    res.json({ res: false, mess: "Erreur lors de l'insertion du livre" });
                } else {
                    console.log("Livre enregistré avec succès !");
                    res.json({ res: true, mess: "Livre enregistré avec succès" });
                }
            });
        } catch (error) {
            console.error("Erreur lors de la connexion à la base de données :", error);
            res.json({ res: false, mess: "Erreur lors de la connexion à la base de données" });
        }
    } else {
        // Si la validation échoue, renvoyer les erreurs de validation
        res.json({ res: false, err: validation.err, mess: "Erreur de validation des champs" });
    }



}

exports.insererLivre = insererLivre;