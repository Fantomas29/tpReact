// verifier_champs.js

function verifier_champs(obj, obj_verif) {
    let result = {
        res: true,
        err: [],
        mess: ""
    };

    // Parcourir chaque propriété de l'objet de validation
    for (const champ in obj_verif) {
        if (obj_verif.hasOwnProperty(champ)) {
            const validationInfo = obj_verif[champ];

            // Vérifier si la propriété existe dans l'objet à valider
            if (obj.hasOwnProperty(champ)) {
                const valeur = obj[champ];
                console.log("valeur", valeur);

                // Vérifier la valeur avec la regex définie
                if (!validationInfo.regexp.test(valeur)) {
                    result.res = false;
                    result.err.push({
                        champ: champ,
                        err: validationInfo.mess
                    });
                }
            } else {
                // Si la propriété n'existe pas dans l'objet à valider
                result.res = false;
                result.err.push({
                    champ: champ,
                    err: "Le champ " + champ + " est manquant"
                });
            }
        }
    }

    // Construire le message global en concaténant toutes les erreurs
    result.mess = result.err.map(error => error.err).join('<br>');

    return result;
}
module.exports = verifier_champs;
