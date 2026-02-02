// Примеры новостей
const newsItems = [
  "Спартак выиграл матч с Рубином 2:1!",
  "Следующий матч против Зенита через 3 дня",
  "Главный тренер объявил стартовый состав"
];

// Добавляем новости на страницу
const newsDiv = document.getElementById("news");
newsItems.forEach(news => {
  const p = document.createElement("p");
  p.textContent = news;
  newsDiv.appendChild(p);
});

// Примеры матчей для прогнозов
const matches = [
  {home: "Спартак", away: "Локомотив"},
  {home: "Спартак", away: "Зенит"},
  {home: "Спартак", away: "ЦСКА"}
];

// Добавляем карточки матчей
const predictionsDiv = document.getElementById("predictions");

matches.forEach(match => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${match.home} vs ${match.away}</p>
    <button onclick="alert('Вы выбрали Победа Спартака')">Победа Спартака</button>
    <button onclick="alert('Вы выбрали Ничья')">Ничья</button>
    <button onclick="alert('Вы выбрали Победа соперника')">Победа соперника</button>
  `;
  predictionsDiv.appendChild(div);
});
