/*
====================================================
SIDEBAR NAVIGATION
====================================================

This script detects which section of the page is
currently visible and highlights the corresponding
item in the sidebar.

Sections:
- Home
- Research
- Projects
- Publications
- CV

====================================================
*/


/*
====================================================
GET HTML ELEMENTS
====================================================

Select all sections that have an id attribute.

Examples:
<section id="home">
<section id="research">
<section id="publications">

*/

const sections = document.querySelectorAll("section[id]");


/*
====================================================
GET SIDEBAR LINKS
====================================================

Select all navigation buttons in the sidebar.

Examples:
<a class="nav-item" href="#home">
<a class="nav-item" href="#research">

*/

const navLinks = document.querySelectorAll(".nav-item");


/*
====================================================
SCROLL EVENT
====================================================

Every time the user scrolls the page,
check which section is currently visible.

*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    /*
    ================================================
    CURRENT ACTIVE SECTION
    ================================================

    This variable will store the id of the
    section currently visible on screen.

    Example:
    "home"
    "research"
    "publications"

    */

    let current = "";


    /*
    ================================================
    CHECK EACH SECTION
    ================================================

    Loop through all sections of the page.

    */

    sections.forEach(section => {

        /*
        Get the vertical position of the section.

        The -150 offset compensates for the fixed
        header so that the section becomes active
        slightly before reaching the top.

        */

        const sectionTop = section.offsetTop - 260;


        /*
        If the current scroll position is below
        this section, mark it as active.

        */

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    // On phones the header is compacted as soon as the page scrolls a little,
    // so it does not take half of the screen (desktop keeps the old rule).
    const compactNow = isMobileLayout() ? window.scrollY > 40 : current !== "home";

    if (!compactNow) {
        header.classList.remove("compact");
        document.body.classList.remove("compact-header");
    } else {
        header.classList.add("compact");
        document.body.classList.add("compact-header");
}

    /*
    ================================================
    UPDATE SIDEBAR
    ================================================

    Remove the active class from all buttons,
    then add it only to the currently active one.

    */

    navLinks.forEach(link => {

        // Remove active state from all links
        link.classList.remove("active");


        /*
        Compare:

        href="#publications"

        with

        current = "publications"

        */

        if (link.getAttribute("href") === "#" + current) {

            // Activate matching sidebar item
            link.classList.add("active");
        }

    });

});


/*
====================================================
MOBILE MENU (phones and tablets, up to 900 px)
====================================================

On small screens the sidebar is hidden and the
button in the header (three lines) opens it as a
drop-down menu. On desktop the button is hidden
and none of this has any effect.

*/

const mobileQuery = window.matchMedia("(max-width: 900px)");
const menuButton = document.querySelector(".menu-toggle");
const sidebarMenu = document.querySelector(".sidebar");

function isMobileLayout() {
    return mobileQuery.matches;
}

// The menu opens just below the header, whatever its height.
function placeMenu() {
    document.documentElement.style.setProperty(
        "--header-bottom",
        header.getBoundingClientRect().bottom + "px"
    );
}

function setMenu(open) {
    if (open) placeMenu();
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (menuButton && sidebarMenu) {

    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        setMenu(!document.body.classList.contains("menu-open"));
    });

    // Choosing a section closes the menu.
    navLinks.forEach(link => link.addEventListener("click", () => setMenu(false)));

    // Tapping outside the menu, or pressing Escape, closes it.
    document.addEventListener("click", (e) => {
        if (document.body.classList.contains("menu-open") && !sidebarMenu.contains(e.target)) {
            setMenu(false);
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });

    // Back to desktop size: make sure the menu is closed.
    mobileQuery.addEventListener("change", () => setMenu(false));

    // The header changes height when it becomes compact.
    window.addEventListener("scroll", () => {
        if (document.body.classList.contains("menu-open")) placeMenu();
    });
}
