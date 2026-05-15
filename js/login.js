import { auth }
from "./firebase.js";

import {
  signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const loginForm =
  document.getElementById(
    "loginForm"
  );


loginForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const email =
      document.getElementById(
        "loginEmail"
      ).value;

    const password =
      document.getElementById(
        "loginPassword"
      ).value;

    try{

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      localStorage.setItem(
        "isLoggedIn",
        true
      );

      alert(
        "Login successful!"
      );

      window.location.href =
        "dashboard.html";

    }

    catch(error){

      alert(error.message);

      console.log(error);

    }

});
