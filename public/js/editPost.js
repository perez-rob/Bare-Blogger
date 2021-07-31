const handleSubmit = async (event) => {
  event.preventDefault();
  const pname = event.target.pName.value;
  const pDesc = event.target.description.value;
  const postId = event.currentTarget.getAttribute("data-targetID");

  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title: pname,
      content: pDesc,
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
