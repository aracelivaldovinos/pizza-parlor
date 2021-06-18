Describe Pizza ()
Test: Create a constructor 
Code: function Pizza (plain, meatTopping,vegetableTopping, topping, size, cost) {
  this.plain = plain
  this.meatTopping = meatTopping
  this.vegetableTopping = vegetableTopping
  this.topping = topping
  this.size = size
  this.cost = cost
}
Output: Pizza {meatTopping: Boolean, vegetableTopping: Boolean, topping: Number ,size: String, cost: Number}

Test: Create a method for totalOfToppings
Code: Pizza.prototype.totalOfToppings= function () {
  this.plain = 6
  if (this.meatTopping === true && this,vegetableTopping === true) {
  this.plain += this.topping
  }
  else if (this.meatTopping ===false) {
    this.plain += this.topping
  }
  else {
    this.plain += this.topping
  }
}
Output: total of toppings


Test: Create a method for sizeOfPizza
Code: Pizza.prototype.sizeOfPizza = function() {
  this.plain = 6
  medium = 2
  large = 4
  if (this.size === "medium") {
    this.plain += medium
  }else if (this.size === "large") {
    this.plain += large
  }else {
    this.plain = this.plain
  }
}

Output: price of size

Test: Create a method for totalCost
Code: Pizza.prototype.totalCost = function() {
  this.cost += this.plain
}

Output: total cost