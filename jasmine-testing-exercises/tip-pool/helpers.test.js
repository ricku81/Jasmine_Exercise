describe('Helpers test (with setup and tear-down)', function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = 500;
		tipAmtInput.value = 50;
		submitPaymentInfo();
	});

	it('should equal sum of billAmt on sumPaymentTotal()', function () {
		billAmtInput.value = 500;
		tipAmtInput.value = 50;
		submitPaymentInfo();

		expect(sumPaymentTotal('billAmt')).toEqual(1000);
	});

	it('should equal sum of tipAmt on sumPaymentTotal()', function () {
		billAmtInput.value = 500;
		tipAmtInput.value = 50;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipAmt')).toEqual(100);
	});

	it('should sum total tip percent on sumPaymentTotal()', function () {
		billAmtInput.value = 500;
		tipAmtInput.value = 500;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipPercent')).toEqual(110);
	});

	it('should convert the bill and tip amount into a tip percent', function () {
		expect(calculateTipPercent(500, 21)).toEqual(4);
	});

	it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
		let newTr = document.createElement('tr');

		appendTd(newTr, 'test');

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerText).toEqual('test');
	});

	it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
		let newTr = document.createElement('tr');

		appendDeleteBtn(newTr);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerText).toEqual('X');
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
