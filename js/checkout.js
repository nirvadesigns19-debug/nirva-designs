const checkoutItems =
  document.getElementById(
    "checkoutItems"
  );

const checkoutTotal =
  document.getElementById(
    "checkoutTotal"
  );

const checkoutForm =
  document.getElementById(
    "checkoutForm"
  );

let cart =
  JSON.parse(
    localStorage.getItem(
      "nirvaCart"
    )
  ) || [];

/* SHOW ITEMS */

function renderCheckout(){

  let total = 0;

  checkoutItems.innerHTML = "";

  cart.forEach(item => {

    total += item.price;

    checkoutItems.innerHTML += `

      <div class="checkout-item">

        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

      </div>

    `;

  });

  checkoutTotal.innerText = total;

}

renderCheckout();

/* PLACE ORDER */

checkoutForm.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    const name =
      document.getElementById(
        "customerName"
      ).value;

    const phone =
      document.getElementById(
        "customerPhone"
      ).value;

    const address =
      document.getElementById(
        "customerAddress"
      ).value;

    const city =
      document.getElementById(
        "customerCity"
      ).value;

    const pincode =
      document.getElementById(
        "customerPincode"
      ).value;

    let orderText =
      `🛍️ NEW ORDER%0A%0A`;

    cart.forEach(item => {

      orderText +=
        `• ${item.name} - ₹${item.price}%0A`;

    });

    orderText +=
      `%0ATotal: ₹${checkoutTotal.innerText}%0A%0A`;

    orderText +=
      `Customer Name: ${name}%0A`;

    orderText +=
      `Phone: ${phone}%0A`;

    orderText +=
      `Address: ${address}%0A`;

    orderText +=
      `City: ${city}%0A`;

    orderText +=
      `Pincode: ${pincode}`;

    const whatsappNumber =
      "91YOURNUMBER";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${orderText}`,
      "_blank"
    );

});
