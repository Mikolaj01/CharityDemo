// Login to admin page
// Base code taken from one of the lectures and adapted to suit my website
function login() {

  var uname = "default"
  var pass = "default"
  uname = document.getElementById("loginUname").value;
  pass = document.getElementById("loginPass").value;

  // If both username and passowrd are correct it will go to admin page
  if (uname == "admin" && pass == "pass") {
    alert("You are a Valid adminstrator");

    document.getElementById("login").action = "admin.html"
  } else {
    alert("Wrong account information");
    document.getElementById("loginform").action = "login.html"
  }
}
