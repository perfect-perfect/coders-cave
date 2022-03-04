const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector("").value.trim();
  const password = document.querySelector("").value.trim();

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

const signup = async (event) => {
  event.preventDefault();

  const userName = dcoument.querySelector("").value;
  const email = document.querySelector("").value;
  const password = document.querySelector("").value;

  if (userName & email & password) {
    const response = await fetch("api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        userName,
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
