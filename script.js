window.onload = function () {
    // Slide in imgHold from bottom smoothly
    const imgHold = document.getElementById('imgHold');
    setTimeout(() => {
        imgHold.style.opacity = '1';
    }, 100);

    // Lamp and Steam fade in after imgHold
    setTimeout(() => {
        const lamp = document.getElementById('lamp');
        const steam = document.querySelector('.steam');
        const powerOn = document.getElementById('powerOn');

        // Flicker effect for lamp
        lamp.style.opacity = '1';
        lamp.style.visibility = 'visible';
        lamp.style.animation = 'flicker 3s infinite'; // Apply flicker animation

        // Fade in steam
        steam.style.opacity = '1';
        steam.style.visibility = 'visible';

        // Fade in Power On
        powerOn.style.opacity = '1';
        powerOn.style.visibility = 'visible';

        // Fade in individual steam bubbles
        const steamBubbles = document.querySelectorAll('.steam > ol > li');
        steamBubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.style.opacity = '1';
            }, index * 300); // Stagger the appearance for a more natural effect
        });
    }, 1700); // Delay to match imgHold's transition

    // phold fades in after lamp and steam
    setTimeout(() => {
        const phold = document.getElementById('phold');
        phold.style.opacity = '1';
        phold.style.visibility = 'visible';
    }, 2500); // Delayed after lamp and steam fade in
};
