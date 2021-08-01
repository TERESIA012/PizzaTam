//Arrays 
//1.pnames=["Cheese Pizza","Veggie Pizza","Pepperoni Pizza","Meat Pizza","Margherita Pizza","BBQ Chicken Pizza","Hawiian Pizza","Buffalo Pizza","Supreme Pizza","Works Pizza"]
//2.size=["Large","Medium","Small","One Piecer","Regular","Pizza Kadogo"]
//3.crust=["Crispy","Stuffed","Gluten-Free"]
//4.toppings=["Mushroom","Sausage","Bacon","Extra Cheese","Pineapple","Pepperoni"]

//constructor function

function Bill(pname,size,crust,toppings,){
this.pname=pname
this.size=size
this.crust=crust
this.toppings=toppings

Bill.prototype.fullBill=function(){
    return this.pname + "of size "  + this.size +"with a crust of" + this.crust  + "and topping of" + this.toppings;
};

};


















