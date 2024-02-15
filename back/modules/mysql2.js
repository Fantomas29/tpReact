
const mysql2 = require("mysql2/promise")

const config_mysql2 = require('../config.js').mysql2

const pool = mysql2.createPool(config_mysql2)
console.log("pool ouvert")

async function insererLivre(livre) {
    let result = {
        res: false,
        mess: "",
    }
    let sql = `insert into t_livre (titre,auteur,annee) values ("${livre.titre}","${livre.auteur}",${livre.annee})`
    console.log("sql = " + sql)

    try {
        const [res] = await pool.execute(sql)
        result.res = true
        result.mess = JSON.stringify(res)
    }
    catch (err) {
        result.mess = "mysql2/bd.js enregistrerLivre "+err
    }

    return result
}

async function listerLivres(livre) {
    let result = {
        res: false,
        lst: [],
        mess: "",
    }
    let sql = "select * from t_livre"
    try {
        const [livres] = await pool.execute(sql)
        result.res = true
        result.mess = "mysql2/bd.js listerLivres OK"
        result.lst = livres
    }
    catch (err) {
        result.mess = "mysql2/bd listerLivres : " + err
    }

    return result
}

let test = 0

if (test == 1) {
    async function test1() {
        let livre = {
            titre: "ttt",
            auteur: "aaa",
            annee: 2024,
        }
        let res = await insererLivre(livre)
        console.log("res = " + JSON.stringify(res))

        res = await listerLivres()
        console.log("res = " + JSON.stringify(res.lst))
    
        pool.end()
    }
    test1()

}

module.exports = {
    insererLivre : insererLivre,
    listerLivres : listerLivres,
}