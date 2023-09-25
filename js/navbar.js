/**********************************************************************
 * Ce fichier contient une fonction un écouteur d'événement qui concerne la barre de
 * navigation de manière à le masquer s'il est affiché, et de l'afficher s'il est masqué
 ***********************************************************************/

// Récupérer l'élément du classe icon avec la méthode querySelector
let editNav = document.querySelector(".icon");

//La méthode toggle() permet d’inverser l’état de visibilité du barre de navigation en mode mobile et tablette ,
//c’est à dire de l’afficher si il est caché ou de le cacher si il est affiché.
editNav.addEventListener("click", () => {
	let myNavbar = document.getElementById("myTopnav");
	if (myNavbar === null) throw new Error(" menu de navigation n'existe pas ");
	myNavbar.classList.toggle("responsive");
});
