/*
================================================
CV ACCORDION
================================================
*/

const cards = document.querySelectorAll(".cv-card");
const panels = document.querySelectorAll(".cv-panel");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const target = card.dataset.target;
        const panel = document.getElementById(target);
        const isActive = card.classList.contains("active");

        // Close all cards
        cards.forEach(c => c.classList.remove("active"));

        // Hide all panels
        panels.forEach(p => p.classList.remove("active"));

        // If the clicked card was already active, stop here
        if (isActive) {
            return;
        }

        // Activate selected card
        card.classList.add("active");

        // Show selected panel
        panel.classList.add("active");

        // Scroll to opened panel
        panel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});