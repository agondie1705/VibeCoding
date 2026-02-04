const games = [
  {
    title: "Elden Ring: Shadow of the Erdtree",
    date: "21 Junio 2026",
    platform: "PC",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
  },
  {
    title: "GTA VI",
    date: "2026",
    platform: "PlayStation",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6r6k.jpg"
  },
  {
    title: "Fable",
    date: "2025",
    platform: "Xbox",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2w6l.jpg"
  },
  {
    title: "Metroid Prime 4",
    date: "2025",
    platform: "Switch",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3xxv.jpg"
  }
];

const container = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const platformFilter = document.getElementById("platformFilter");
const toggleTheme = document.getElementById("toggleTheme");

function renderGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${game.image}">
      <div class="card-content">
        <h3>${game.title}</h3>
        <p>Fecha: ${game.date}</p>
        <span class="tag">${game.platform}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterGames() {
  const text = searchInput.value.toLowerCase();
  const platform = platformFilter.value;

  const filtered = games.filter(game => {
    const matchesText = game.title.toLowerCase().includes(text);
    const matchesPlatform = platform === "all" || game.platform === platform;
    return matchesText && matchesPlatform;
  });

  renderGames(filtered);
}

searchInput.addEventListener("input", filterGames);
platformFilter.addEventListener("change", filterGames);

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderGames(games);
