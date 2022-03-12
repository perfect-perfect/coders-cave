// Get search term from search box,
// send in GET request
// Set up get route that will query the post model. Do so in home-routes.js
// Render the data into the homepage template

const searchBox = document.querySelector(".search-box");

const search = async (event) => {
  event.preventDefault();
  const searchTerm = searchBox.value;

  // When you click submit, sends a POST request with body to /search. Need to set up /search route on backend
  // This is creating a bad request. Not a server-side error
  await fetch("/search", {
    method: "POST",
    body: {
      searchTerm,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

document.querySelector(".search-btn").addEventListener("click", search);
