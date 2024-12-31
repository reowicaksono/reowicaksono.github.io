
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = targetDate - currentTime;

  if (timeDifference <= 0) {
    clearInterval(timerInterval); 
    showCelebration(); 
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function showCelebration() {
  document.querySelector('.countdown-container').classList.add('hidden'); 
  const celebrationElement = document.getElementById('celebration');
  celebrationElement.classList.remove('hidden'); 
  celebrationElement.classList.add('show');
  const music = document.getElementById('celebration-music');
  music.play().catch((error) => {
    console.error("Autoplay dicegah oleh browser: ", error);
    alert("Klik di mana saja di layar untuk memulai musik.");
    document.body.addEventListener('click', () => {
      music.play();
    }, { once: true });
  });
}

document.getElementById('celebration').classList.add('hidden');

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
