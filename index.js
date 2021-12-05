const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
}

boton.addEventListener("click", () => {
  console.log("Hola");
  let theme;
  if (document.body.classList.toggle("light-theme")) {
    theme = document.body.classList.contains("light-theme");
  } else if (document.body.classList.toggle("dark-theme")) {
    theme = document.body.classList.contains("dark-theme");
  } else {
    document.body.classList.contains("red-theme");
  }
  localStorage.setItem("theme", theme);
});
