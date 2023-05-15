const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const links = document.querySelector(".links");

hamburger.addEventListener("click", openSidebar);
closeIcon.addEventListener("click", closeSidebar);

function openSidebar() {
  links.classList.add('active');
  closeIcon.style.display = 'block';
}
function closeSidebar() {
  links.classList.remove('active');
  closeIcon.style.display = 'none';
}
