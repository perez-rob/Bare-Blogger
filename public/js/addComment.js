const commentForm = document.createElement("form");
commentForm.setAttribute("id", "comment-form");
commentForm.setAttribute("class", "col s8");
const commentContent = document.createElement("textarea");
commentContent.setAttribute("id", "commentContent");
commentContent.setAttribute("class", "materialize-textarea");
const commentLabel = document.createElement("label");
commentLabel.setAttribute("for", "commentContent");
const commentBtn = document.createElement("button");
commentBtn.setAttribute("id", "commentBtn");
commentBtn.setAttribute("class", "waves-effect waves-light btn");
commentBtn.innerHTML = "Add Comment";

commentForm.appendChild(commentContent);
commentForm.appendChild(commentLabel);
commentForm.appendChild(commentBtn);

const handleShowComment = () => {
  document.getElementById("for-comment-form").appendChild(commentForm);
  document
    .getElementById("comment-form")
    .addEventListener("submit", handleSubmit);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const commentContents = event.target.commentContent.value;
  const postId = document
    .getElementById("for-comment-form")
    .getAttribute("data-postId");

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      content: commentContents,
      post_id: postId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  } else {
    alert("Error: Comment not able to post");
  }
};

document
  .getElementById("commentBtn")
  .addEventListener("click", handleShowComment);
