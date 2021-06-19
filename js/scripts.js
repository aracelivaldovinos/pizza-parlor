function Pizza (topping, size) {
  this.topping = topping;
  this.size = size
}


Pizza.prototype.pizzaSizeAmt = function () {
  size = $("select#size").val()
  if (size === "small") {
    return 6
  }else if (size === "medium") {
    return 8
  }else {
    return 10
  }
}

Pizza.prototype.toppingAmnt = function () {
  let toppingsPrice = 0
  for (i =0; i<=this.topping.length; i++) {
    if (this.topping != "none") {
      let toppingPrice = this.topping.length * 2
      return toppingPrice
    } 
  }
  }




















