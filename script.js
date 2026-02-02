// === Новости клуба ===
const newsItems = [
  {title: "Спартак выиграл матч с Рубином 2:1!", date: "02.02.2026"},
  {title: "Следующий матч против Зенита через 3 дня", date: "05.02.2026"},
  {title: "Главный тренер объявил стартовый состав", date: "01.02.2026"}
];

function showNews() {
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = "<h2>Новости клуба</h2>";
  newsItems.forEach(news => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${news.date}:</strong> ${news.title}`;
    newsDiv.appendChild(p);
  });
}
showNews();

// === Прогнозы на матчи ===
const matches = [
  {home: "Спартак", away: "Локомотив"},
  {home: "Спартак", away: "Зенит"},
  {home: "Спартак", away: "ЦСКА"}
];

let userScore = 0;
const scoreDiv = document.getElementById("score");

function showMatches() {
  const predictionsDiv = document.getElementById("predictions");
  predictionsDiv.innerHTML = "<h2>Прогнозы на матчи</h2>";

  matches.forEach((match, index) => {
    const div = document.createElement("div");
    div.className = "match-card";
    div.innerHTML = `
      <p>${match.home} vs ${match.away}</p>
      <button onclick="choosePrediction(${index}, 'Победа Спартака')">Победа Спартака</button>
      <button onclick="choosePrediction(${index}, 'Ничья')">Ничья</button>
      <button onclick="choosePrediction(${index}, 'Победа соперника')">Победа соперника</button>
    `;
    predictionsDiv.appendChild(div);
  });
}

function choosePrediction(matchIndex, choice) {
  // Для примера — победа Спартака даёт 1 очко
  if (choice === "Победа Спартака") userScore += 1;
  scoreDiv.innerHTML = `<strong>Ваши очки: ${userScore}</strong>`;
  alert(`Вы выбрали для матча ${matches[matchIndex].home} vs ${matches[matchIndex].away}: ${choice}`);
}
showMatches();

// === Голосование за MVP ===
const mvpPlayers = ["Ари", "Понсе", "Зе Луиш"];
const mvpDiv = document.getElementById("mvp");
mvpPlayers.forEach(player => {
  const btn = document.createElement("button");
  btn.textContent = player;
  btn.onclick = () => alert(`Вы выбрали MVP: ${player}`);
  mvpDiv.appendChild(btn);
});

// === Мини-игра: угадай счёт ===
const guessDiv = document.getElementById("guess");
function submitGuess() {
  const input = document.getElementById("scoreInput").value;
  alert(`Вы предположили счёт: ${input}`);
}
