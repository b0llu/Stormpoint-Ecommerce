const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarMenu = document.querySelector("#sidebar-menu");
const filterBtn = document.querySelector("#filter-btn");
const body = document.querySelector('body')

sidebarToggle.addEventListener("click", () => {
  sidebarMenu.classList.toggle("position-open");
  sidebarToggle.classList.toggle("fa-bars");
  body.classList.toggle("position-fixed")
  filterBtn.innerHTML = "CONFIRM";
});

filterBtn.addEventListener("click", () => {
  sidebarMenu.classList.toggle("position-open");
  sidebarToggle.classList.toggle("fa-bars");
  body.classList.remove("position-fixed")
  filterBtn.innerHTML = "FILTERS";
})