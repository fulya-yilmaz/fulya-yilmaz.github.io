//This part is the product list
let items = [
  {
    title: "Shoes",
    description: "Classic everyday shoes designed for comfort and style, perfect for casual outings.",
    image: "/images/item1.jpg",
    price: 10.99,
  },
  {
    title: "Green Dress",
    description: "A soft, flowy green dress that brings elegance and freshness to your wardrobe.",
    image: "/images/item2.jpg",
    price: 15.49,
  },
  {
    title: "Toy Cart",
    description: "Bright yellow toy cart that sparks joy and creativity for little adventurers.",
    image: "/images/item3.jpg",
    price: 7.99,
  },
  {
    title: "Tshirt",
    description: "Comfortable gray T-shirt with a clean design—ideal for everyday wear.",
    image: "/images/item4.jpg",
    price: 12.00,
  },
  {
    title: "Blue Shoes",
    description: "Sporty blue shoes that combine performance and urban style for any occasion.",
    image: "/images/item5.jpg",
    price: 20.00,
  },
  {
    title: "Glasses",
    description: "Stylish and lightweight glasses that add character to your look.",
    image: "/images/item6.jpg",
    price: 5.49,
  },
  {
    title: "Perfume",
    description: "A delicate fragrance with floral and woody notes—elegant and long-lasting.",
    image: "/images/item7.jpg",
    price: 38.99,
  },
  {
    title: "Laptop",
    description: "Compact and efficient laptop, great for daily tasks, browsing, and productivity on the go.",
    image: "/images/item8.jpg",
    price: 14.99,
  },
  {
    title: "Sports Shoes",
    description: "Durable sports shoes designed for movement—ideal for walking, running, or training.",
    image: "/images/item9.jpg",
    price: 11.49,
  }
];

//This function used for creating of product card 
function createItemCard(item) {

    let card = document.createElement('div');
    card.className = 'item-card';

    let img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;

    let title = document.createElement('h3');
    title.textContent = item.title;

    let description = document.createElement('p');
    description.textContent = item.description;

    let price = document.createElement('p');
    price.className= 'item-price'
    price.textContent = `${item.price.toFixed(2)} DKK`;

    let button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.className = 'add-to-cart-button';
    button.onclick = function() {
        addToCart(item);
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

//Get DOM object for product list container
let container = document.getElementById('product-list-container');

//Iterate over product list
items.forEach(item => {
    let itemCard = createItemCard(item);
    container.appendChild(itemCard);
});

//Cart function 
let cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(cart);
    updateCart();
}

function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }

      updateCart();
}
//This part is used for updating the shopping cart
function updateCart() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous cart items
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    
    let total = 0;

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

        let title = document.createElement('h4');
        title.textContent = item.title;

        let price = document.createElement('p');
        price.textContent = `${item.price.toFixed(2)} DKK`;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            removeFromCart(item);
        };

        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(removeButton);

        cartContainer.appendChild(itemDiv);

        total += item.price;
    });
    
    //This part calculates the count of items in shopping-cart
  let cartCount = document.createElement('div');
    cartCount.className = 'count-cart';
    cartCount.innerHTML = `<strong>You have ${cart.length} items in your cart.</strong>`;
    cartContainer.appendChild(cartCount);

    //This part calculates the free shipping
if (total >100) {
  let freeCargo = document.createElement('div');
    freeCargo.className = 'free-cargo';
    freeCargo.innerHTML = `<strong>Free shipping over 100 DKK! </strong>`;
    cartContainer.appendChild(freeCargo);
} 

// This part calculates the total price
    let totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `<strong>Total: ${total.toFixed(2)} DKK</strong>`;
    cartContainer.appendChild(totalDiv);



}

