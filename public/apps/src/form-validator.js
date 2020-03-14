const form = document.getElementById('form');
const usernamme = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	const inp = formControl.querySelector('input');
	inp.className = 'border-2 border-red-600 block w-full rounded-sm p-1';
	const small = formControl.querySelector('small');
	small.innerText = message;
	small.className = 'text-red-600 absolute left-0 bottom-2 mb-0 ';
}

function showSuccess(input) {
	input.className = 'border-2 border-green-400 block w-full rounded-sm p-1';
}

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
			const formControl = input.parentElement;
			formControl.querySelector('small').className = 'text-red-600 absolute left-0 bottom-0 invisible mb-0 pb-0';
		}
	});
}

function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'The passwords do not match');
	}
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value) == false) {
		showError(input, 'Email is not valid');
	}
}

function checkLength(input, min, max) {
	if (input.value.length < min || input.value.length > max) {
		showError(input, `The ${input.id} must be between ${min} and ${max} characters`);
	}
}

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([ username, email, password, password2 ]);
	checkPasswordsMatch(password, password2);
	checkLength(username, 3, 15);
	checkLength(password, 8, 25);
	checkEmail(email);
});
