Describe: Pizza ()

let pizza = new Pizza (["pepperoni","chicken"],"small")


Test: Create a pizza constructor with properties 
Code: function Pizza (topping, size) {
  this.topping = topping
  this.size = size
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
Code: Pizza.prototype.toppingAmnt = function () {
  toppingPrice = this.topping.length * 2
  return toppingPrice
}
Output: 4

Test: Create a method to calculate total cost
Code: Pizza.prototype.totalCost = function (toppingPrice, sizePrice) {
  totalCost = toppingPrice + sizePrice
Output: 10
