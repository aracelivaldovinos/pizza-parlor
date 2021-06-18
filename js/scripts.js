
function Pizza (plain, topping, size, cost) {
  this.plain = plain
  this.topping = topping
  this.size = size
  this.cost = cost
}

Pizza.prototype.sizeOfPizza = function() {
  if (this.size === "medium")  {
    this.plain += 2
  }else if (this.size === "large") {
    this.plain +=4
  }else {
    this.plain 
  } 
}

// Pizza.prototype.totalOfToppings = function () {
//   if (meats === "meat1") {
//     this.toppings += 0.89
//     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
//       this.toppings += 0.50
//     }
//     else{
//       this.toppings +=0
//     }
//   } 
//   else if (meats === "meat2") {
//     this.toppings += 1
//     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
//       this.toppings += 0.50
//     }
//     else{
//       this.toppings +=0
//     }
//   }
//   else if (meats === "meat3") {
//     this.toppings += 1.99
//     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
//       this.toppings += 0.50
//     }
//     else{
//       this.toppings +=0
//     }
//   }
//   else {
//     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
//       this.toppings += 0.50
//     }
//   }
// }


Pizza.prototype.totalCost = function() {
  this.cost += this.plain + this.toppings
}

let pizza1 = (0,0,0,0)

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    this.plain = 6
    this.toppings = 0
    pizza1.size = $("select#sizeOptions").val()
    $("#sizeOutput").text(pizza1.size + ":" + Pizza.sizeOfPizza())
  });
  });
  // let meats = $("select#meats").val()
  // let veggies = $("select#veggies").val()
    

    
    
  // let plain = 6
  // let toppings = 0
  // let size = $("select#size").val()
  // let meats = $("select#meats").val()
  // let veggies = $("select#veggies").val()
  //   if (size === "medium")  {
  //     plain += 2
  //   }else if (size === "large") {
  //     plain +=4
  //   }else {
  //     plain 
  //   }  

  //   if (meats === "meat1") {
  //     toppings += 0.89
  //     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
  //       toppings += 0.50
  //     }
  //     else{
  //       toppings +=0
  //     }
  //   } 
  //   else if (meats === "meat2") {
  //     toppings += 1
  //     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
  //       toppings += 0.50
  //     }
  //     else{
  //       toppings +=0
  //     }
  //   }
  //   else if (meats === "meat3") {
  //     toppings += 1.99
  //     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
  //       toppings += 0.50
  //     }
  //     else{
  //       toppings +=0
  //     }
  //   }
  //   else {
  //     if (veggies ==="veggie1" || veggies ==="veggie2" || veggies ==="veggie3") {
  //       toppings += 0.50
  //     }
  //   }


  
 
