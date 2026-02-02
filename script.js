// Новости клуба
const newsItems = [
  {title: "Спартак выиграл матч с Рубином 2:1!", date: "02.02.2026"},
  {title: "Следующий матч против Зенита через 3 дня", date: "05.02.2026"},
  {title: "Главный тренер объявил стартовый состав", date: "01.02.2026"}
];

// Функция отображения новостей
function showNews() {
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = "<h2>Новости клуба</h2>";
  newsItems.forEach(news => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${news.date}:</strong> ${news.title}`;
    newsDiv.appendChild(p);
  });
}

// Вызываем сразу
showNews();
