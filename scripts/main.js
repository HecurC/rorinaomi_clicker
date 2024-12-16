// Telegram WebApp API инициализация
let tg = window.Telegram.WebApp;
tg.expand(); // Полный экран

let count = 0;
const button = document.getElementById('clicker-btn');
const counterDisplay = document.getElementById('counter');

// Telegram ID пользователя
const telegramId = tg.initDataUnsafe?.user?.id || "guest";

// Обработчик кликов
button.addEventListener('click', async () => {
  count++;
  counterDisplay.innerText = `${count} кликов`;

  // Отправка данных на сервер
  await fetch('https://your-server.com/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ telegramId, clicks: count })
  });

  if (navigator.vibrate) {
    navigator.vibrate(50); // Вибрация на телефоне
  }
});
