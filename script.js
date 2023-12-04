var fadeToNextPageButton = document.getElementById("fade-to-next-page");

fadeToNextPageButton.addEventListener("click", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "prediction.html";
  }, 400);
});

var disclaimerModal = document.getElementById("disclaimerModal");
var closeModalButton = document.getElementById("closeModal");

closeModalButton.addEventListener("click", () => {
  disclaimerModal.style.display = "none";
});

window.onload = () => {
  disclaimerModal.style.display = "block"; // Show the modal on page load
};
