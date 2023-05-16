document.querySelectorAll(".main-menu li a").forEach((el) => {
  if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
    el.parentElement.classList.add("active");
  }
});

/* === IBG === */
function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
    if (ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
    }
  }
}
ibg();




