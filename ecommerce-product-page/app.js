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
    const img = document.createElement("img");
    img.src = "./images/image-product-1-thumbnail.jpg"; // Replace with your image URL
    img.alt = "Product thumbnail";
    img.classList.add('w-16', 'h-16', 'rounded', 'border-2', 'border-black', 'cart-picture');

    const cartItems = document.getElementById('cart-items');

    // Clear the "Your cart is empty" message
    const emptyMessage = cartItems.querySelector('h3');
    if (emptyMessage) {
        cartItems.removeChild(emptyMessage);
    }

    // Create a container div for the new cart item
    const itemContainer = document.createElement("div");
    itemContainer.classList.add('flex', 'items-center', 'space-x-4', 'mb-4', 'w-full');

    // Append the image to the item container
    itemContainer.appendChild(img);

    // Optionally, add more details to the item container (e.g., product name, price)
    const itemDetails = document.createElement("div");
    itemDetails.classList.add('flex-grow'); // Ensure the details take up remaining space
    const itemName = document.createElement("p");
    itemName.textContent = "Product Name";
    itemName.classList.add('font-bold');
    const itemPrice = document.createElement("p");
    itemPrice.textContent = "$29.99";
    itemPrice.classList.add('text-gray-500');

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
    itemContainer.appendChild(itemDetails);

    // Append the item container to the cart-items div
    cartItems.appendChild(itemContainer);


}

