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
////////////////////////////////////////////////////////////////
const blurHeader = () => {
	const header = document.getElementById('header');

	//# When the scroll is greater than 50 vp(viewport) height, add the blur-header class to the header tag...
	window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

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

//! Email Js...
//////////////////////////////////////////////////
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message');

const sendEmail = e => {
	e.preventDefault();

	// serviceID - templateID - #form - publicKey

	emailjs.sendForm('service_c1336zx', 'template_voa9whe', '#contact-form', 'BQukdiHZSqoSobLVR').then(
		() => {
			// Show sent message
			contactMessage.textContent = 'Message Sent Successfully';

			// Clear Message after 5 Seconds....
			setTimeout(() => {
				contactMessage.textContent = '';
			}, 5000);

			// Clear Input Fields...
			contactForm.reset();
		},
		() => {
			// Show Error Message...
			contactMessage.textContent = 'Message Not Sent (Service Error)';
		}
	);
};

contactForm.addEventListener('submit', sendEmail);

//! For GSAP Animation....
///////////////////////////////////////////////
const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');

const timeLine = gsap.timeline({ defaults: { duration: 1 } });

//! Elastic Line
const start = 'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end = 'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

//! Initializing Elastic Effect
containers.forEach(container => {
	const input = container.querySelector('.input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('click', () => {
		//_ Check For Empty Input Box
		if (!input.value) {
			timeLine.fromTo(line, { attr: { d: start } }, { attr: { d: end }, ease: 'Power2.easeOut', duration: 0.75 });

			timeLine.to(
				line,
				{
					attr: { d: start },
					ease: 'elastic.out(3,0.5)',
				},
				'<20%'
			);

			//_ Placeholder Shift Up
			timeLine.to(
				placeholder,
				{
					top: -15,
					left: 0,
					scale: 0.7,
					duration: 0.5,
					ease: 'Power2.easeOut',
				},
				'<5%'
			);
		}
	});
});

//! Show Scroll Up...
//////////////////////////////////////
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

//! Scroll Sections Active Link...
/////////////////////////////////////////
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (sectionsClass) {
			if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
				sectionsClass.classList.add('active-link');
			} else {
				sectionsClass.classList.remove('active-link');
			}
		}
	});
};

// Use lodash debounce to avoid frequent calls during scrolling

// const debounceScrollActive = _.debounce(scrollActive, 200);
// Adjust the debounce time as needed

// Add the event listener with the debounced function
// window.addEventListener('scroll', debounceScrollActive);

window.addEventListener('scroll', scrollActive);
