let pizza = new Pizza (["pepperoni","chicken",0,"small",0,0])

function Pizza (topping, toppingPrice, size, sizePrice, cost) {
  this.topping = topping
  this.toppingPrice = toppingPrice
  this.size = size
  this.sizePrice = sizePrice
  this.cost = cost
}