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


    if (current === "home") {
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