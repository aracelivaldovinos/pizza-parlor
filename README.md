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

Test: Create a method for cost
Code: Pizza.prototype.costOfPizza = function (pizza) {
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
Output: cost $