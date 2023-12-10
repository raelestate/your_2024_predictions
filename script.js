var fadeToNextPageButton = document.getElementById("fade-to-next-page");

fadeToNextPageButton.addEventListener("click", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "prediction.html";
  }, 400);
});
