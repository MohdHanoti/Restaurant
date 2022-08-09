"use strict";
const body = document.getElementsByTagName("body");
//
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let table = document.getElementById("show");


//
let counter = 1;
const FoodType = [];
function Food(FoodName, Type, Price) {
  this.FoodID = 0;
  this.FoodName = FoodName;
  this.Type = Type;
  this.Price = Price;

  this.uniqNum = function () {
    this.FoodID = counter;
    counter++;
  };

  FoodType.push(this);
}
Food.prototype.form = function () {
  this.uniqNum();

};

//event
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let price = event.target.price.value;
  let Type = document.querySelector("#category").value;
  console.log(name, Type, price);

  const newFood = new Food(name, Type, price);
  newFood.form();
  console.log(FoodType);
  saveData(FoodType);
}

function saveData(data){
	let stringObj =JSON.stringify(data);
	localStorage.setItem("food",stringObj);
}

