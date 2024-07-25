let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showMessage() {
    document.getElementById("message-container").style.display = "block";
    document.getElementById("show-message-button").style.display = "none";
}

document.getElementById('bgmusic').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        console.log('Music started.');
        startPartyMode();
    } else {
        audio.pause();
        console.log('Music stopped.');
        stopPartyMode();
    }
});

let isPartyMode = false;
let partyModeInterval;

function startPartyMode() {
    if (isPartyMode) return; // Prevent multiple intervals
    isPartyMode = true;
    partyModeInterval = setInterval(changeBackgroundColor, 500); // Change color every 500 milliseconds
    console.log('Party mode started.');
}

function stopPartyMode() {
    isPartyMode = false;
    clearInterval(partyModeInterval);
    document.body.style.backgroundColor = '#ff7e5f'; // Reset to default color
    console.log('Party mode stopped.');
}

function changeBackgroundColor() {
    if (isPartyMode) {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        console.log('Background color changed to:', randomColor);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
