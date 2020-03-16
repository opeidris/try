const container = document.querySelector('.cont');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let counter = 0;

const ticketPrice = +movieSelect.value;

function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	console.log(selectedSeats.length);
	count.innerText = selectedSeats.length;
}

function calculatePrice(counter) {
	price = ticketPrice * c;
}

container.addEventListener('click', (e) => {
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
});
