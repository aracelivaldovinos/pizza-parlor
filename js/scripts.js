//Business Logic
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
  $("#displayTotalCost").html(totalCost)

}

//UI Logic
$(document).ready(function(){
  $("button#add").click(function(){
    let toppingArray = $('input:checked').map(function(){
      return $(this).val();
    });
    $("#displayToppings").text(toppingArray.get())
    console.log(toppingArray.get());

    size = $("select#size").val()
    $("#displaySize").text(size)

    let pizza = new Pizza (toppingArray, size)
    let sizeAmnt = pizza.sizeAmnt ()
    let toppingAmnt = pizza.toppingAmnt()
    pizza.totalCost(toppingAmnt, sizeAmnt)

  })

})