// JAVASCRIPT DOCUMENT


// HAMBURGER BUTTON EN UNORDERED LIST ZOEKEN IN DE DOM

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")



// FUNCTIE HAMBURGER MENU OPEN

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle("open")
}