// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
//const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");

// ouvrir le modal au click sur le boutton 'je m'inscris'
modalBtn.forEach((btn) =>
	btn.addEventListener("click", () => {
		if (modalbg === null) throw new Error("modal n'existe pas");
		//modalbg.style.display = "block";
		modalbg.classList.add("active");
	})
);

// fermer le modal au click sur le bouton X

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
	if (modalbg === null) throw new Error("modal n'existe pas");
	modalbg.classList.remove("active");
}

let editNav = document.querySelector(".icon");
//function editNav

editNav.addEventListener("click", () => {
	let myNavbar = document.getElementById("myTopnav");
	if (myNavbar === null) throw new Error(" menu de navigation n'existe pas ");
	myNavbar.classList.toggle("responsive");
});
