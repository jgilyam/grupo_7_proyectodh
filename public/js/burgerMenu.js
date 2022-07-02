window.addEventListener("load", function () {
  const navMenu = document.querySelector("#navMenu");
  const containerMenu = document.querySelector("#containerNavMenu");

  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    containerMenu.classList.toggle("active");
  });
});
