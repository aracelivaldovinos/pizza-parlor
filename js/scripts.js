function Pizza (plain, meatTopping,vegetableTopping, topping, size, cost) {
  this.plain = plain
  this.meatTopping = meatTopping
  this.vegetableTopping = vegetableTopping
  this.topping = topping
  this.size = size
  this.cost = cost
}

Pizza.prototype.totalOfToppings = function () {
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
