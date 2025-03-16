// Set Launch Date (YYYY, MM-1, DD)
const launchDate = new Date("2025-03-18T00:00:00").getTime();

// Countdown Function
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    // Convert Time
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update Countdown UI
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Stop Countdown When Reached Zero
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<h2>We're Live! 🚀</h2>";
    }
}, 1000);

// Subscription Function (Simple Alert for Demo)
function subscribe() {
    let email = document.getElementById("email").value;
    if (email) {
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("email").value = ""; // Clear input field
    } else {
        alert("Please enter a valid email.");
    }
}
