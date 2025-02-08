document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const question = document.querySelector('h1');

    let yesButtonScale = 1; // Initial scale of the “Yes” button

    noButton.addEventListener('click', function() {
        // Move the “No” button to a random position
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const maxX = containerWidth - buttonWidth;
        const maxY = containerHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';

        // Increase the size of the “Yes” button
        yesButtonScale += 0.1;
        yesButton.style.transform = `scale(${yesButtonScale})`;
    });

    yesButton.addEventListener('click', function() {
        // Change question label
        question.textContent = "Yaaay! Happy Valentine's Day💫🌹❤️!\nBabe 🙈💕🥰😘";

        // Disable buttons
        yesButton.disabled = true;
        noButton.disabled = true;
    });
});
