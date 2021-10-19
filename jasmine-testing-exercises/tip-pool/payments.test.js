describe('Payments test (with setup and tear-down)', function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = 200;
		tipAmtInput.value = 20;
	});

	it('should return undefined on createCurPayment()', function () {
		billAmtInput.value = '';
		tipAmtInput.value = '';

		expect(createCurPayment()).toEqual(undefined);
	});

	it('should return object of values on createCurPayment()', function () {
		expect(createCurPayment()).toEqual({
			billAmt    : '200',
			tipAmt     : '20',
			tipPercent : 10
		});
	});

	it('should create newTr pass to appendTd with input value', function () {
		appendPaymentTable(createCurPayment());

		expect(document.querySelector('#payment0').innerHTML).toEqual(
			'<td>$200</td><td>$20</td><td>10%</td><td class="deleteBtn">X</td>'
		);
	});

	it('should create newTr and pass to appendTd with calculated sum of all payment on updateSummary()', function () {
		submitPaymentInfo();
		billAmtInput.value = 200;
		tipAmtInput.value = 20;
		submitPaymentInfo();

		expect(summaryTds[0].innerHTML).toEqual('$400');
		expect(summaryTds[1].innerHTML).toEqual('$40');
		expect(summaryTds[2].innerHTML).toEqual('10%');
	});

	it('should add a curPayment object to allPayments, update html and reset input values', function () {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(billAmtInput.value).toEqual('');
		expect(tipAmtInput.value).toEqual('');
	});

	afterEach(function () {
		// teardown logic
		allPayments = {};
		paymentId = 0;
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		billAmtInput.value = '';
		tipAmtInput.value = '';
		serverTbody.innerHTML = '';
		paymentTbody.innerHTML = '';
	});
});
