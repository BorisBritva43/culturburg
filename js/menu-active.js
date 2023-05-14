document.querySelectorAll(".main-menu li a").forEach((el) => {
  if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
    el.parentElement.classList.add("active");
  }
});




