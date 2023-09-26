/**********************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au validation de la formulaire.
 *
 ***********************************************************************/

/**
 * REGEX (Expressions Régulières )
 * Les regex pour le nom, prénom, email, date de naissance et quantité
 */

let LastFirstRegex = new RegExp("^[A-zÀ-ú -]+$");
let emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-zA-Z]{2,10}$");
let birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
let quantityRegex = new RegExp("^[0-9]{1,2}$");
1;

//~^[a-zA-Z]\w*([.&'_/\\\\-]\w+)*$~
/**
 * cette fonction permet de tester si les champs inputs suivants (prénom, nom, email,
 * date de naissance, tournoi)correspondent à un format bien déterminé.
 * Elle prend en paramétre (input, l'expression régulière,
 * le nombre de caractères minimum, l'élément DOM correpond au message d'erreur spécifique
 *  à chaque entrée )
 * Elle retourne 'true' si l'entrée est correcte si non elle retourne false avec
 * un message d'erreur qui doit s'afficher sous le champ associé
 */
function RegexInputs(input, regex, length, msgError) {
	//fonction trim () permet de retirer les blancs en début et fin de chaîne
	let value = input.value.trim();
	let valueLength = input.value.length;
	if (regex.test(value) && valueLength >= length) {
		msgError.setAttribute("data-error-visible", "false");
		return true;
	} else {
		msgError.setAttribute("data-error-visible", "true");
		return false;
	}
}

/**************************************************************
 * vérification du champ prénom
 ************************************************************/

//Récupérer les éléments DOM
let firstNameInput = document.getElementById("first");
let firstClassInput = document.querySelector(".firstName");

//Tester si firstNameInput contient bien un élément récupéré avec getElementById.
if (firstNameInput === null) throw new Error("Aucune entrée firstNameInput trouvée");

//Écouter un événement "change" avec addEventListener sur le champ "prénom"
// Et appeler la fonction RegexInputs pour la vérification
firstNameInput.addEventListener("change", () => {
	RegexInputs(firstNameInput, LastFirstRegex, 2, firstClassInput);
});

/*************************************************************
 * vérification du champ nom
 *************************************************************/

//Récupérer les éléments DOM
let lastNameInput = document.getElementById("last");
let lastClassInput = document.querySelector(".lastName");

//Tester si lastNameInput contient bien un élément récupéré avec getElementById.
if (lastNameInput === null) throw new Error("Aucune entrée lastNameInput trouvée");

//Écouter un événement "change" avec addEventListener sur le champ "nom"
// Et appeler la fonction RegexInputs pour la vérification
lastNameInput.addEventListener("change", () => {
	RegexInputs(lastNameInput, LastFirstRegex, 2, lastClassInput);
});

/**********************************************************
 * vérification du champ Email
 **********************************************************/

//Récupérer les éléments DOM
let emailInput = document.querySelector("#email");
let emailClassInput = document.querySelector(".email");

//Tester si emailInput contient bien un élément récupéré avec querySelector.
if (emailInput === null) throw new Error("Aucune entrée emailInput trouvée");

//Écouter un événement "change" avec addEventListener sur le champ "nom"
// Et appeler la fonction RegexInputs pour la vérification
emailInput.addEventListener("change", () => {
	RegexInputs(emailInput, emailRegex, 6, emailClassInput);
});

/**********************************************************
 * vérification du champ date de naissance
 **********************************************************/

//Récupérer les éléments DOM
let birthdateClassInput = document.querySelector(".birthdate");
let birthdateInput = document.querySelector("#birthdate");

//console.log(birthdateInput);
//Tester si birthdateInput contient bien un élément récupéré avec querySelector.
if (birthdateInput === null) throw new Error("Aucune entrée BirthdateInput trouvée");

/*function isvalidBirthdate(birthdate) {
	let today = new Date();
	let an = btd.substr(6, 4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
	let age = today.getFullYear() - an;
	if (age > 12 && age <= 55) {
		console.log(age);
		//return true;
	} else {
		//return false;
		console.log(age);
	}
}*/

function isValidBirthdate(birthdate) {
	if (!RegexInputs(birthdateInput, birthdateRegex, 7, birthdateClassInput)) {
		return false;
		console.log("aaa");
	} else {
		let date = new Date(birthdate);
		console.log("date", date);
		//let an = date.toString().substring(11, 15);
		let an = date.toLocaleDateString("fr").substring(6);
		let today = new Date();
		console.log(today);
		console.log("dat", an);
		let age = today.getFullYear() - an;
		console.log("age", age);
		if (age > 12 && age < 60) {
			console.log("true", age);
			return true;
			birthdateClassInput.setAttribute("data-error-visible", "false");
		} else {
			console.log("false", age);
			birthdateClassInput.setAttribute("data-error-visible", "true");
			return false;
		}
	}
}

//console.log(birthdateInput.value);
//Écouter un événement "change" avec addEventListener sur le champ "date de naissance"
// Et appeler la fonction RegexInputs pour la vérification
birthdateInput.addEventListener("focusout", () => {
	//console.log(birthdateInput.value);
	isValidBirthdate(birthdateInput.value);
	//RegexInputs(birthdateInput, birthdateRegex, 7, birthdateClassInput);
	//isvalidBirthdate(birthdateInput);
});

/**********************************************************
 * vérification du champ Nombre de tournois participés
 **********************************************************/

//Récupérer les éléments DOM
let quantityClassInput = document.querySelector(".quantity");
let quantityInput = document.querySelector("#quantity");

//Tester si quantityInput contient bien un élément récupéré avec querySelector.
if (quantityInput === null) throw new Error("Aucune entrée quantityInputt trouvée");

//Écouter un événement "change" avec addEventListener sur le champ "nombre de tournois"
// Et appeler la fonction RegexInputs pour la vérification
quantityInput.addEventListener("change", () => {
	RegexInputs(quantityInput, quantityRegex, 1, quantityClassInput);
});

/**********************************************************
 * vérification des boutons radios
 **********************************************************/

//Récupérer les éléments DOM

let locationClassRadio = document.querySelector(".location");
let listeBtnRadio = document.querySelectorAll(".location input");

//cette fonction permet de parcourir un tableau qui contient tous les champs input de type radio
// jusqu’à trouver celui qui a la propriété checked à true.
// si la propriété checked est false , on affiche un message d'erreur.
function checkRadio() {
	isCheked = false;
	locationClassRadio.setAttribute("data-error-visible", "false");

	for (let index = 0; index < listeBtnRadio.length; index++) {
		if (listeBtnRadio[index].checked) {
			isCheked = true;
		}
	}
	if (!isCheked) {
		locationClassRadio.setAttribute("data-error-visible", "true");
		return false;
	}
	return true;
}

//Écouter un événement "change" avec addEventListener sur les boutons radios"
// Et appeler la fonction checkRadio pour la vérification
listeBtnRadio.forEach((btnCheckbox) =>
	btnCheckbox.addEventListener("change", () => {
		checkRadio();
	})
);

/**********************************************************
 * vérification des cases à cocher
 **********************************************************/

//Récupérer les éléments DOM
let conditionClassCheckbox = document.querySelector(".condition");
let acceptedCondition = document.querySelector("#checkbox1");

//Tester si acceptedCondition contient bien un élément récupéré avec querySelector.
if (acceptedCondition === null) throw new Error("Aucune case à cocher trouvée");

//cette fonction permet de vérifier si la case des conditions générales est cochée,
//l'autre case est facultative / peut être laissée décochée.
function checkCheckBox() {
	if (acceptedCondition.checked) {
		conditionClassCheckbox.setAttribute("data-error-visible", "false");
		return true;
	} else {
		conditionClassCheckbox.setAttribute("data-error-visible", "true");
		return false;
	}
}

//Écouter un événement "change" avec addEventListener sur les cases à cocher"
// Et appeler la fonction checkCheckBox pour la vérification
acceptedCondition.addEventListener("change", function () {
	checkCheckBox();
});

/************************************************************
 * validation du formulaire
 * Gestion de l'événement submit pour valider le formulaire
 ***********************************************************/
let form = document.querySelector("form");
if (form === null) throw new Error("Aucun formulaire trouvé");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	isvalid = RegexInputs(firstNameInput, LastFirstRegex, 2, firstClassInput);
	isvalid = RegexInputs(lastNameInput, LastFirstRegex, 2, lastClassInput) && isvalid;
	isvalid = RegexInputs(emailInput, emailRegex, 6, emailClassInput) && isvalid;
	isvalid = isValidBirthdate(birthdateInput.value) && isvalid;
	isvalid = RegexInputs(quantityInput, quantityRegex, 1, quantityClassInput) && isvalid;
	isvalid = checkRadio() && isvalid;
	isvalid = checkCheckBox() && isvalid;

	if (isvalid) {
		closeModal();
		openMsg();
		form.reset();
	}
});
