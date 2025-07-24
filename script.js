// Lluvia de corazoncitos
const heartRain = document.querySelector('.heart-rain');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  heart.style.opacity = Math.random();
  heart.innerHTML = '💖';
  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Animar el botón de sorpresa
const surpriseBtn = document.getElementById('surpriseBtn');
const game = document.getElementById('game');

surpriseBtn.addEventListener('click', () => {
  if (game.style.display === 'none') {
    game.style.display = 'block';
    surpriseBtn.textContent = '¡Disfruta la sorpresa! 🌙';
  } else {
    game.style.display = 'none';
    surpriseBtn.textContent = 'Sorpresa para ti mi lunita 🌙';
  }
});
