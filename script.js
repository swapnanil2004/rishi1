// Countdown Timer Script
var countdownDate = new Date("Dec 10, 2024 00:00:00").getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Birthday Rishi!";
    }
}, 1000);

// Trigger Confetti Animation
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff6f61', '#feb47b', '#f5a623']
    });
}

// Trigger Confetti on Page Load
window.onload = () => {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#ff6f61', '#feb47b', '#f5a623', '#ffb6c1', '#98c9e7']
    });
};
