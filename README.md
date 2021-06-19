Describe Pizza ()
Test: Create Pizza construct with toppings and size as properties
Code: function Pizza (toppings, size) {
  this.toppings = toppings
  this.pizza= pizza
}
Output: Pizza {toppings: array, size: "string"}

Test: Create method to get price on size of pizza
Code: Pizza.prototype.pizzaSizeAmt = function () {
  size = $("select#size").val() --> "small"
  if (size === "small") {
    return 6
  }else if (size === "medium") {
    return 8
  }else {
    return 10
  }
}
Output: 6

Test: Create method to get price for each topping
Code: Pizza.prototype.toppingAmnt = function () {
this.topping = ["pepperoni"]  
let toppingsPrice = 0
for (i =0; i<=this.topping.length; i++) {
  if (this.topping != "none") {
    let toppingPrice = this.topping.length * 2
    return toppingPrice
  } 
}
}
Output: 2

Test: Create method to get total cost
Code: Pizza.prototype.totalCost = function(2, 8) {
 let totalCost = toppingAmnt + sizeAmt
}
Output: 10