const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signinButton.addEventListener("click", function() {
    alert("You have successfully signed in!");
    window.location.href = "index.html";
});

signupButton.addEventListener("click", function() {
    alert("You have successfully signed up!");
    window.location.href = "index.html";
});
