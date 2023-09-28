/**********************************************************************
 * Ce fichier contient les fonctions et les écouteurs d'événements qui concernent
 * l'ouverture et fermeture du modal
 ***********************************************************************/

// Récupérer les éléments DOM avec les méthodes querySelector et querySelectorAl
//en accédant aux classes de modal ,bouton je m'inscris et bouton x

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");

// Ouvrir le modal au click sur le boutton 'je m'inscris'
// Changer le display du modal (display:none) et le rendre visible
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
	if (modalbg === null) throw new Error("modal n'existe pas");
	modalbg.classList.add("active");
}

// Fermer le modal au click sur le bouton X
//Cacher le modal en supprimant la classe "active"
closeModalBtn.addEventListener("click", closeModal);
function closeModal() {
	if (modalbg === null) throw new Error("modal n'existe pas");
	modalbg.classList.remove("active");
}
