//Begin Nav Menu
document.addEventListener("DOMContentLoaded", function () {
  $(".mobile-menu .menu-toggle").click(function () {
    $(this).parent().next(".mobile-nav").toggle(0, "display");
  });
})
