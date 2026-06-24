
/*
================================================
RESEARCH ACCORDION
================================================
*/

const researchCards =
    document.querySelectorAll(".research-card");

const researchPanels =
    document.querySelectorAll(".research-panel");

researchCards.forEach(card => {
    card.addEventListener("click", () => {
        const target = card.dataset.target;
        const panel = document.getElementById(target);
        const isActive = card.classList.contains("active");

        researchCards.forEach(c => c.classList.remove("active"));
        researchPanels.forEach(p => p.classList.remove("active"));

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