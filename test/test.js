var assert = require('assert');
var ChocolateShop = require('../models/chocolate_shop');

describe('ChocolateShop', function () {
	var threeWrappers = new ChocolateShop(2, 3);
	var infinityChocolates = new ChocolateShop(5, 1);

	describe('#totalChocolates()', function () {
		it('should return 0 when the total dollars is less than cost of one chocolate', function() {
			assert.equal(0, threeWrappers.totalChocolates(1));
		});
		it('should return Infinity if dollars >= cost & wrapperBonus === 1', function () {
			assert.equal(Infinity, infinityChocolates.totalChocolates(12));
		});
		it('should return the number of chocolates one can buy without enough wrappers', function () {
			assert.equal(2, threeWrappers.totalChocolates(4));
		});
		it('should return the number of chocolaes one can buy with bonus wrappers - simple', function () {
			assert.equal(4, threeWrappers.totalChocolates(6));
		});
		it('should return the number of chocolates one can buy with bonus wrappers - more complex', function () {
			assert.equal(7, threeWrappers.totalChocolates(10));
		});
	});
	describe('#bonusChocolates()', function () {
		it('should return 0 if wrappers input is less than bonus wrappers', function () {
			assert.equal(0, threeWrappers.bonusChocolates(2));
		});
		it('should return Infinity if bonus wrappers is <=  1', function () {
			assert.equal(Infinity, infinityChocolates.bonusChocolates(10));
		});
		it('should return number of bonus chocolates from wrappers', function () {
			assert.equal(2, threeWrappers.bonusChocolates(6));
		});
		it('should return number of bonus chocolates from bonus chocolates wrappers', function () {
			assert.equal(13, threeWrappers.bonusChocolates(27));
		});
	});
});