// ================================================================
// LATEST NEWS (Home page, under the photo)
// Date: 18-11-2026
//
// To add a news item: copy one block and put it at the TOP of the list.
//   date : "YYYY-MM-DD"  (used to sort and to show "Nov 2026")
//   text : one short sentence (keep it to ~2 lines; <em>...</em> for journals)
//   link : optional. "#<publication id>" jumps to the paper in Publications,
//          or a full https:// address for an external page.
// Only the most recent NEWS_TO_SHOW items are shown; older ones can stay here.
// ================================================================

const NEWS_TO_SHOW = 4;

const news = [
    {
        date: "2026-11-01",
        text: "Joined the University of Valladolid as UVa Postdoctoral Researcher.",
    },
    {
        date: "2026-10-19",
        text: "Closed-loop photoreactor design published in <em>Nat. Commun.</em>",
        link: "#ChemRxiv2025",
    },
    {
        date: "2026-07-09",
        text: "Synthetic shortcuts paper published in <em>Chem</em>.",
        link: "#Chem2026",
    },
    {
        date: "2026-06-28",
        text: "Preprint on autonomous polymer upcycling released on <em>ChemRxiv</em>.",
        link: "#ChemRxiv2026",
    },
];

// ---------------------------------------------------------------
// Rendering (no need to edit below this line)
// ---------------------------------------------------------------
(function renderNews() {
    const list = document.getElementById("news-list");
    if (!list) return;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const latest = [...news]
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, NEWS_TO_SHOW);

    list.innerHTML = latest.map(item => {
        const [year, month] = item.date.split("-");
        const label = `${months[Number(month) - 1]} ${year}`;
        const external = item.link && item.link.startsWith("http");
        const text = item.link
            ? `<a href="${item.link}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${item.text}</a>`
            : item.text;
        return `<li class="news-item"><span class="news-date">${label}</span><span class="news-text">${text}</span></li>`;
    }).join("");
})();
