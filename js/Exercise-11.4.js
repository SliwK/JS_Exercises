function Phone(brand, price, color, size, scoring) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.size = size;
  this.scoring = scoring;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It's size is " + this.size + " px. Average user scoring is: " + this.scoring + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 2500, "black", 5.8, "8/10");
var iPhone6S = new Phone("Apple", 2250, "silver", 6.2, "10/10");
var onePlusOne = new Phone("OnePlusOne", 3000, "gold", 5.7, "6/10");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
