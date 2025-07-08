import Lenis from 'lenis';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);



import { intro } from "./src/js/intro.js";
import { menu } from "./src/js/menu.js";
import { link } from "./src/js/link.js";
import { project } from "./src/js/project.js";
import { bgColor } from "./src/js/bgColor.js";
import { work } from "./src/js/work.js";
import { about } from "./src/js/about.js";
import { cursor } from "./src/js/cursor.js";
import { contact } from "./src/js/contact.js";


window.addEventListener('load', function () {
    menu()
    link()
    project()
    bgColor()
    work()
    about()
    intro()
    cursor()
    contact()


    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
})

let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
        localStorage.setItem('scrollPosition', window.scrollY);
        location.reload();
    }, 300)
});

//------------------lenis(scroll)
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);