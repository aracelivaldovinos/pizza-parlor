Describe Pizza ()
Test: Create Pizza construct with toppings and size as properties
Code: function Pizza (toppings, size) {
  this.toppings = toppings
  this.pizza= pizza
}
Output: Pizza {toppings: array, size: "string"}

Test: Create method to get price on size of pizza
Code: Pizza.prototype.pizzaSizeAmt = function () {
  size = $("select#size").val()
  if (size="small") {
    return 6
  }else if (size="medium") {
    return 8
  }else {
    return 10
  }
}
Output: price of pizza
