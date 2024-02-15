const mysql = require('mysql');

function connectToDatabase() {
    return new Promise((resolve, reject) => {
        const conn = mysql.createConnection({
            host: "obiwan.univ-brest.fr",
            user: "e21908596sql",
            password: "bQ576GHs",
            database: "e21908596_db2"
        });

        conn.connect((err) => {
            if (err) {
                console.error('Erreur lors de la connexion à la base de données:', err);
                reject(err);
            } else {
                console.log('Connexion à la base de données réussie');
                resolve(conn);
            }
        });
    });
}

module.exports = { connectToDatabase };
