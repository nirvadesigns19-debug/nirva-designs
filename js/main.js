/* LOGIN CHECK */

const isLoggedIn =
  localStorage.getItem(
    "isLoggedIn"
  );

if(!isLoggedIn){

  window.location.href =
    "login.html";

}

/* USER */

const savedUser =
  JSON.parse(
    localStorage.getItem(
      "nirvaUser"
    )
  );

const navUser =
  document.getElementById(
    "navUser"
  );

if(savedUser){

  navUser.innerText =
    savedUser.name;

}

/* LOGOUT */

const logoutBtn =
  document.getElementById(
    "logoutBtn"
  );

logoutBtn.addEventListener(
  "click",
  () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.href =
      "login.html";

});

/* CUSTOM FORM */

const giftForm =
  document.getElementById(
    "giftForm"
  );

giftForm.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    showToast(
      "✨ Custom order submitted successfully"
    );

    giftForm.reset();

});

/* TOAST */

function showToast(message){

  const toast =
    document.createElement("div");

  toast.classList.add(
    "toast"
  );

  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.classList.add("show");

  },100);

  setTimeout(() => {

    toast.remove();

  },3000);

    }
