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

async function loadFireworks() {
      await tsParticles.load("tsparticles", {
        fullScreen: {
          enable: false, // Канвас занимает только определённый контейнер
          zIndex: 9999
        },
        particles: {
          number: { value: 0 }, // Частицы будут созданы только при взрыве
          shape: { type: "circle" },
          color: { value: ["#FF0000", "#FF8000", "#FFFF00", "#00FF00", "#0000FF", "#8000FF"] },
          size: { value: 3 },
          opacity: { value: 1 },
          move: { enable: true, speed: 6, direction: "none", random: true }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: { enable: true, mode: "push" }, // Для наглядности, можно кликать в пустом месте
            resize: true
          },
          modes: {
            push: {
              quantity: 10 // Количество частиц при клике
            }
          }
        },
        detectRetina: true,
        emitters: {
          direction: "top",
          particles: { size: { value: 4 } },
          rate: { delay: 0.1, quantity: 1 },
          size: { width: 100, height: 10 },
          position: { x: 50, y: 100 } // Позиция фейерверка
        }
      });
    }

if (count === 100) {
        await loadFireworks(); // Запускаем фейерверк
        alert('Поздравляем! 🎉 Вы сделали 100 кликов!');
      }
    });

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
