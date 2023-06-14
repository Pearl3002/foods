//add to cart
// Get necessary elements
const addToCartButton = document.querySelector('.add-to-cart');
const cartItems = document.querySelector('.menu-items');

// Add event listener to "Add Item" button
addToCartButton.addEventListener('click', addToCart);

// Function to add an item to the cart
function addToCart() {
  // Create a new list item for the cart
  const listItem = document.createElement('li');
  listItem.textContent = 'Item Name'; // Replace 'Item Name' with the actual item name

  // Append the new list item to the cart items list
  cartItems.appendChild(listItem);
}
