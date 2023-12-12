
var HamburgerMenu = document.querySelector("button");
var menu = document.querySelector("nav");
HamburgerMenu.onclick = openMenu;
function openMenu() {
menu.classList.add("showMenu");
  console.log("hij werkt");
}

var MenuCloseButton = document.querySelector("nav button");
MenuCloseButton.onclick = closeMenu;
function closeMenu() {
  var menu = document.querySelector("nav");
  menu.classList.remove("showMenu");
  console.log("hij werkt");
}
