it('should calculate the monthly rate correctly', function () {
	let values = { amount: 12224.5, years: 3, rate: 7.76 };
	expect(calculateMonthlyPayment(values)).toEqual(381.72);
});

it('should return a result with 2 decimal places', function () {
	let values = { amount: 10000, years: 3, rate: 3 };
	expect(calculateMonthlyPayment(values)).toEqual(290.81);
});

it('should handle high interest rates', function () {
	let values = { amount: 1000, years: 3, rate: 90 };
	expect(calculateMonthlyPayment(values)).toEqual(80.99);
});
