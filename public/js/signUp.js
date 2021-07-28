const handleSignup = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const username = event.target.username.value;
  const password = event.target.password.value;
  const passwordConf = event.target.passwordConf.value;

  if (password !== passwordConf) {
    alert("Password and Confirm Password must match");
    return;
  }

  fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify({ name, email, username, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      // FIND A BETTER ERROR HANDLING MESSAGE/MEANS
      const resMsg = await response.json();
      console.log(resMsg);
      if (response.ok) {
        document.location.replace("/dashboard");
      } else if (
        resMsg.errors[0].message === "Validation len on password failed"
      ) {
        alert("Password must be at least 8 characters");
      } else if (resMsg.errors[0].message === "user.username must be unique") {
        alert("Someone already has that username, please pick another one");
      } else if (resMsg.errors[0].message === "user.email must be unique") {
        alert("This email address already has an account");
      } else {
        alert("Error Unknown");
      }
    })
    .catch((err) => console.log(err));
};

document.getElementById("signup-form").addEventListener("submit", handleSignup);
