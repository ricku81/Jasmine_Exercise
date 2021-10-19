window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues () {
	return {
		amount : +document.getElementById('loan-amount').value,
		years  : +document.getElementById('loan-years').value,
		rate   : +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues () {
	let loanAmount = document.querySelector('#loan-amount');
	let termInYears = document.querySelector('#loan-years');
	let yearlyRate = document.querySelector('#loan-rate');
	let values = { amount: 11224.5, years: 3, rate: 7.76 };
	loanAmount.value = values.amount;
	termInYears.value = values.years;
	yearlyRate.value = values.rate;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update () {
	updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment (values) {
	// why /100 ?
	let i = values.rate / 100 / 12; //i is monthlyRate
	let n = values.years * 12;
	let output = values.amount * i / (1 - Math.pow(1 + i, -n));
	let roundedOutput = Math.round(output * 100) / 100;

	return roundedOutput;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly (monthly) {
	let monthlyPayment = document.querySelector('#monthly-payment');
	monthlyPayment.innerText = `$${monthly}`;
}
