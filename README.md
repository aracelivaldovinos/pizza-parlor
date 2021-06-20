#### _A web application where a user can create their own pizza_


#### By _Araceli Valdovinos_

## Technologies Used

* _HTML_
* _JavaScript_
* _jQuery_
* _CSS_
* _Bootstrap_



## Description

_This browser application allows users to order their own pizza. Users are able to choose one or more individual toppings and size then see the final cost._
 

## Setup/Installation Requirements

* _Clone the repository to desktop_
* _Navigate inside the folder_
* _open index.html_
* 



## Known Bugs\Goals

* _Vegetable toppings are the same price as the meat toppings. I would need to create another property and method to separate veggie and meat toppings._


## Specs

_Describe: Pizza ()_

_let pizza = new Pizza (["pepperoni","chicken"],"small")_


_Test: Create a pizza constructor with properties Code: function Pizza (topping, size) {this.topping = topping this.size = size} Output: Pizza (["pepperoni","cheese"],"small",0)_

_Test: Create a method to calculate size price Code: Pizza.prototype.sizeAmnt = function () { sizePrice =0  if (this.size === "small" ) { sizePrice = 6 } else if(this.size === "medium" ) { sizePrice = 8 } else { sizePrice = 10 } return sizePrice  } Output: 6_

_Test: Create a method to calculate topping price Code: Pizza.prototype.toppingAmnt = function () { toppingPrice = this.topping.length * 2 return toppingPrice } Output: 4_

_Test: Create a method to calculate total cost Code: Pizza.prototype.totalCost = function (toppingPrice, sizePrice) { totalCost = toppingPrice + sizePrice Output: 10_

## License

_[MIT](https://opensource.org/licenses/MIT) (c) 2021 Araceli Valdovinos_

## Contact Information

_Araceli Valdovinos araceli.valdovinos@outlook.com_
