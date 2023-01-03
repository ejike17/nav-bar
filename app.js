// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links')
const toggle = document.querySelector('.nav-toggle')

toggle.addEventListener('click', toggleLinks)

function toggleLinks() {
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove('show-links')
    //     //links.classList.add('links')
    // } else {
    //   links.classList.add('show-links')
    // }
    links.classList.toggle("show-links");
    
}



