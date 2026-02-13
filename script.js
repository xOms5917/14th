const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let count = 0;
const phrases = ["No", "Nah", "Nuh-uh", "Nope!", "Try again!", "Getting warm!", "Almost!", "Last chance!"];

function moveNo() {
    // Break out of the container to allow full screen teleporting
    noBtn.style.position = 'fixed'; 
    
    // Calculate indoor boundaries
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    // Cycle phrases
    if (count < phrases.length) {
        noBtn.innerText = phrases[count];
    }

    // Make Yes button grow
    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize + 10}px`;

    count++;

    // Final vanish
    if (count >= 8) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "C'mon, just do it! ❤️";
    }
}

noBtn.addEventListener('mouseenter', moveNo);
noBtn.addEventListener('click', (e) => { e.preventDefault(); moveNo(); });

yesBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    celebration.classList.remove('hidden');
});
