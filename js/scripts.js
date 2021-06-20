let pizza = new Pizza (["pepperoni","chicken"],"small")

function Pizza (topping, size, cost) {
  this.topping = topping
  this.size = size
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

Pizza.prototype.toppingAmnt = function () {
  toppingPrice = this.topping.length * 2
  return toppingPrice
}

Pizza.prototype.totalCost = function (toppingPrice, sizePrice) {
  totalCost = toppingPrice + sizePrice
}