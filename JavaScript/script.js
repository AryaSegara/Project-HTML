// loop on three parameter
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

// event scroll header to hide
window.addEventListener("scroll", function () {
    if (window.scrollY >= 70) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
      hideHeader();
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });