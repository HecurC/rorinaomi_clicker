// Telegram WebApp API 
let tg = window.Telegram.WebApp;
tg.expand();

let count = 0;
const button = document.getElementById('clicker-btn');
const counterDisplay = document.getElementById('counter');

const telegramId = tg.initDataUnsafe?.user?.id || "guest";

button.addEventListener('click', async () => {
  count++;
  counterDisplay.innerText = `${count} кликов`;


  await fetch('https://your-server.com/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ telegramId, clicks: count })
  });

  if (navigator.vibrate) {
    navigator.vibrate(50); 
  }
});
