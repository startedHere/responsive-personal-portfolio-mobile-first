'use strict';

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

// ! Display Mobile Nav Menu ....
//////////////////////////////////////////////////////////
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('animated-toggle-button');
const menuCheckbox = document.getElementById('hamburger');

const navLink = document.querySelectorAll('.nav__link');

if (menuToggle) {
	menuToggle.addEventListener('click', () => {
		menuCheckbox.checked = !menuCheckbox.checked;
		navMenu.classList.toggle('show-menu');

		//!_Hide Mobile Nav Menu When You Click Any Nav-Links...
		navLink.forEach(n => {
			n.addEventListener('click', () => {
				menuCheckbox.checked = false;
				navMenu.classList.remove('show-menu');
			});
		});
	});
}

// ! Blur Header On-Scroll...
//////////////////////////////////////////
/*
const blurHeader = () => {
	const header = document.getElementById('header');
	window.scrollY >= 50
		? header.classList.add('blur-header')
		: header.classList.remove('blur-header');
};
*/

// window.addEventListener('scroll', blurHeader);
