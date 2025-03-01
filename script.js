// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsContainer.appendChild(heart);
        }
    }

    createHearts();

    // Play music automatically (might require user interaction on some browsers)
    const music = document.getElementById('background-music');
    document.body.addEventListener('click', function() {
        music.play();
    });

    // Add hover effect to apology cards
    document.querySelectorAll('.apology-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
