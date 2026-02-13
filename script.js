const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let noCount = 0;
const phrases = ["No", "Nah", "Nuh-uh", "Wait...", "Nice try!"];

noBtn.addEventListener('mouseover', () => {
    // 1. Move the button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Change text
    if (noCount < phrases.length - 1) {
        noCount++;
        noBtn.innerText = phrases[noCount];
    } else {
        // 3. Make it disappear
        noBtn.style.display = 'none';
    }

    // 4. Make Yes grow larger
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.2}px`;
    yesBtn.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
});

yesBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    celebration.classList.remove('hidden');
});
