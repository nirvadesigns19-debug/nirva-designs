import { auth }
from "./firebase.js";

import {
  createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const signupForm =
  document.getElementById(
    "signupForm"
  );


signupForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const name =
      document.getElementById(
        "name"
      ).value;

    const email =
      document.getElementById(
        "email"
      ).value;

    const password =
      document.getElementById(
        "password"
      ).value;

    try{

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      localStorage.setItem(
        "nirvaUser",
        JSON.stringify({
          name,
          email
        })
      );

      alert(
        "Account created successfully!"
      );

      window.location.href =
        "login.html";

    }

    catch(error){

      alert(error.message);

    }

});
