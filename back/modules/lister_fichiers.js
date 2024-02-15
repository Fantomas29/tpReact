

/*- for classique (langage C)
- for i in
- for item of
- forEach avec fonction classique (function)
- forEach avec fonction fléchée (=>)*/


const fs = require('fs');

function lister_fichiers1(chemin_dossier) {
    const fichiers = fs.readdirSync(chemin_dossier);

    console.log("Liste des fichiers dans le dossier", chemin_dossier, ":");

    for (let i = 0; i < fichiers.length; i++) {
        console.log(fichiers[i]);
    }
}

function lister_fichiers2(chemin_dossier) {
    const fichiers = fs.readdirSync(chemin_dossier);

    console.log("Liste des fichiers dans le dossier", chemin_dossier, ":");

    for (let i in fichiers) {
        console.log(fichiers[i]);
    }
}


function listerFichiersForOf(cheminDossier) {
    const fichiers = fs.readdirSync(cheminDossier);

    console.log("Liste des fichiers dans le dossier", cheminDossier, ":");

    for (const fichier of fichiers) {
        console.log(fichier);
    }
}

function listerFichiersForEachClassique(cheminDossier) {
    const fichiers = fs.readdirSync(cheminDossier);

    console.log("Liste des fichiers dans le dossier", cheminDossier, ":");

    fichiers.forEach(function(fichier) {
        console.log(fichier);
    });
}

function listerFichiersForEachArrowFunction(cheminDossier) {
    const fichiers = fs.readdirSync(cheminDossier);

    console.log("Liste des fichiers dans le dossier", cheminDossier, ":");

    fichiers.forEach(fichier => {
        console.log(fichier);
    });
}


module.exports = {
    lister_fichiers1,
    lister_fichiers2,
    listerFichiersForOf,
    listerFichiersForEachClassique,
    listerFichiersForEachArrowFunction
};