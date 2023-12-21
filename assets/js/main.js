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

//! Mandal Effect...
///////////////////////////////////////////////
// !(function () {
// 	'use strict';
// 	var e;
// 	var n = document.getElementById('mandala');
// 	function i() {
// 		document.hidden
// 			? (n.classList.remove('animated'), clearTimeout(e))
// 			: (n.classList.add('animated'),
// 			  (e = setTimeout(function () {
// 					n.classList.remove('animated');
// 			  }, 4e5)));
// 	}

// 	if ('hidden' in document) {
// 		document.addEventListener('visibilitychange', i, false);
// 	}
// })();

(function () {
	'use strict';

	var n = document.getElementById('mandala'); // Get the element with ID 'mandala'

	// Function to handle visibility change
	function handleVisibilityChange() {
		if (!document.hidden) {
			n.classList.add('animated'); // If the document is visible, add 'animated' class
		} else {
			n.classList.remove('animated'); // If the document is hidden, remove 'animated' class
		}
	}

	// Check if the 'hidden' property is supported in the document
	if ('hidden' in document) {
		handleVisibilityChange(); // Trigger the animation immediately on page load
		document.addEventListener('visibilitychange', handleVisibilityChange, false); // Add event listener for visibility change
	}
})();

// })(window.Mozilla);
// 	'undefined' != typeof document.hidden && (document.addEventListener('visibilitychange', i, !1), window.Mozilla.run(i));
