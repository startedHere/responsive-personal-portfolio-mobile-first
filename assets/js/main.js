// ! Displaying Nav Menu...
/////////////////////////////////////
// const navMenu = document.getElementById('nav-menu');
// const navToggle = document.getElementById('nav-toggle');
// const navClose = document.getElementById('nav-close');

// _Show Menu...

// if (navToggle) {
// 	navToggle.addEventListener('click', () => {
// 		navMenu.classList.add('show-menu');
// 	});
// }

// _ Hide Menu...
// if (navClose) {
// 	navClose.addEventListener('click', () => {
// 		navMenu.classList.remove('show-menu');
// 	});
// }
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('animated-toggle-button');
const menuCheckbox = document.getElementById('hamburger');

if (menuToggle) {
	menuToggle.addEventListener('click', () => {
		menuCheckbox.checked = !menuCheckbox.checked;
		navMenu.classList.toggle('show-menu');
	});
}
