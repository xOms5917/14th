const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let attemptCount = 0;
const maxAttempts = 8; // It will teleport 8 times
const phrases = ["No", "Nah", "Nuh-uh", "Nope!", "Try again", "Getting warmer...", "Almost!", "Last chance!"];

function teleportButton() {
    // 1. Calculate random position across the whole screen
    const padding = 100;
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    // 2. Apply position and high z-index to stay on top
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.zIndex = "9999";

    // 3. Cycle through phrases
    if (attemptCount < phrases.length) {
        noBtn.innerText = phrases[attemptCount];
    }

    // 4. Make Yes grow significantly larger each time
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 12}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 6}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 12}px`;

    attemptCount++;

    // 5. After 8 attempts, vanish and update the Yes button
    if (attemptCount >= maxAttempts) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "C'mon, just do it! ❤️";
        yesBtn.style.transform = "scale(1.1)"; // Slight extra pop
    }
}

// Triggers on hover or click
noBtn.addEventListener('mouseover', teleportButton);
noBtn.addEventListener('click', teleportButton);

// Success action
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    celebration.classList.remove('hidden');
});
