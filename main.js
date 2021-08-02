//Arrays 
//1.pnames=["Cheese Pizza","Veggie Pizza","Pepperoni Pizza","Meat Pizza","Margherita Pizza","BBQ Chicken Pizza","Hawiian Pizza","Buffalo Pizza","Supreme Pizza","Works Pizza"]
//2.size=["Large","Medium","Small","One Piecer","Regular","Pizza Kadogo"]
//3.crust=["Crispy","Stuffed","Gluten-Free"]
//4.toppings=["Mushroom","Sausage","Bacon","Extra Cheese","Pineapple","Pepperoni"]

//order display
$(document).ready(function () {
    $("#btnn").click(function () {
        $(".customer").toggle();

        //append
        let name = $("#pname option:selected").val();
        console.log(name);
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let number = $("#number").val();



        //delivery details
        $("#yes").click(function () {
            prompt("Enter location for delivery");
            alert("The delivery fee is 200.Your order has been received and is being processed.Your total amount is;" + (totalBill + 200));
        });
        $("#no").click(function () {
            alert("Your order has been received and is being processed.Your total amount is;" + totalBill);
        });


        //constructor function order
        let order = (name, size, crust, topping, number, totalBill) => {
            return { name, size, crust, topping, number, totalBill };
        };
        //price
        let price;
        let totalBill = 0


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
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Veggie Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Veggie Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Pepperoni Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Meat Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Margherita Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "BBQ Chicken Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Hawaiian Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Buffalo Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        } x
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Supreme Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
            case name = "Works Pizza":
                switch (size) {
                    case size = "Large":
                        price = 1200
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;

                    case size = "Medium":
                        price = 900
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Small":
                        price = 750
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "One Piecer":
                        price = 250
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Regular":
                        price = 650
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                    case size = "Pizza Kadogo":
                        price = 500
                        if (crust === "Crispy") {
                            totalBill = (price * number) + 350;
                        } else if (crust === "Stuffed") {
                            totalBill = (price * number) + 250;
                        } else if (crust === "Gluten-free") {
                            totalBill = (price * number) + 150;
                        }
                        break;
                }
                break;
        }

        switch (toppings) {
            case topping = "Mushroom":
                totalBill = totalBill + 280;
                break;
            case topping = "Sausage":
                totalBill = totalBill + 180;
                break;
            case topping = "Bacon":
                totalBill = totalBill + 280;
                break;
            case topping = "Extra Cheese":
                totalBill = totalBill + 200;
                break;
            case topping = "Pineapple":
                totalBill = totalBill + 150;
                break;
            case topping = "Pepperoni":
                totalBill = totalBill + 250;
                break;


        }


        let newOrder = order(name, size, crust, topping, number, totalBill);
        $('#cart').text(" ");
        $("#cart").append("<br>" + "Pizza :   " + newOrder.name + "<br>" + "Size :   "
            + newOrder.size + "<br>" + "Crust :     "
            + newOrder.crust + "<br>" + "Toppings :     "
            + newOrder.topping + "<br>" + " Number of pizzas :    "
            + newOrder.number + "<br>" + "Total Bill :  "
            + newOrder.totalBill + "<br>");





    });


    this.totalBill = parseInt(totalBill)
    // $(".total").html("totalBill :" + totalBill);
    console.log(totalBill);

});


























