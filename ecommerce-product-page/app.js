let value = 0;


function increment() {
  const input = document.getElementById('addSubValue');
  value = parseInt(input.value, 10);
  value++;
  input.value = value;
}

function decrement() {
  const input = document.getElementById('addSubValue');
  value = parseInt(input.value, 10);
  if (value > 0) {
    value--;
  }
  input.value = value;
}

function toggleCart() {
  const cart = document.getElementById('whole-cart');
  cart.classList.toggle('hidden');
}

function toAdd() {
  const input = document.getElementById('addSubValue');
  value = parseInt(input.value, 10);
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = `
    <div class="item-container flex justify-between items-center">
      <img src="./images/image-product-1-thumbnail.jpg" alt="cart image" class="cart-picture">
      <div class="ml-2">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${value} <span class="font-bold">$${125 * value}.00</span></p>
      </div>
      <button class="remove-btn" onclick="removeItem(this)">
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h2.5c.416 0 .75.334.75.75v.875h8V1.75c0-.416.334-.75.75-.75h2.5c.416 0 .75.334.75.75v.875h.25a.75.75 0 0 1 .75.75v.875H0V3.375a.75.75 0 0 1 .75-.75H1zm3.625 0h7.75v-.875H3.625v.875zm10.5 0v-.875a.75.75 0 0 1 .75-.75h1.375c.416 0 .75.334.75.75v.875h-2.875zm-1.875.875h1.75v12.5H1.75V3.5h1.75v11.25h7.75V3.5zm-4.875 10a.75.75 0 0 1-.75-.75V6.875a.75.75 0 1 1 1.5 0V13a.75.75 0 0 1-.75.75z" fill="#C3CAD9" fill-rule="nonzero"/>
        </svg>
      </button>
      
    </div>
    <div>
      <button class="w-80 flex items-center justify-center flex-grow ml-1 py-3 px-6 mt-6 bg-customorange text-black rounded-md">Checkout</button>
      </div>`;
}

function removeItem(button) {
    const itemContainer = button.closest('.item-container');
    const cartItemsContainer = document.getElementById('cart-items');
    
    itemContainer.remove();
  
    // Check if there are any items left in the cart
    if (cartItemsContainer.children.length === 0) {
      cartItemsContainer.innerHTML = '<h3 class="flex justify-center items-center h-full text-gray-400">Your cart is empty.</h3>';
    }
  
    // Remove the checkout button if it exists
    const checkoutButton = document.querySelector('.w-80.flex.items-center.justify-center.flex-grow.ml-1.py-3.px-6.mt-6.bg-customorange.text-black.rounded-md');
    if (checkoutButton) {
      checkoutButton.remove();
    }
  }
  

document.querySelectorAll('#four-images img')
Image.addEventListener("click",function(){
  fullImage(this.src);
})

function fullImage(src){
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("fullImage");
  
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal(){
  let modal = document.getElementById("imageModal");
  modal.style.display = "none";
}