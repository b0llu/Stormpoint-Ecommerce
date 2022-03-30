const toggleThemeBtn = document.querySelector("#toggle-theme");

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme === "dark") {
  document.documentElement.setAttribute("data-theme", localStorageTheme);
  toggleThemeBtn.className = "fas fa-sun icon";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
  toggleThemeBtn.className = "fas fa-moon icon";
}

toggleThemeBtn.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    currentTheme = "dark";
    toggleThemeBtn.className = "fas fa-sun icon";
  } else {
    currentTheme = "light";
    toggleThemeBtn.className = "fas fa-moon icon";
  }

  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
});
