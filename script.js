const games = [
  {
    title: "Elden Ring: Shadow of the Erdtree",
    date: "2026-06-21",
    platform: "PC",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
  },
  {
    title: "GTA VI",
    date: "2026-01-01",
    platform: "PlayStation",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6r6k.jpg"
  },
  {
    title: "Fable",
    date: "2025-09-01",
    platform: "Xbox",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2w6l.jpg"
  },
  {
    title: "Metroid Prime 4",
    date: "2025-05-01",
    platform: "Switch",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3xxv.jpg"
  }
];

const container = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");
const platformFilter = document.getElementById("platformFilter");
const toggleTheme = document.getElementById("toggleTheme");
const sortBtn = document.getElementById("sortDate");

let sortAsc = true;

function renderGames(list) {
  container.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "card animate";

    card.innerHTML = `
      <img src="${game.image}">
      <div class="card-content">
        <h3>${game.title}</h3>
        <p>Fecha: ${formatDate(game.date)}</p>
        <span class="tag">${game.platform}</span>
      </div>
    `;

    container.appendChild(card);

    // Trigger animation
    setTimeout(() => card.classList.add("show"), 50);
  });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES");
}

function filterGames() {
  const text = searchInput.value.toLowerCase();
  const platform = platformFilter.value;

  let filtered = games.filter(game => {
    const matchesText = game.title.toLowerCase().includes(text);
    const matchesPlatform = platform === "all" || game.platform === platform;
    return matchesText && matchesPlatform;
  });

  renderGames(filtered);
}

function sortByDate() {
  games.sort((a, b) => {
    return sortAsc
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  sortAsc = !sortAsc;
  filterGames();
}

searchInput.addEventListener("input", filterGames);
platformFilter.addEventListener("change", filterGames);
sortBtn.addEventListener("click", sortByDate);

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderGames(games);
