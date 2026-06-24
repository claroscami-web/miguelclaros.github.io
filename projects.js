/*
================================================
PROJECTS ACCORDION
================================================
*/

const projectCards =
    document.querySelectorAll(".project-card");

const projectPanels =
    document.querySelectorAll(".project-panel");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const target = card.dataset.target;
        const panel = document.getElementById(target);
        const isActive = card.classList.contains("active");

        projectCards.forEach(c => c.classList.remove("active"));
        projectPanels.forEach(p => p.classList.remove("active"));

        if (!isActive) {
            card.classList.add("active");
            panel.classList.add("active");

            panel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});