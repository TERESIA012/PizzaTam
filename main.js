//Arrays 
//1.pnames=["Cheese Pizza","Veggie Pizza","Pepperoni Pizza","Meat Pizza","Margherita Pizza","BBQ Chicken Pizza","Hawiian Pizza","Buffalo Pizza","Supreme Pizza","Works Pizza"]
//2.size=["Large","Medium","Small","One Piecer","Regular","Pizza Kadogo"]
//3.crust=["Crispy","Stuffed","Gluten-Free"]
//4.toppings=["Mushroom","Sausage","Bacon","Extra Cheese","Pineapple","Pepperoni"]

//order display
$(document).ready(function () {
    $("#btnn").click(function () {
        $(".customer").toggle();
    });
    //append
    let name = $("#pname option:selected").val();
    console.log(name);
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let toppings = $("#toppings option:selected").val();
    let number = $("#number").val();
    $(".p").append("Pizza :" + name + "<br>");
    $(".s").append("Pizza Size:" + size + "<br>");
    $(".t").append("Topping:" + crust + "<br>");
    $(".c").append("Crust:" + toppings + "<br>");
    $(".n").append("Number Of pizza:" + number + "<br>");
    //delivery details
    $("#yes").click(function () {
        prompt("Enter location for delivery");
        alert("The delivery fee is 200.Your order has been received and is being processed.")
    });
    flavourChange = function () {
        console.log("Flavour changing")
        let name = $("#pname option:selected").val();
        console.log(name);
        $(".p").html("Pizza :" + name + "<br>");

    }
    sizeChange = function () {
        console.log("Size changing")
        let size = $("#size option:selected").val();
        console.log(size);
        $(".s").html("Pizza Size:" + size + "<br>");


    }
    crustChange = function () {
        console.log("Crust changing")
        let crust = $("#crust option:selected").val();
        console.log(crust);
        $(".c").html("Crust:" + crust + "<br>");


    }
    toppingsChange = function () {
        console.log("Toppings changing")
        let toppings = $("#toppings option:selected").val();
        console.log(size);
        $(".t").html("Topping:" + toppings + "<br>");


    }
    numberChange = function () {
        console.log("Number changing")
        let number = $("#number").val();
        console.log(number);
        $(".n").html("Number Of pizza:" + number + "<br>");
    }
    //constructor function order
    let order = (name, size, crust, topping, number, total) => {
        return { name, size, crust, topping, number, total };
    };
    //price
    let price,totalBill;
    switch (name) {
        case name = "Cheese Pizza":
            switch (size) {
                case size = "Large":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }
                    break;
                case size = "Medium":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }
                    break;
                case size = "Small":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }
                    break;
                case size = "One Piecer":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }
                    break;
                case size = "Regular":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }
                    break;
                case size = "Pizza Kadogo":
                    price = 1200
                    if (crust === "Crispy") {
                        totalBill = (price * number) + 350;
                    } else if (crust === "Stuffed") {
                        totalBill = (price * number) + 250;
                    } else if (crust === "Gluten-free") {
                        totalBill = (price * number) + 150;
                    } else {
                        totalBill = (price * number) + 280;
                    }

            }
    }



});





//constructor functions

// function Order(pname,size,crust,toppings,){
// this.pname=pname
// this.size=size
// this.crust=crust
// this.toppings=toppings

// Order.prototype.fullOrder=function(){
//     return this.pname + "of size "  + this.size +"with a crust of" + this.crust  + "and topping of" + this.toppings;

// };

// };

// function Bill(number,sizePrice,crustPrice,toppingsPrice,deliveryFee){
//     this.number=number
//     this.sizePrice=sizePrice
//     this.crustPrice=crustPrice
//     this.toppingsPrice=toppingsPrice
//     this.delivery=deliveryFee

// Total.prototype.allBill=function(){
//     return number *(sizePrice + crustPrice + toppingsPrice)+deliveryFee
// };
// };




















