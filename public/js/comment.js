async function commentFormHanlder(event) {
  event.preventDefault();

  const comment_text = document.querySelector("").value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        // these are sent to the /api/comments route, where the post route on the backend uses the info to create a new instance of the Comment model
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("").addEventListener("submit", commentFormHanlder);
