const apiKey = "8cd14927b4cb4879b174cabe1c24f270";
const spanClasses = [`grid-col-span-1`, `grid-col-span-2`, `grid-col-span-3`];
const categories = [
  "category=",
  [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
];
const colorClasses = [
  "bg-purple",
  "bg-blue",
  "bg-green",
  "bg-yellow",
  "bg-red",
  "bg-orange",
  "bg-teal",
];
const searchBy = [
  "country=",
  ["country", "sources", "category", "top-headlines"],
];
const baseUrl = "https://newsapi.org/v2/everything?";
const apiDelimiter = "&";

const chooseRandomClass = () =>
  spanClasses[Math.floor(Math.random() * spanClasses.length)];
const chooseRandomColor = () =>
  colorClasses[Math.floor(Math.random() * colorClasses.length)];

const getUserInput = () => document.querySelector(".search").value;
const createUrl = (url, delimiter, ...parameters) =>
  parameters.forEach((parameter) => (url += `${delimiter}${parameter}`));

const pullNews = function () {
  let newsContainer = document.querySelector(".news-container");
  newsContainer.innerHTML = "";
  var url = `https://newsapi.org/v2/everything?q=tech&apiKey=8cd14927b4cb4879b174cabe1c24f270`;
  console.log(url);
  fetch(url).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
        for (var i = 0; i <= 20; i++) {
          var html = `
            <div class='grid-item'>
                <h2>${data.articles[i].title}</h2>
                <p class='author'>by ${data.articles[i].author}</p>
                <p class='site'>Source: ${data.articles[i].source["name"]}
                <p class='content'>${data.articles[i].description}</p>
                <a href='${data.articles[i].url}' target='_blank'>Source Link</a>
            </div> `;
          newsContainer.innerHTML += html;
        }
      });
    }
  });
};

window.onload = pullNews();
