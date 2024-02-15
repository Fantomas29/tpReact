const fs = require('fs')

const base = "./serveur_http.js"
const port_http = 3100

if (!fs.existsSync(base)) {
console.log("Erreur chargement config.js")
console.log("Le dossier "+base+" n'existe pas")
console.log("Modifier la variable base")
process.exit(0)
}

const mysql2 = {
    host: 'localhost',
    user: 'e21908596sql',
    password: "bQ576GHs",
    database: 'e21908596_db2',

    // pour pool de connexions
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}


module.exports = {
    base: base,
    port_http: port_http,
    mysql2 : mysql2,
}