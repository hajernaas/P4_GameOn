/**********************************************************************
 * Ce fichier contient toutes les fonctions nécessaires pour afficher et masquer
 * la boite de confirmation
 ***********************************************************************/

// Récupérer les éléments DOM avec les méthodes querySelector et querySelectorAl
//en accédant aux classes de la fenêtre de confirmation ,au bouton X et aubouton Fermer
const bgConfirmation = document.querySelector(".bground-confirmation");
const closeMsg = document.querySelectorAll(".close-confirm");

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
