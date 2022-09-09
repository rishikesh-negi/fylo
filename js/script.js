const themeToggleBtn = document.getElementById("theme-switch");
const setDarkIcon = document.getElementById("set-dark");
const setLightIcon = document.getElementById("set-light");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  setLightIcon.classList.remove("hidden");
} else {
  setDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", themeChange);

function themeChange() {
  // Toggling the icons inside the button
  setLightIcon.classList.toggle("hidden");
  setDarkIcon.classList.toggle("hidden");

  // If set previously bu user and stored locally
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }
  // If NOT set by local storage previously
  else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
