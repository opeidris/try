// for (var i = 0; i < 100; i++) {
// 	var star =
// 		'<div class="star m-0" style="animation: twinkle ' +
// 		(Math.random() * 5 + 5) +
// 		's linear ' +
// 		(Math.random() * 1 + 1) +
// 		's infinite; top: ' +
// 		Math.random() * $(window).height() +
// 		'px; left: ' +
// 		Math.random() * $(window).width() +
// 		'px;"></div>';
// 	document.querySelector('.homescreen').appendChild(star);
// 	$('.homescreen').append(star);
// }

const homescreen = document.querySelector('.homescreen');
const w = window.innerWidth;
const h = window.innerHeight;

for (i = 0; i < 100; i++) {
	let star = document.createElement('div');
	star.innerHTML =
		'<div class="star m-0" style="animation: twinkle ' +
		(Math.random() * 5 + 5) +
		's linear ' +
		(Math.random() * 1 + 1) +
		's infinite; top: ' +
		Math.random() * h +
		'px; left: ' +
		Math.random() * w +
		'px;"></div>';
	homescreen.appendChild(star);
}

document.addEventListener('DOMContentLoaded', function(event) {
	// array with texts to type in typewriter
	var dataText = [
		'Hi,',
		'You can call me Ope',
		'Or David',
		'I go by both.',
		'I am a developer',
		'a marketer',
		'a student',
		'and more',
		"This is getting long so I think I'll stop",
		'Click here to see what I am working on.'
	];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < text.length) {
			// add next character to h1
			document.querySelector('#typewriter').innerHTML =
				text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == 'function') {
			// text finished, call callback if there is a callback function
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function() {
				StartTextAnimation(0);
			}, 20000);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function() {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});

// var TxtType = function(el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 10) || 2000;
// 	this.txt = '';
// 	this.tick();
// 	this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];

// 	if (this.isDeleting) {
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}

// 	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

// 	var that = this;
// 	var delta = 200 - Math.random() * 100;

// 	if (this.isDeleting) {
// 		delta /= 2;
// 	}

// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period;
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		this.loopNum++;
// 		delta = 500;
// 	}

// 	setTimeout(function() {
// 		that.tick();
// 	}, delta);
// };

// window.onload = function() {
// 	var elements = document.getElementsByClassName('typewrite');
// 	for (var i = 0; i < elements.length; i++) {
// 		var toRotate = elements[i].getAttribute('data-type');
// 		var period = elements[i].getAttribute('data-period');
// 		if (toRotate) {
// 			new TxtType(elements[i], JSON.parse(toRotate), period);
// 		}
// 	}
// 	// INJECT CSS
// 	var css = document.createElement('style');
// 	css.type = 'text/css';
// 	css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
// 	document.body.appendChild(css);
// };
