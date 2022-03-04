const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("").value; // will insert element when html is ready
  const password = document.querySelector("").value;

  if (email & password) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signup = async () => {};
