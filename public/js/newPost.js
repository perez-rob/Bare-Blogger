const handleSubmit = async (event) => {
  event.preventDefault();
  const pname = event.target.pName.value;
  const pDesc = event.target.description.value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: pname,
      description: pDesc,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    event.target.pName.value = "";
    event.target.description.value = "";
    document.location.replace("/dashboard");
  } else {
    alert("Error posting");
  }
};

document.getElementById("post-form").addEventListener("submit", handleSubmit);
