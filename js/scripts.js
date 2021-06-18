
function Pizza (plain, topping, size, cost) {
  this.plain = plain
  this.topping = topping
  this.size = size
  this.cost = cost
}

// Pizza.prototype.totalOfToppings = function () {
//   if (this.meatTopping === true && this,vegetableTopping === true) {
//   this.plain += this.topping
//   }
//   else if (this.meatTopping ===false) {
//     this.plain += this.topping
//   }
//   else {
//     this.plain += this.topping
//   }
// }

// Pizza.prototype.sizeOfPizza = function() {
//   this.plain = 6
//   if (this.size === "medium") {
//     this.plain += 2
//   }else if (this.size === "large") {
//     this.plain += 4
//   }else {
//     this.plain = this.plain
//   }
// }

Pizza.prototype.totalCost = function() {
  this.cost += this.plain
}

let pizza1 = (0,0,0,0)

$(document).ready(function(){
    this.plain = 6
  const size = $("select#size").val()
  const meats = $("select#meats").val()
  const veggies = $("select#veggies").val()
  $("button#submit").click(function(event){
    event.preventDefault();
    if (size === $("#size").val("#small")) {
      console.log(pizza1.plain)

    }
    
    
  })
})
