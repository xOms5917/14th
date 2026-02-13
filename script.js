const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const celebration = document.getElementById('celebration');

let attemptCount = 0;
const maxAttempts = 5; // How many times it teleports before vanishing
const phrases = ["No", "Nah", "Nuh-uh", "Try again!", "Almost!"];

// Function to move the button to a random spot on the screen
function teleportButton() {
    // Calculate random positions, keeping the button within the viewport
    const padding = 50;
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    // Apply the new position
    noBtn.style.position = 'fixed'; // Switch to fixed so it can move anywhere
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.zIndex = "1000";

    // Update text based on how many times she's tried
    if (attemptCount < phrases.length) {
        noBtn.innerText = phrases[attemptCount];
    }

    // Make the Yes button grow each time she "fails" to click No
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 10}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 5}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 10}px`;

    attemptCount++;

    // After 5 attempts, make it vanish
    if (attemptCount > maxAttempts) {
        noBtn.style.display = 'none';
    }
}

// Trigger the move when she tries to click OR just hovers
noBtn.addEventListener('mouseover', teleportButton);
noBtn.addEventListener('click', teleportButton);

// Final success state
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    celebration.classList.remove('hidden');
    // Add some confetti or extra flair here if you like!
});
