//select elements
const openMenuButton = document.getElementById("open-menu-button");
const menuModal = document.getElementById("menu");
const closeMenuButton = document.getElementById("close-menu-button");
const backgroundFilter = document.getElementById("background-filter");

//event listeners
openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
backgroundFilter.addEventListener("click", closeMenu);

//callback functions
function openMenu() {
  menuModal.classList.remove("modal-leave");
  backgroundFilter.classList.remove("background-filter-leave");

  menuModal.classList.add("modal-enter");
  backgroundFilter.classList.add("background-filter-enter");
}

function closeMenu() {
  menuModal.classList.remove("modal-enter");
  backgroundFilter.classList.remove("background-filter-enter");

  menuModal.classList.add("modal-leave");
  backgroundFilter.classList.add("background-filter-leave");
}
