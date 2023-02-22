function openMobileMenu(mobileMenuSwitch) {
  let mobileMenu = document.getElementById("mobile_button_container");
  let mobileMenuButton = document.getElementById(
    "mobile_button_menu_opener_button"
  );
  switch (mobileMenuSwitch) {
    case "menuOpen":
      mobileMenu.style.display = "block";
      mobileMenuButton.setAttribute("onclick", "openMobileMenu('menuClose')");
      break;
    case "menuClose":
      setTimeout(function () {
        mobileMenu.style.display = "none";
      }, 1000);
      mobileMenu.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 1000,
      });
      mobileMenuButton.setAttribute("onclick", "openMobileMenu('menuOpen')");
      break;
  }
}
