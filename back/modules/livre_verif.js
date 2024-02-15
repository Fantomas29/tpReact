const livre_verif = {

	titre : {
		regexp : /^[a-zA-Z\s']{2,}$/,  // Au moins 2 lettres pour le titre
		mess : "Il faut au moins 2 lettres pour le titre",
	},

	auteur : {
		regexp : /^[a-zA-Z\s']{2,}$/,  // Au moins 2 lettres pour l'auteur
		mess : "Il faut au moins 2 lettres pour l'auteur",
	},

	annee : {
		regexp : /^\d{4}$/,  // L'année doit avoir 4 chiffres
		mess : "L'année doit avoir 4 chiffres",
	}

};


module.exports = livre_verif;
