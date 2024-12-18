// Telegram WebApp API
let tg = window.Telegram.WebApp;
tg.expand();

let count = 0;
let nextMilestone = 10; 
const button = document.getElementById('clicker-btn');
const counterDisplay = document.getElementById('counter');
const telegramId = tg.initDataUnsafe?.user?.id || "guest";

// confetti("tsparticles", {
//   /**
//    * @deprecated use count property instead
//    */
//   particleCount: 50,
//   /**
//    * @deprecated use position property instead
//    */
//   origin: {
//     x: 0.5,
//     y: 0.5,
//   },
//   //------------------------------------------
//   angle: 90,
  
//   position: {
//     x: 50,
//     y: 50,
//   },
//   spread: 45,
//   startVelocity: 45,
//   decay: 0.9,
//   gravity: 1,
//   drift: 0,
//   ticks: 200,
//   colors: ["#ffffff", "#ff0000"],
//   shapes: ["square", "circle"],
//   scalar: 1,
//   zIndex: 100,
//   disableForReducedMotion: true,
// });

function showFireworks() {
  return new Promise((resolve) => {
    (async () => {
      await confetti({

        spread: 1000,
        particleCount: 500,
        angle: 90,
        colors: ["#ffffff", "#000000"],
        shapes: ["square", "heart"]
      });
      resolve();
    })();
  })
  .then(() => console.log("Фейерверки запущены!"))
  .catch((error) => console.error("Ошибка при запуске фейерверков:", error));
}

const vibrate = () => {
  window.navigator.vibrate([10]);
  console.log("вибрация");
}


button.addEventListener('click', async () => {
  count++;
  counterDisplay.innerText = `${count} кликов`;

  // // Обновление данных на сервере
  // await fetch('https://your-server.com/update', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ telegramId, clicks: count })
  // });  

  if (count === nextMilestone) {
    showFireworks();
    alert(`Поздравляем! 🎆 Вы достигли ${count} кликов!`);

    // Обновляем следующее контрольное число (умножаем на 10)
    nextMilestone *= 10;
  }
});

