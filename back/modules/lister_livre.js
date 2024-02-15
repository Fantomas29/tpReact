// listerLivres.js
const mysqlConn = require('./mysql');

function listerLivres(req, res) {
    // Établir la connexion à la base de données
    mysqlConn.connectToDatabase()
        .then(dbConn => {
            // Requête pour obtenir la liste des livres
            const sql = 'SELECT * FROM t_livre';
            dbConn.query(sql, (err, result) => {
                // Fermer la connexion après l'exécution de la requête
                dbConn.end();

                if (err) {
                    console.error("Erreur lors de la récupération de la liste des livres :", err);
                    res.json({ res: false, mess: "Erreur lors de la récupération de la liste des livres" });
                } else {
                    const livres = result;
                    res.json({ res: true, livres });
                }
            });
        })
        .catch(error => {
            console.error("Erreur lors de la connexion à la base de données :", error);
            res.json({ res: false, mess: "Erreur lors de la connexion à la base de données" });
        });
}

module.exports = { listerLivres };
