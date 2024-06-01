let increments = document.getElementById("increment")
let decrements = document.getElementById("decrement")
let input = document.getElementById("addSubValue")
let cartIcon = document.getElementById("cart-image")
let cart = document.getElementById("whole-cart")


function increment(){
    if(Number(input.value)>-1){
        input.value = Number(input.value)+1;
    }
}

function decrement(){
    if(Number(input.value)>0){
        input.value = Number(input.value)-1;
    }
}

function addToCart(){
    if (Number(input.value) > 0){
        console.log("added to cart")
        
    }
    else{
        console.log("Please add a quantity")
    
    }
}

function toggleCart(){
    cart.classList.toggle("hidden");
    console.log("cart")
}

function toAdd(){
    console.log("add")
    console.log("yayay")
}
