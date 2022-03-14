const welcomePhrases = ["Welcome"];

setInterval(() => {
  const welcomeContainer = document.querySelector(".welcome-container");
  welcomeContainer.innerHTML = `<h1 class="welcome__text">${
    welcomePhrases[Math.floor(Math.random() * welcomePhrases.length)]
  }</h1>`;
}, 4000);
