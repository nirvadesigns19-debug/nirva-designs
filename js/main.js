/* CHECK LOGIN */

const isLoggedIn =
  localStorage.getItem(
    "isLoggedIn"
  );

if(!isLoggedIn){

  window.location.href =
    "login.html";

}

/* SHOW USER */

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
  navUser.innerText = savedUser.name;
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

    alert(
      "Custom order submitted successfully!"
    );

    giftForm.reset();

});
