describe('myAwesomeFunction', function () {

	var awesomeFunction;

	beforeEach(function () {
		awesomeFunction = new myAwesomeFunction;
	});

	describe('be awesome', function() {

		it('should be awesome', function () {
			console.log(awesomeFunction.beAwesome());
			expect(awesomeFunction.beAwesome()).toEqual('I am awesome!');
		});
	});

});