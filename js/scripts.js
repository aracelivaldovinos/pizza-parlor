let pizza = new Pizza (["pepperoni","chicken",0,"small",0])

function Pizza (topping, toppingPrice, size, cost) {
  this.topping = topping
  this.toppingPrice = toppingPrice
  this.size = size
  this.cost = cost
}

Pizza.prototype.sizeAmnt = function () {
  sizePrice = 0
  if (this.size === "small" ) {
    sizePrice = 6
  }
  else if (this.size === "medium" ) {
    sizePrice = 8
  }
  else {
    sizePrice = 10
  }
  return sizePrice
}