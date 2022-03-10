const submitChatMessage = async (event) => {
  event.preventDefault();

  const message = document.querySelector(".add-comment").value;

  const response = await fetch("api/chat/", {
    type: "POST",
    body: JSON.stringify({
      message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
