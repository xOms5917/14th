const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let count = 0;
const phrases = ["No", "Nah", "Nuh-uh", "Nice try!", "Getting warm!", "Try harder!", "Whoops!", "Last one!"];

function moveNo() {
    // 1. Calculate boundaries (Indoor)
    // We use window.innerWidth/Height to make sure it doesn't leave the screen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate button size to avoid it peaking off screen
    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;

    // Random position within safe zone (20px margin)
    const newX = Math.floor(Math.random() * (windowWidth - btnW - 40)) + 20;
    const newY = Math.floor(Math.random() * (windowHeight - btnH - 40)) + 20;

    // 2. Set position to Fixed so it can fly anywhere on screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.zIndex = '9999';

    // 3. Cycle Text
    if (count < phrases.length) {
        noBtn.innerText = phrases[count];
    }

    // 4. Grow Yes Button
    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize + 12}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 6}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 12}px`;

    count++;

    // 5. Final disappearing act
    if (count >= 8) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "C'mon, just do it! ❤️";
        // Make Yes pulse so it's obvious she has to click it
        yesBtn.style.animation = "bounce 1s infinite";
    }
}

// Attach listeners
noBtn.addEventListener('mouseenter', moveNo);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNo();
});

yesBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    celebration.classList.remove('hidden');
});
