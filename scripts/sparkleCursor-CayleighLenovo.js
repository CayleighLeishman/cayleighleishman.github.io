let sparkleEnabled = false; // Default: sparkles are off

const sparkleToggle = document.getElementById('sparkleToggle');
sparkleToggle.addEventListener('change', (e) => {
    sparkleEnabled = e.target.checked;
});

document.addEventListener('mousemove', (e) => {
    if (!sparkleEnabled) return;

    const sparklesContainer = document.getElementById('sparkles-container');

    for (let i = 0; i < 5; i++) { // Make multiple sparkles per move
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        const y = e.clientY;
        const x = e.clientX;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        // Random small movement like a firework burst
        const offsetX = (Math.random() - 0.5) * 20; // -10 to +10
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.setProperty('--offset-x', `${offsetX}px`);
        sparkle.style.setProperty('--offset-y', `${offsetY}px`);

        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});
