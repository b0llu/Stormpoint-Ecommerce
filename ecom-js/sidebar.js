const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarMenu = document.querySelector("#sidebar-menu");
const filterBtn = document.querySelector("#filter-btn");

sidebarToggle.addEventListener("click", () => {
  sidebarMenu.classList.toggle("position-open");
  sidebarToggle.classList.toggle("fa-bars");
  sidebarToggle.classList.toggle("fa-arrow-left");
  filterBtn.innerHTML = "CONFIRM";
});

filterBtn.addEventListener("click", () => {
  sidebarMenu.classList.toggle("position-open");
  sidebarToggle.classList.toggle("fa-bars");
  sidebarToggle.classList.toggle("fa-arrow-left");
  filterBtn.innerHTML = "FILTERS";
})