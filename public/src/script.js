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
