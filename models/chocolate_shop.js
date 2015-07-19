var ChocolateShop = function (cost, wrapperBonus) {
	this.cost = cost;
	this.wrapperBonus = wrapperBonus;
};

ChocolateShop.prototype.totalChocolates = function (dollars) {
	if (dollars < this.cost) { return 0; }
	var chocolatesBought = Math.floor(dollars / this.cost);
	return chocolatesBought + this.bonusChocolates(chocolatesBought);
};

ChocolateShop.prototype.bonusChocolates = function (wrappers) {
	if (this.wrapperBonus <= 1) { return Infinity; }
	if (wrappers < this.wrapperBonus) { return 0; }
	var chocolatesRedeemed = Math.floor(wrappers / this.wrapperBonus);
	var leftoverWrappers = wrappers % this.wrapperBonus;
	return chocolatesRedeemed + this.bonusChocolates(chocolatesRedeemed + leftoverWrappers);
};

module.exports = ChocolateShop;
