const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const links = document.querySelector(".links");
const body = document.querySelector("body");

hamburger.addEventListener("click", openSidebar);
closeIcon.addEventListener("click", closeSidebar);

function openSidebar() {
  links.classList.add("active");
  closeIcon.style.display = "block";
}
function closeSidebar() {
  links.classList.remove("active");
  closeIcon.style.display = "none";
}

const scrollbarContainer = document.querySelector(".scrollbar-container");
const content = document.querySelector(".content");
new SimpleBar(content, { autoHide: true });

function checkScreenSize() {
  let mediaQuery = window.matchMedia("(min-width: 768px)");

  if (mediaQuery.matches) {
    links.classList.remove("active");
    body.classList.remove("no-scroll");
    closeIcon.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenSize);

checkScreenSize();
