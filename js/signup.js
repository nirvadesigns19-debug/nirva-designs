const signupForm =
  document.getElementById("signupForm");

signupForm.addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    const name =
      document.getElementById(
        "signupName"
      ).value;

    const email =
      document.getElementById(
        "signupEmail"
      ).value;

    const password =
      document.getElementById(
        "signupPassword"
      ).value;

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "nirvaUser",
      JSON.stringify(user)
    );

    alert(
      "Account created successfully!"
    );

    window.location.href =
      "login.html";

});
