const loginForm =
  document.getElementById("loginForm");

loginForm.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    const email =
      document.querySelector(
        'input[type="email"]'
      ).value;

    const password =
      document.querySelector(
        'input[type="password"]'
      ).value;

    const savedUser =
      JSON.parse(
        localStorage.getItem(
          "nirvaUser"
        )
      );

    /* CHECK ACCOUNT */

    if(!savedUser){

      alert(
        "No account found!"
      );

      return;
    }

    /* VALIDATE LOGIN */

    if(
      email === savedUser.email &&
      password === savedUser.password
    ){

      localStorage.setItem(
        "isLoggedIn",
        true
      );

      alert(
        "Login successful!"
      );

      window.location.href =
        "dashboard.html";

    } else {

      alert(
        "Invalid email or password"
      );

    }

});
