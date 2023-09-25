let bgConfirmation = document.querySelector(".bground-confirmation");
let closeMsg = document.querySelectorAll(".close-confirm");
/* fermer la fenêtre de confirmation avec la croix ou avec le bouton "Fermer"*/

closeMsg.forEach((btn) =>
	btn.addEventListener("click", () => {
		if (bgConfirmation === null) throw new Error("pas de fenêtre de confirmation");
		bgConfirmation.style.display = "none";
	})
);

function openMsg() {
	if (bgConfirmation === null) throw new Error("pas de fenêtre de confirmation");
	bgConfirmation.style.display = "block";
}
