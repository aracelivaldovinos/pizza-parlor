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






















