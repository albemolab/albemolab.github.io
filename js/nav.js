// Phone menu: the toggle button shows and hides the nav.
document.querySelectorAll(".nav-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var open = btn.closest(".site-header").classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
