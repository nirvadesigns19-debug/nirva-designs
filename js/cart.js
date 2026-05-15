const cartBtn =
  document.getElementById(
    "cartBtn"
  );

const closeCart =
  document.getElementById(
    "closeCart"
  );

const cartSidebar =
  document.getElementById(
    "cartSidebar"
  );

const cartItemsContainer =
  document.getElementById(
    "cartItems"
  );

const cartTotal =
  document.getElementById(
    "cartTotal"
  );

const cartCount =
  document.getElementById(
    "cartCount"
  );

const addCartButtons =
  document.querySelectorAll(
    ".add-cart"
  );

let cart =
  JSON.parse(
    localStorage.getItem(
      "nirvaCart"
    )
  ) || [];

/* OPEN CART */

cartBtn.addEventListener(
  "click",
  () => {

    cartSidebar.classList.add(
      "active"
    );

});

/* CLOSE CART */

closeCart.addEventListener(
  "click",
  () => {

    cartSidebar.classList.remove(
      "active"
    );

});

/* ADD TO CART */

addCartButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const name =
        button.dataset.name;

      const price =
        Number(button.dataset.price);

      cart.push({
        name,
        price
      });

      saveCart();
      renderCart();

});

});

/* SAVE */

function saveCart(){

  localStorage.setItem(
    "nirvaCart",
    JSON.stringify(cart)
  );

}

/* RENDER */

function renderCart(){

  cartItemsContainer.innerHTML = "";

  let total = 0;

  if(cart.length === 0){

    cartItemsContainer.innerHTML = `
      <p class="empty-cart">
        Cart is empty
      </p>
    `;

  }

  cart.forEach((item,index) => {

    total += item.price;

    cartItemsContainer.innerHTML += `

      <div class="cart-item">

        <div>

          <h4>${item.name}</h4>

          <p>₹${item.price}</p>

        </div>

        <button
          class="remove-btn"
          onclick="removeItem(${index})">

          Remove

        </button>

      </div>

    `;

  });

  cartTotal.innerText = total;

  cartCount.innerText = cart.length;

}

/* REMOVE */

function removeItem(index){

  cart.splice(index,1);

  saveCart();
  renderCart();

}

renderCart();
