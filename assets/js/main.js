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

/*
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
*/

/*
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select all elements with the class 'input-container'
const containers = document.querySelectorAll('.input-container');

// Select the form element
const form = document.querySelector('form');

// Create a GSAP timeline with default duration set to 1 second
const timeLine = gsap.timeline({ defaults: { duration: 1 } });

//! Elastic Line
// Define the start and end paths for the elastic line animation
const start = 'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end = 'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

//! Initializing Elastic Effect
// Function to animate the elastic line
const elasticLineAnimation = (line, startPath, endPath) => {
	// Animate the line from the start path to the end path
	timeLine.fromTo(line, { attr: { d: startPath } }, { attr: { d: endPath }, ease: 'Power2.easeOut', duration: 0.75 });

	// Animate the line back to the start path with an elastic ease
	timeLine.to(line, { attr: { d: startPath }, ease: 'elastic.out(3,0.5)' }, '<20%');
};

//! Placeholder Shift Up
// Function to shift the placeholder
const shiftPlaceholder = (placeholder, topValue, leftValue, scaleValue) => {
	// Animate the placeholder's top, left, and scale properties
	timeLine.to(
		placeholder,
		{
			top: topValue,
			left: leftValue,
			scale: scaleValue,
			duration: 0.5,
			ease: 'Power2.easeOut',
		},
		'<5%'
	);
};

//! Input Click Event...
// Function to handle input click events
const handleInputClick = (input, line, placeholder) => {
	// Check if the input is empty
	if (!input.value) {
		// Trigger the elastic line animation
		elasticLineAnimation(line, start, end);
		// Shift the placeholder
		shiftPlaceholder(placeholder, -15, 0, 0.7);
	}
};

// Function to revert the placeholder when the form is clicked
const revertPlaceholder = (input, placeholder) => {
	// Check if the input is empty
	if (!input.value) {
		// Revert the placeholder to its original position
		timeLine.to(placeholder, {
			top: 0,
			left: 0,
			scale: 1,
			duration: 0.5,
			ease: 'Power2.easeOut',
		});
	}
};

// Add click event listeners to each input for handling elastic effects
containers.forEach(container => {
	const input = container.querySelector('.input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('click', () => {
		// Handle input click events
		handleInputClick(input, line, placeholder);
	});
});

// Add click event listener to the form to revert placeholder effects
form.addEventListener('click', () => {
	containers.forEach(container => {
		const input = container.querySelector('.input');
		const placeholder = container.querySelector('.placeholder');

		// Check if the input is not focused and empty, then revert the placeholder
		if (document.activeElement !== input) {
			revertPlaceholder(input, placeholder);
		}
	});
});

// Function to validate email format
const validateEmail = email => /\S+@\S+\.\S+/.test(email);

// Function to validate phone number format
const validatePhone = phone => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);

// Function to colorize elements
const colorize = (color, line, placeholder) => {
	gsap.to(line, { stroke: color, duration: 0.75 });
	gsap.to(placeholder, { color, duration: 0.75 });
};

// Add input event listeners for validation
containers.forEach(container => {
	const input = container.querySelector('.input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('input', e => {
		const inputText = e.target.value;

		if (e.target.type === 'text' && inputText.length > 2) {
			colorize('#6391E8', line, placeholder);
		} else if (e.target.type === 'text') {
			colorize('#FE8C99', line, placeholder);
		}

		if (e.target.type === 'email') {
			colorize(validateEmail(inputText) ? '#6391E8' : '#FE8C99', line, placeholder);
		}

		if (e.target.type === 'tel') {
			colorize(validatePhone(inputText) ? '#6391E8' : '#FE8C99', line, placeholder);
		}
	});
});

// Function to animate the checkbox
const animateCheckbox = () => {
	const checkbox = document.querySelector('.checkbox');
	const tl2 = gsap.timeline({
		defaults: { duration: 0.5, ease: 'Power2.easeOut' },
	});
	const tickMarkPath = document.querySelector('.tick-mark path');
	const pathLength = tickMarkPath.getTotalLength();

	gsap.set(tickMarkPath, {
		strokeDashoffset: pathLength,
		strokeDasharray: pathLength,
	});

	checkbox.addEventListener('click', () => {
		if (checkbox.checked) {
			tl2.to('.checkbox-fill', { top: '0%' });
			tl2.fromTo(tickMarkPath, { strokeDashoffset: pathLength }, { strokeDashoffset: 0 }, '<50%');
			tl2.to('.checkbox-label', { color: '#6391e8' }, '<');
		} else {
			tl2.to('.checkbox-fill', { top: '100%' });
			tl2.fromTo(tickMarkPath, { strokeDashoffset: 0 }, { strokeDashoffset: pathLength }, '<50%');
			tl2.to('.checkbox-label', { color: '#777474' }, '<');
		}
	});
};

// Call the checkbox animation function
animateCheckbox();
//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//_ Revert back if it's Not Focused....
form.addEventListener('focus', () => {
	containers.forEach(container => {
		const input = container.querySelector('.input');
		const line = container.querySelector('.elastic-line');
		const placeholder = container.querySelector('.placeholder');

		if (document.activeElement !== input) {
			if (!input.value) {
				gsap.to(placeholder, {
					top: 0,
					left: 0,
					scale: 1,
					duration: 0.5,
					ease: 'Power2.easeOut',
				});
			}
		}

		//! For Validation...
		input.addEventListener('input', e => {
			//_ Name Validation.....
			if (e.target.type === 'text') {
				let inputText = e.target.value;
				if (inputText.length > 2) {
					//Colorize Input
					colorize('#6391E8', line, placeholder);
				} else {
					colorize('#FE8C99', line, placeholder);
				}
			}
			//_ Email Validation.....
			if (e.target.type === 'email') {
				let validEmail = validateEmail(e.target.value);
				if (validEmail) {
					//Colorize Input
					colorize('#6391E8', line, placeholder);
				} else {
					colorize('#FE8C99', line, placeholder);
				}
			}
			// _ Phone Number Validation...
			if (e.target.type === 'tel') {
				let validPhoneNumber = validatePhone(e.target.value);
				if (validPhoneNumber) {
					//Colorize Input
					colorize('#6391E8', line, placeholder);
				} else {
					colorize('#FE8C99', line, placeholder);
				}
			}
		});
	});
});

// checking email validation
function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}
function validatePhone(phone) {
	let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return re.test(phone);
}

// Colorize Function...
function colorize(color, line, placeholder) {
	gsap.to(line, { stroke: color, duration: 0.75 });
	gsap.to(placeholder, { color: color, duration: 0.75 });
}

// Animating Checkbox
const checkbox = document.querySelector('.checkbox');
const tl2 = gsap.timeline({
	defaults: { duration: 0.5, ease: 'Power2.easeOut' },
});
const tickMarkPath = document.querySelector('.tick-mark path');
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
	strokeDashoffset: pathLength,
	strokeDasharray: pathLength,
});

checkbox.addEventListener('click', () => {
	if (checkbox.checked) {
		tl2.to('.checkbox-fill', { top: '0%' });
		tl2.fromTo(tickMarkPath, { strokeDashoffset: pathLength }, { strokeDashoffset: 0 }, '<50%');
		tl2.to('.checkbox-label', { color: '#6391e8' }, '<');
	} else {
		tl2.to('.checkbox-fill', { top: '100%' });
		tl2.fromTo(tickMarkPath, { strokeDashoffset: 0 }, { strokeDashoffset: pathLength }, '<50%');
		// tl2.to('.checkbox-label', { color: '#c5c5c5' }, '<');
		tl2.to('.checkbox-label', { color: '#777474' }, '<');
	}
});
//! ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');
const timeLine = gsap.timeline({ defaults: { duration: 1 } });

const rootStyles = getComputedStyle(document.documentElement);
const firstColor = rootStyles.getPropertyValue('--first-color');
const textColor = rootStyles.getPropertyValue('--text-color');

const start = 'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end = 'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

containers.forEach(container => {
	const input = container.querySelector('.input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('click', () => {
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

	// Use 'focusout' event instead of 'click' on the form
	input.addEventListener('focusout', () => {
		if (!input.value) {
			gsap.to(placeholder, {
				top: 25,
				left: 0,
				scale: 1,
				duration: 0.5,
				ease: 'Power2.easeOut',
			});
			colorize(textColor, line, placeholder);
		}
	});

	input.addEventListener('input', e => {
		if (e.target.type === 'text') {
			let inputText = e.target.value;
			if (inputText.length > 2) {
				colorize(firstColor, line, placeholder);
			} else {
				colorize('#FE8C99', line, placeholder);
			}
		}

		if (e.target.type === 'email') {
			let validEmail = validateEmail(e.target.value);
			if (validEmail) {
				colorize(firstColor, line, placeholder);
			} else {
				colorize('#FE8C99', line, placeholder);
			}
		}

		if (e.target.type === 'tel') {
			let validPhoneNumber = validatePhone(e.target.value);
			if (validPhoneNumber) {
				colorize(firstColor, line, placeholder);
			} else {
				colorize('#FE8C99', line, placeholder);
			}
		}
	});
});

function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePhone(phone) {
	let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return re.test(phone);
}

function colorize(color, line, placeholder) {
	// gsap.to(line, { stroke: color, duration: 0.75 });
	gsap.to(line, { stroke: color, duration: 0 });
	// gsap.to(placeholder, { color: color, duration: 0.75 });
	gsap.to(placeholder, { color: color, duration: 0 });
}

// Animating Checkbox
const checkbox = document.querySelector('.checkbox');
const tl2 = gsap.timeline({
	defaults: { duration: 0.5, ease: 'Power2.easeOut' },
});
const tickMarkPath = document.querySelector('.tick-mark path');
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
	strokeDashoffset: pathLength,
	strokeDasharray: pathLength,
});

checkbox.addEventListener('click', () => {
	if (checkbox.checked) {
		tl2.to('.checkbox-fill', { top: '0%' });
		tl2.fromTo(tickMarkPath, { strokeDashoffset: pathLength }, { strokeDashoffset: 0 }, '<50%');
		// tl2.to('.checkbox-label', { color: '#6391e8' }, '<');
		tl2.to('.checkbox-label', { color: firstColor }, { duration: 0 }, '<');
	} else {
		tl2.to('.checkbox-fill', { top: '100%' });
		tl2.fromTo(tickMarkPath, { strokeDashoffset: 0 }, { strokeDashoffset: pathLength }, '<50%');
		// tl2.to('.checkbox-label', { color: '#c5c5c5' }, '<');
		// tl2.to('.checkbox-label', { color: '#777474' }, '<');
		tl2.to('.checkbox-label', { color: textColor }, { duration: 0 }, '<');
	}
});

/*
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
*/

//! /////////////////////////////////////////////////////////////////////////////////////////////////
// Selecting elements from the HTML document using their IDs
const contactForm = document.getElementById('contactBeta-form');
const contactMessage = document.getElementById('contactBeta-message');

// const rootStyles = getComputedStyle(document.documentElement);
// const textColor = rootStyles.getPropertyValue('--text-color');

function resetSpecificGSAPElements() {
	containers.forEach(container => {
		const line = container.querySelector('.elastic-line');
		const placeholder = container.querySelector('.placeholder');

		gsap.to(line, { attr: { d: start }, duration: 0 });
		gsap.to(placeholder, { top: 25, left: 0, scale: 1, duration: 0.5, ease: 'Power2.easeOut' });
		// colorize('#FE8C99', line, placeholder);
		colorize(textColor, line, placeholder);
	});
}

/**
 * Sends an email using the EmailJS service.
 * @returns {Promise<boolean>} A Promise that resolves to true if the email is sent successfully, or false if there is an error.
 **/

// Function to send email using Email.js
const sendEmail = async () => {
	try {
		//_ Using 'await' for asynchronous operation (sendForm returns a promise)
		// serviceID - templateID - #form - publicKey
		await emailjs.sendForm('service_c1336zx', 'template_voa9whe', '#contactBeta-form', 'BQukdiHZSqoSobLVR');
		return true; // Indicate success
	} catch (error) {
		console.error('Error sending email:', error);
		return false; // Indicate failure
	}
};

// Function to display a message and clear it after a specified time
const showMessage = message => {
	contactMessage.textContent = message;

	// Clear message after 5 seconds
	setTimeout(() => {
		contactMessage.textContent = '';
	}, 5000);
};

// Function to handle form submission
const handleFormSubmit = async event => {
	//#  ('e' or 'event' whichever one used in your function is mostly a Variable name)
	event.preventDefault();

	// Attempt to send the email
	const isEmailSent = await sendEmail();

	if (isEmailSent) {
		// Show success message
		showMessage('Message Sent Successfully');

		// Clear input fields by resetting the form
		contactForm.reset();
		resetSpecificGSAPElements();
	} else {
		// Show error message
		showMessage('Message Not Sent (Service Error)');
	}
};

// Adding an event listener to the form for the 'submit' event
contactForm.addEventListener('submit', handleFormSubmit);

//! /////////////////////////////////////////////////////////////////////////////////////////////////

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

// _Use lodash debounce to avoid frequent calls during scrolling
// const debounceScrollActive = _.debounce(scrollActive, 200);
//# Adjust the debounce time as needed

//_Add the event listener with the debounced function
// window.addEventListener('scroll', debounceScrollActive);

window.addEventListener('scroll', scrollActive);
