//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//Navbar Code
let navShow = false

const navButton = document.getElementById("navbar-toggler")
navButton.addEventListener("click", () => {
  navBackground()
})

function navBackground() {
  const background = document.getElementById("nav-background")
  if (!navShow) {
    background.classList.add("clicked")
    navShow = true
  } else {
    background.classList.remove("clicked")
    navShow = false
  }
}
