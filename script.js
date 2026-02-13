const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let count = 0;
const phrases = ["No", "Nah", "Nuh-uh", "Nope!", "Try again!", "Getting warm!", "Almost!", "Last chance!"];

function moveNo() {
    // Calculate indoor boundaries
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    // Teleport to a random spot on the whole screen
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed'; // It "breaks out" of the square now
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    // Update Text
    if (count < phrases.length) {
        noBtn.innerText = phrases[count];
    }

    // Grow Yes Button
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 12}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 5}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 10}px`;

    count++;

    // Vanish and Change Yes Text
    if (count >= 8) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "C'mon, just do it! ❤️";
    }
}

noBtn.addEventListener('mouseenter', moveNo);
noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNo(); });

yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    celebration.classList.remove('hidden');
});
