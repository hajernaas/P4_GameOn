//const modalbg = document.querySelector(".bground");
let form = document.querySelector("form");

let firstClassInput = document.querySelector(".firstName");
let lastClassInput = document.querySelector(".lastName");
let birthdateClassInput = document.querySelector(".birthdate");
let emailClassInput = document.querySelector(".email");
let quantityClassInput = document.querySelector(".quantity");
let locationClassRadio = document.querySelector(".location");
let listeBtnRadio = document.querySelectorAll(".location input");
let conditionClassCheckbox = document.querySelector(".condition");

let firstNameInput = document.getElementById("first");
let lastNameInput = document.getElementById("last");
let emailInput = document.querySelector("#email");
let birthdateInput = document.querySelector("#birthdate");
let quantityInput = document.querySelector("#quantity");
let acceptedCondition = document.querySelector("#checkbox1");
/** gérer les messages d'erreur dans le cas où les champs nulles**/

if (form === null) throw new Error("No form found");
if (acceptedCondition === null) throw new Error("No checkbox found");
if (lastNameInput === null) throw new Error("No lastNameInput inputs found");
if (emailInput === null) throw new Error("No emailInput inputs found");
if (birthdateInput === null) throw new Error("No birthdateInput inputs found");

/**REGEX
 * Les regex pour prénom, nom,email, date de naissance et quantité
 **/

// le mon et prénom doit contenir les caractères A-Z, a-z, lettres accentuée set -
let LastFirstRegex = new RegExp("^[A-zÀ-ú -]+$");
let emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-zA-Z]{2,10}$");
let birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
let quantityRegex = new RegExp("^[0-9]{1,2}$");

function RegexInputs(input, regex, length, msgError) {
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

firstNameInput.addEventListener("change", () => {
	RegexInputs(firstNameInput, LastFirstRegex, 2, firstClassInput);
});

lastNameInput.addEventListener("change", () => {
	RegexInputs(lastNameInput, LastFirstRegex, 2, lastClassInput);
});

emailInput.addEventListener("change", () => {
	RegexInputs(emailInput, emailRegex, 6, emailClassInput);
});

birthdateInput.addEventListener("change", () => {
	RegexInputs(birthdateInput, birthdateRegex, 10, birthdateClassInput);
});

quantityInput.addEventListener("change", () => {
	RegexInputs(quantityInput, quantityRegex, 1, quantityClassInput);
});

/*fonction checkRadio*/

function checkRadio() {
	// Gestion de l'événement change sur les boutons radios.
	isCheked = false;

	locationClassRadio.setAttribute("data-error-visible", "false");

	for (let index = 0; index < listeBtnRadio.length; index++) {
		if (listeBtnRadio[index].checked) {
			isCheked = true;
			console.log("true");
		}
	}
	if (!isCheked) {
		locationClassRadio.setAttribute("data-error-visible", "true");
		return false;
	}
	return true;
}

listeBtnRadio.forEach((btnCheckbox) =>
	btnCheckbox.addEventListener("change", () => {
		checkRadio();
	})
);

function checkCheckBox() {
	if (acceptedCondition.checked) {
		conditionClassCheckbox.setAttribute("data-error-visible", "false");
		return true;
	} else {
		conditionClassCheckbox.setAttribute("data-error-visible", "true");
		return false;
	}
}

acceptedCondition.addEventListener("change", function () {
	checkCheckBox();
});
