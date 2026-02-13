const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let attemptCount = 0;
const maxAttempts = 8; 
const phrases = ["No", "Nah", "Nuh-uh", "Nope!", "Try again", "Getting warmer...", "Almost!", "Last chance!"];

function teleportButton() {
    // 1. Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 2. Get button dimensions (so it doesn't partially overflow)
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 3. Calculate "Indoor" coordinates 
    // We subtract the button size and a 20px margin so it never touches the edge
    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    const newX = Math.max(20, Math.floor(Math.random() * maxX));
    const newY = Math.max(20, Math.floor(Math.random() * maxY));

    // 4. Apply position
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.transition = "all 0.1s ease-out"; // Makes the "jump" look smooth but fast
    noBtn.style.zIndex = "9999";

    // 5. Update text phrases
    if (attemptCount < phrases.length) {
        noBtn.innerText = phrases[attemptCount];
    }

    // 6. Make Yes button grow
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 10}px`;
    
    attemptCount++;

    // 7. Final vanish and text swap
    if (attemptCount >= maxAttempts) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "C'mon, just do it! ❤️";
        yesBtn.style.transform = "scale(1.2)";
        yesBtn.style.boxShadow = "0 0 20px #ff4d6d";
    }
}

// Triggers
noBtn.addEventListener('mouseover', teleportButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents clicking it even if she's super fast
    teleportButton();
});

// Success action
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    celebration.classList.remove('hidden');
});
