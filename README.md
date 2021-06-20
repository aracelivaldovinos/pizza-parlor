Describe: Pizza ()

let pizza = new Pizza (["pepperoni","chicken"],"small",0)


Test: Create a pizza constructor with properties 
Code: function Pizza (topping, size, cost) {
  this.topping = topping
  this.size = size
  this.cost = cost
}
Output: Pizza (["pepperoni","cheese"],"small",0)

Test: Create a method to calculate size price 
Code: Pizza.prototype.sizeAmnt = function () {
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
Output: 6

Test: Create a method to calculate topping price
Pizza.prototype.toppingAmnt = function () {
  toppingPrice = this.topping.length * 2
  return toppingPrice
}
Output: 4