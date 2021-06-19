function Pizza (topping, size) {
  this.topping = topping;
  this.size = size
}


Pizza.prototype.pizzaSizeAmt = function () {
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
  for (let i =0; i<=this.topping.length; i++) {
    if (this.topping != "none") {
      let toppingPrice = this.topping.length * 2
      return toppingPrice
    } 
  }
  }


Pizza.prototype.totalCost = function(toppingAmnt, sizeAmnt) {
    let totalCost = toppingAmnt + sizeAmnt
  }




// pizza = ([topping,topping], "size")
//UI Logic
$(document).ready(function(){
  $("form#formOne").click(function(event){
    event.preventDefault();
    let meatArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
      let inputtedMeats = $(this).val()
      meatArray.push(inputtedMeats);
      $("#toppingsOutput").text(inputtedMeats + ",")
    })
    let size = $("select#size").val()
    $("#sizeOutput").text(size)
    


  })
  

})















