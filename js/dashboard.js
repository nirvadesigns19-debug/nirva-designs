import { auth } from "./firebase.js";

import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* CHECK LOGIN */

const isLoggedIn =
  localStorage.getItem(
    "isLoggedIn"
  );

if(!isLoggedIn){

  window.location.href =
    "login.html";

}

/* GET USER */

const savedUser =
  JSON.parse(
    localStorage.getItem(
      "nirvaUser"
    )
  );

/* SHOW NAME */

const userName =
  document.getElementById(
    "userName"
  );

userName.innerText =
  savedUser.name;

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


onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    console.log("User logged in:", user.email);
  }
});
