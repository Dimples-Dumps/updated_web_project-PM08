function setWelcomeMessage() {
  const message = document.getElementById("welcome-message");
  const hour = new Date().getHours();

  if (hour < 12) {
    message.textContent = "Good morning! Welcome to SWIFT";
  } else if (hour < 18) {
    message.textContent = "Good afternoon! Keep pushing";
  } else {
    message.textContent = "Good evening! Time to chill";
  }
}

setWelcomeMessage();

const toggleButton = document.getElementById("mode-toggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "Switch to Dark Mode";
  }
});

