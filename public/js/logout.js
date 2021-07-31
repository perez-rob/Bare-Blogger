console.log("testing");

const handleLogout = async () => {
  console.log("HELLO???");
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    // REMOVE THIS??
  } else {
    alert("Failed to Logout");
  }
};

const testFn = () => {
  console.log("WTF");
};

document.getElementById("test").addEventListener("click", handleLogout);

document.getElementById("logout").addEventListener("click", handleLogout);
