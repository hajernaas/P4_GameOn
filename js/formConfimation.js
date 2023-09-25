/**********************************************************************
 * Ce fichier contient une fonction un écouteur d'événement qui concerne la barre de
 * navigation de manière à le masquer s'il est affiché, et de l'afficher s'il est masqué
 ***********************************************************************/
//
let bgConfirmation = document.querySelector(".bground-confirmation");
let closeMsg = document.querySelectorAll(".close-confirm");

// Fermer la fenêtre de confirmation avec la croix ou avec le bouton "Fermer" */
closeMsg.forEach((btn) =>
	btn.addEventListener("click", () => {
		if (bgConfirmation === null) throw new Error("pas de fenêtre de confirmation");
		bgConfirmation.style.display = "none";
	})
);

//cette fonction permet d'afficher la fenêtre de confirmation , elle sera appelée au moment
//de la validation du formulaire (événement sumbit)
function openMsg() {
	if (bgConfirmation === null) throw new Error("pas de fenêtre de confirmation");
	bgConfirmation.style.display = "block";
}
