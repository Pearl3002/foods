var incorrectAttempts = 0;

function showLogin() {
  var loginContainer = document.getElementById("loginContainer");
  loginContainer.style.display = "flex";
}

function showForgotPassword() {
  alert("Forgot password? Please contact the FOOD customer service to retrieve your account.");
  // You can implement the logic to show the password reset form or redirect to a password reset page.
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation here
  // For demonstration purposes, let's assume the username is "admin" and the password is "password"
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // You can redirect to another page or perform any other actions here
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    // Hide the login container
    document.getElementById("loginContainer").style.display = "none";
  } else {
    incorrectAttempts++;
    if (incorrectAttempts === 3) {
      showForgotPassword();
      // Clear the form fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      // Hide the login container
      document.getElementById("loginContainer").style.display = "none";
    } else {
      alert("Invalid username or password. Please try again.");
      // Clear the form fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  }
});