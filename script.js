// Creating variables that reference to header and 2nd section
const headerbar = document.querySelector("header");
const section2 = document.getElementById("aboutme");
// Scroll event listener
window.addEventListener("scroll", () => {
  const section2Top = section2.getBoundingClientRect().top;
  // Checking if the second section is at or below the top of the viewport
  if (section2Top <= 0) {
    headerbar.classList.add("visible"); // Shows header bar
  } else {
    headerbar.classList.remove("visible"); // Hides header bar
  }
});
