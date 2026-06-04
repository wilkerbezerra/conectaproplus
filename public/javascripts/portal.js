function toggleLogoutMenu() {
  const menu = document.getElementById("logout-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.addEventListener("click", function(event) {
  const menu = document.getElementById("logout-menu");
  const avatar = document.querySelector(".profile-icon");
  if (
    !avatar.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    menu.style.display = "none";
  }
});