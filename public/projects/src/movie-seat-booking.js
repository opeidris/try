const container = document.querySelector('.cont');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//get data fromm local storage and populate the UI
populateUI();
let ticketPrice = +movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
	localStorage.setItem('selectedMovieIndex', movieIndex);
	localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');

	const seatsIndex = [ ...selectedSeats ].map((seat) => [ ...seats ].indexOf(seat));
	console.log(seatsIndex);

	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

	selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

	if (selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {
			if (selectedSeats.indexOf(index) > -1) {
				seat.classList.add('selected');
			}
		});
	}

	const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

	if (selectedMovieIndex !== null) {
		movieSelect.selectedIndex = selectedMovieIndex;
	}
}
// Movie select Event

movieSelect.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;
	setMovieData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});
//Seat Click event
container.addEventListener('click', (e) => {
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
});

updateSelectedCount();
