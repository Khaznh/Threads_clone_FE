document.querySelector(".settings_button").addEventListener("click", () => {
  document.getElementById("settingsModal").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("settingsModal").style.display = "none";
});
