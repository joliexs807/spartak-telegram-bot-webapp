// Примеры матчей
const matches = [{home: "Спартак", away: "Локомотив"}];

// Добавляем карточки матчей
matches.forEach(match => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${match.home} vs ${match.away}</p>
    <button onclick="alert('Вы выбрали П1')">Победа Спартака</button>
    <button onclick="alert('Вы выбрали Н')">Ничья</button>
    <button onclick="alert('Вы выбрали П2')">Победа Локомотива</button>
  `;
  document.getElementById("predictions").appendChild(div);
});

// Добавляем пример новостей
const newsDiv = document.getElementById("news");
const newsItems = ["Спартак выиграл матч!", "Следующий матч через 3 дня"];
newsItems.forEach(news => {
  const p = document.createElement("p");
  p.textContent = news;
  newsDiv.appendChild(p);
});
