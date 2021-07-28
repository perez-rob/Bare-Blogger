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

  fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, username, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then(async (response) => {
      // FIND A BETTER ERROR HANDLING MESSAGE/MEANS
      const resMsg = await response.json();
      if (response.ok) {
        document.location.replace("/dashboard");
      } else if (resMsg.message === "user") {
        alert("No User with those credentials");
      } else if (resMsg.message === "password") {
        alert("incorrect password");
      } else {
        alert("Error Unknown");
      }
    })
    .catch((err) => console.log(err));
};

document.getElementById("signup-form").addEventListener("submit", handleSignup);
