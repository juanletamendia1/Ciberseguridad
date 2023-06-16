// Obtener el botón de menú hamburguesa y el menú desplegable
const menuToggle = document.querySelector(".menu-toggle");
const menuDropdown = document.querySelector(".menu-dropdown");

//POP up al comenzar la pagina
document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  var continueBtn = document.getElementById("continue-btn");

  overlay.style.display = "block";
  popup.style.display = "block";

  continueBtn.addEventListener("mouseenter", function () {
    continueBtn.style.width = popup.offsetWidth + "px";
    continueBtn.style.height = popup.offsetHeight + "px";
    continueBtn.style.position = "absolute";
    continueBtn.style.top = "0";
    continueBtn.style.left = "0";
  });

  continueBtn.addEventListener("mouseleave", function () {
    continueBtn.style.width = "";
    continueBtn.style.height = "";
    continueBtn.style.position = "";
    continueBtn.style.top = "";
    continueBtn.style.left = "";
  });

  continueBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
  });
});

//formulario
const popupTrigger = document.getElementById("popup-trigger");
const popupOverlay = document.getElementById("popup-overlay");
const cybersecurityForm = document.getElementById("cybersecurity-form");
const result = document.getElementById("result");
const closeButton = document.getElementById("close-button");

popupTrigger.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

cybersecurityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const passwordHabit = document.getElementById("password-habit").value;
  const loginHabit = document.getElementById("login-habit").value;
  const wifiHabit = document.getElementById("wifi-habit").value;

  let countYes = 0;
  let countNo = 0;

  if (passwordHabit === "yes") {
    countYes++;
  } else {
    countNo++;
  }

  if (loginHabit === "yes") {
    countYes++;
  } else {
    countNo++;
  }

  if (wifiHabit === "yes") {
    countYes++;
  } else {
    countNo++;
  }

  result.textContent = countYes >= 2 ? "Inseguro" : "Seguro";
  result.style.color = countYes >= 2 ? "red" : "green";

  cybersecurityForm.style.display = "none";
  result.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popupOverlay.style.display = "none";
  cybersecurityForm.style.display = "block";
  result.style.display = "none";
});
