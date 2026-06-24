const teachingCards = document.querySelectorAll(".teaching-card");
const teachingPanels = document.querySelectorAll(".teaching-panel");

teachingCards.forEach(card => {
    card.addEventListener("click", () => {
        const target = card.dataset.target;
        const targetPanel = document.getElementById(target);
        const isAlreadyActive = card.classList.contains("active");

        teachingCards.forEach(c => c.classList.remove("active"));
        teachingPanels.forEach(panel => panel.classList.remove("active"));

        if (!isAlreadyActive) {
            card.classList.add("active");
            targetPanel.classList.add("active");

            targetPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});