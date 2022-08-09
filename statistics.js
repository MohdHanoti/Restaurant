 'use strict';



let table = document.getElementById("show");
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

  //Retrive Data From form And Print On Table
  let newRow = document.createElement("tr");
  table.appendChild(newRow);

  let newId = document.createElement("td");
  newId.textContent = this.FoodID;
  newRow.appendChild(newId);

  let newName = document.createElement("td");
  newName.textContent = this.FoodName;
  newRow.appendChild(newName);

  let newType = document.createElement("td");
  newType.textContent = this.Type;
  newRow.appendChild(newType);

  let newPrice = document.createElement("td");
  newPrice.textContent = this.Price;
  newRow.appendChild(newPrice);
};

function getData(){
let retrievedData=localStorage.getItem("food");
let arrayData = JSON.parse(retrievedData);
if (arrayData != null){
    for(let i=0;i<arrayData.length;i++){
        new Food(arrayData[i].FoodName,arrayData[i].Type,arrayData[i].Price);
    }
}

for (let i=0;i<FoodType.length;i++){
    FoodType[i].form();
}
}
getData();


