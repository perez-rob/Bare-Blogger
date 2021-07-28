const handleDelete = async (event) => {
  const postId = event.currentTarget.getAttribute("data-postId");

  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  response.ok
    ? document.location.replace("/dashboard")
    : alert("Failed to Delete");
};

document.querySelectorAll(".deleteBtn").forEach((btn) => {
  btn.addEventListener("click", handleDelete);
});
