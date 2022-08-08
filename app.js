'use strict'
const body =document.getElementsByTagName('body');
let counter=1;
const FoodType=[];
function Food (FoodName,Type,Price){
this.FoodID=0;
this.FoodName=FoodName;
this.Type=Type;
this.Price=Price;

this.uniqNum=function(){
    this.FoodID=counter;
    counter++;
}


FoodType.push(this);
}
Food.prototype.form=function(){
    this.uniqNum();
    //Retrive Data From form And Print On Table
        var list1 = [];
		var list2 = [];
		var list3 = [];
        var list4 = [];
		

		var n = 1;
		var x = 0;
        
		

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);
            list1[x] = this.FoodID;
			list2[x] = document.getElementById("name").value;
			list3[x] = document.getElementById("category").value;
			list4[x] = document.getElementById("price").value;
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
			

			n++;
			x++;
            
		}

	


  
//event
let form = document.getElementById("form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let name=event.target.name.value;
    let price=event.target.price.value;
   let Type=document.querySelector('#category').value;
    console.log(name,Type,price);

    const newFood=new Food(name,Type,price);
    newFood.form();
     console.log(FoodType);
}
