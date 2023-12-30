const navlinks = document.querySelector(".nav-links");
const iconmenu = document.getElementById("icon-menu");
const iconclose = document.getElementById("icon-close");

iconmenu.addEventListener("click", () => {
  navlinks.classList.add("overlay");
  iconclose.style.display = "block";
  backdrop.style.display = "block";
});
iconclose.addEventListener("click", () => {
  navlinks.classList.remove("overlay");
  iconclose.style.display = "none";
  backdrop.style.display = "none";
});
