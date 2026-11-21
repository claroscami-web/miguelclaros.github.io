
//Publications Miguel
// Date: 17-11-2026

/*
====================================================
PUBLICATIONS DATABASE
====================================================
*/

/*
================================================
UTILITIES
================================================
*/

function highlightMyName(text) {
    return text.replaceAll(
        "M. Claros",
        '<span class="my-name">M. Claros</span>'
    );
}

// This is a list of publication objects.
// Each object contains the information for one publication.

const publications = [

    {
        type: "article",
        number: 13,
        year: 2026,
        dateValue: "2026-10-19",
        timelineDate: "Oct 2026",
        title: "Closed-Loop Photoreactor Design Enabled by Machine Learning and Digital Twins",
        authors: "J. H. A. Schuurmans‡, M. Claros‡, E. Savino, F. Lukas, A. Slattery and T. Noël*",
        journal: "Nat. Commun.",
        citation: "Nat. Commun., 2026, 17, 11762",
        volume: "17",
        issue: "",
        pages: "11762",
        doi: "10.1038/s41467-026-78785-2",

        id: "ChemRxiv2025",
        timelineTitle: "Photoreactor Design",

        topic: [
            "Automation",
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 12,
        year: 2026,
        dateValue: "2026-07-09",
        timelineDate: "Jul 2026",
        title: "Redefining Synthetic Efficiency: Chemical and Technological Shortcuts",
        authors: "J. Djossou, M. Claros, O. Bayley and T. Noël*",
        journal: "Chem",
        citation: "Chem, 2026, 12(7), 103139",
        volume: "12",
        issue: "7",
        pages: "103139",
        doi: "10.1016/j.chempr.2026.103139",

        id: "Chem2026",
        review: true,   // listed under "Reviews & Book Chapters" in Research
        timelineTitle: "Chemical and Technological Shortcuts",

        topic: [
            "Automation",
            "Flow Chemistry",
            "Homogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 11,
        year: 2026,
        dateValue: "2026-06-28",
        timelineDate: "Jun 2026",
        title: "Autonomous Control of Polymer Upcycling with a Self-Driving Laboratory",
        authors: "M. Vanzella, O. Bayley, R. S. van der Hurk, E. Savino, M. Claros, R. Feringa, R. A. H. Peters, M. Barhoum, T. den Hartog, A. F. G. Gargano, B. W. J. Pirok and T. Noël*",
        journal: "ChemRxiv",
        citation: "ChemRxiv, 2026",
        volume: "",
        issue: "",
        pages: "",
        doi: "10.26434/chemrxiv.15005284",

        id: "ChemRxiv2026",
        timelineTitle: "Robochem-Polymer Upcycling",

        topic: [
            "Automation",
            "Photochemistry",
        ],
    },
    {
        type: "article",
        number: 10,
        year: 2026,
        dateValue: "2026-04-13",
        timelineDate: "Apr 2026",
        title: "A Flexible and Affordable Self-Driving Laboratory for Automated Reaction Optimization",
        authors: "S. Pilon‡, E. Savino‡, O. Bayley‡, M. Vanzella, M. Claros, P. Siasiaridis, J. Liu, F. Lukas, M. Damian, V. Tseliou, N. Intini, A. Slattery, J. Orduna, T. den Hartog, R. Peters, A. Gargano, F. Mutti and T. Noël*",
        journal: "Nat. Synth.",
        citation: "Nat. Synth., 2026, 5(10), 1552–1564",
        volume: "5",
        issue: "10",
        pages: "1552–1564",
        doi: "10.1038/s44160-026-01053-0",

        id: "NatSynth2026",
        timelineTitle: "Robochem-Flex",

        topic: [
            "Automation",
            "Flow Chemistry",
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 9,
        year: 2025,
        dateValue: "2025-06-03",
        timelineDate: "Jun 2025",
        title: "Design and Application of a Decatungstate-based Ionic Liquid Photocatalyst for Sustainable Hydrogen Atom Transfer Reactions",
        authors: "M. Claros, J. Quévarec, S. Fernández-García and T.Noel*",
        journal: "Green. Chem.",
        citation: "Green. Chem., 2025, 27(25), 7660–7666",
        volume: "27",
        issue: "25",
        pages: "7660–7666",
        doi: "10.1039/D5GC02160J",

        id: "GreenChem2025",
        timelineTitle: "Decatungstate Ionic Liquid",

        topic: [
            "Photochemistry",
            "Homogeneous Catalysis",
            "Flow Chemistry",
        ],
    },
    {
        type: "article",
        number: 8,
        year: 2025,
        dateValue: "2025-01-06",
        timelineDate: "Jan 2025",
        title: "Interaction of Light with Gas–Liquid Interfaces: Influence on Photon Absorption in Continuous-Flow Photoreactors",
        authors: "J.H. A. Schuurmans, S. D. A. Zondag, A. Chaudhuri, M. Claros, J. van der Schaaf, and T.Noel*",
        journal: "React. Chem. Eng.",
        citation: "React. Chem. Eng., 2025, 10(4), 790–799",
        volume: "10",
        issue: "4",
        pages: "790–799",
        doi: "10.1039/D4RE00540F",

        id: "ReactChemEng2025",
        timelineTitle: "Interaction of Light with Gas–Liquid Interfaces",

        topic: [
            "Flow Chemistry",
            "Photochemistry",
        ],
    },
    {
        type: "article",
        number: 7,
        year: 2024,
        dateValue: "2024-11-08",
        timelineDate: "Nov 2024",
        title: "Light-assisted Carbon Dioxide Reduction in an Automated Photoreactor System Coupled to Carbonylation Chemistry",
        authors: "J. H. A. Schuurmans‡, T. M. Masson‡, S. D. A. Zondag‡, S. Pilon, N. Bragato, M. Claros, T. den Hartog, F. Sastre, J. van den Ham, P. Buskens, G. Fiorani and T. Noel*",
        journal: "Chem. Sci.",
        citation: "Chem. Sci., 2024, 15(47), 19842–19850",
        volume: "15",
        issue: "47",
        pages: "19842–19850",
        doi: "10.1039/D4SC06660J",

        id: "ChemSci2024",
        timelineTitle: "Automated CO2 Reduction",

        topic: [
            "Photochemistry",
            "Flow Chemistry",
            "Automation",
            "Heterogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 6,
        year: 2023,
        dateValue: "2023-10-19",
        timelineDate: "Oct 2023",
        title: "Palladium Catalysts Supported in Microporous Phosphine Polymer Networks",
        authors: "N. Esteban, M. Claros, C. Álvarez, A. E. Lozano, C. Bartolomé*, J. M. de Ilarduya, J. A. Miguel*",
        journal: "Polymers",
        citation: "Polymers, 2023, 15(20), 4143",
        volume: "15",
        issue: "20",
        pages: "4143",
        doi: "10.3390/polym15204143",

        id: "Polymers2023",
        timelineTitle: "Palladium POP Catalysts",

        topic: [
            "Heterogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 5,
        year: 2020,
        dateValue: "2020-04-03",
        timelineDate: "Apr 2020",
        title: "The Synergy between the CsPbBr3 Nanoparticle Surface and the Organic Ligand Becomes Manifest in a Demanding Carbon–Carbon Coupling Reaction",
        authors: "I. Rosa-Pardo, C. Casadevall, L. Schmidt, M. Claros, R. E. Galian, J. Lloret-Fillol* and J. Pérez-Prieto*",
        journal: "Chem. Commun.",
        citation: "Chem. Commun., 2020, 56(37), 5026–5029",
        volume: "56",
        issue: "37",
        pages: "5026–5029",
        doi: "10.1039/D0CC01339K",

        id: "ChemCommun2020",
        timelineTitle: "Perovskites Photocatalysis",

        topic: [
            "Photochemistry",
            "Heterogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 4,
        year: 2020,
        dateValue: "2020-02-23",
        timelineDate: "Feb 2020",
        title: "Asymmetric Transfer Hydrogenation of Arylketones Catalyzed by Enantiopure Ruthenium(II)/Pybox Complexes Containing Achiral Phosphonite and Phosphinite Ligands",
        authors: "M. Claros, E. de Julián, J. Díez, E. Lastra and P. Gamasa*",
        journal: "Molecules",
        citation: "Molecules, 2020, 25(4), 990",
        volume: "25",
        issue: "4",
        pages: "990",
        doi: "10.3390/molecules25040990",

        id: "Molecules2020",
        timelineTitle: "Ru-Pybox Hydrogenation of Ketones",

        topic: [
            "Homogeneous Catalysis",
        ],

    },
    {
        type: "article",
        number: 3,
        year: 2019,
        dateValue: "2019-07-17",
        timelineDate: "Jul 2019",
        title: "Visible-Light Reductive Cyclization of Nonactivated Alkyl Chlorides",
        authors: "M. Claros, A. Casitas*, J. Lloret-Fillol*",
        journal: "Synlett",
        citation: "Synlett, 2019, 30(13), 1496–1507",
        volume: "30",
        issue: "13",
        pages: "1496–1507",
        doi: "10.1055/s-0037-1611878",

        id: "Synlett2019",
        review: true,   // listed under "Reviews & Book Chapters" in Research
        timelineTitle: "Reductive Cyclizations of Alk-Cl",

        topic: [
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 2,
        year: 2019,
        dateValue: "2019-03-08",
        timelineDate: "Mar 2019",
        title: "Reductive Cyclization of Unactivated Alkyl Chlorides with Tethered Alkenes under Visible‐Light Photoredox Catalysis",
        authors: "M. Claros, F. Ungeheuer, F. Franco, V. Martin‐Diaconescu, A. Casitas* and J. Lloret‐Fillol.*",
        journal: "Angew. Chem. Int. Ed.",
        citation: "Angew. Chem. Int. Ed., 2019, 58(15), 4869–4874",
        volume: "58",
        issue: "15",
        pages: "4869–4874",
        doi: "10.1002/anie.201812702",

        id: "ACIE2019",
        timelineTitle: "Vis-Light Reductive Cyclizations",

        topic: [
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
    {
        type: "article",
        number: 1,
        year: 2018,
        dateValue: "2017-12-11",
        timelineDate: "Dec 2017",
        title: "Practical Synthesis of Enantiopure Benzylamines by Catalytic Hydrogenation or Transfer Hydrogenation Reactions in Isopropanol Using a Ru-pybox Catalyst",
        authors: "E. de Julián, E. Menéndez, M. Claros, M. Vaquero, J. Díez, E. Lastra, P. Gamasa* and A. Pizzano*",
        journal: "Org. Chem. Front.",
        citation: "Org. Chem. Front., 2018, 5(5), 841–849",
        volume: "5",
        issue: "5",
        pages: "841–849",
        doi: "10.1039/C7QO00908A",

        id: "OCF2018",
        timelineTitle: "Ru-Pybox Hydrogenation",

        topic: [
            "Homogeneous Catalysis",
        ],
        
    },

];
const bookChapters = [
     {
        type: "Book Chapter",
        number: 1,
        year: 2022,
        dateValue: "2022-01-01",
        timelineDate: "Jan 2022",
        title: "Photoinduced Electron-Transfer in Coordination Compounds with First-Row Transition Metals: Fundaments and Catalytic Applications",
        authors: "N. Kandoth, M. Claros, N. Rodríguez and J. Lloret-Fillol*",
        book: "Photochemistry and Photophysics of Coordination Compounds",
        publisher: "Springer Handbooks",
        isbn: "978-3-030-63713-2",
        DOI: "10.1007/978-3-030-63713-2",
        pages: "493–546",
        isbn_link: "https://link.springer.com/chapter/10.1007/978-3-030-63713-2_20",
        
        id: "Springer2022",
        short: "Springer",   // label in the Research "Related outputs"
        timelineTitle: "First-Row Transition Metal Photocatalysts",

        topic: [
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
];
const patents = [
     {
        type: "European Patent",
        number: 1,
        year: 2019,
        dateValue: "2018-11-01",
        timelineDate: "Nov 2018",
        patent_number: "EP3404007A1",
        title: "Procedure for the activation of organic chloride compounds and a catalytic composition used in the process",
        inventors: "J. Lloret-Fillol, A. Casitas, M. Claros, F. Ungeheuer, J Aragón",
        link: "https://worldwide.espacenet.com/patent/search/family/059055226/publication/EP3404007A1?search_type=patents&q=EP3404007A1&filters=%5B%7B%22field%22%3A%22language%22%2C%22values%22%3A%5B%22en%22%5D%2C%22type%22%3A%22any%22%7D%5D",
    
        id: "EP3404007A1",
        timelineTitle: "Activation of organic chloride compounds",

        topic: [
            "Photochemistry",
            "Homogeneous Catalysis",
        ],
    },
];
const conferences = [
     {
        id: 1,
        year: 2018,
        type: "Oral Communication",
        title: "Development of Visible-Light Reductive Cyclization Reactions From Unactivated Chloroalkanes.",
        event: "21st_International Symposium on Homogeneous Catalysis",
        location: "Amsterdam (The Netherlands)",
        abstract: "assets/publications/abstractsConferences/Abstract_ISHC2018_MiguelClaros.pdf"
    },
    {
        id: 2,
        year: 2019,
        type: "Oral Communication",
        title: "Visible-Light Reductive Cyclization of Unactivated Alkyl Chlorides.",
        event: "4th EuCheMS Conference on Green and Sustainable Chemistry",
        location: "Tarragona (Spain)",
        abstract: "assets/publications/abstractsConferences/Abstract_EUChemS_MiguelClaros.pdf"
    },
    {
        id: 3,
        year: 2022,
        type: "Poster Presentation",
        title: "Mechanistic insights in the arylation of [FeCp(CO)2X] complexes using Zn/Cu/Au derivatives. Influence of the metallic counterpart.",
        event: "XXXVIII Biennial of Royal Spanish Society of Chemistry",
        location: "Granada (Spain)",
        abstract: "assets/publications/abstractsConferences/Abstract_BRSEQ2022_MiguelClaros.pdf.pdf"
    },
    {
        id: 4,
        year: 2025,
        type: "Oral Communication",
        title: "Design and Application of a Decatungstate-based Ionic Liquid Photocatalyst for Sustainable Hydrogen Atom Transfer Reactions.",
        event: "XL Biennial of Royal Spanish Society of Chemistry",
        location: "Bilbao (Spain)",
        abstract: "assets/publications/abstractsConferences/Abstract_BRSEQ2025_MiguelClaros.pdf"
    },
    {
        id: 5,
        year: 2025,
        type: "Oral Communication",
        title: "Automated Platforms for Reaction Optimization: Merging Self-Driving Labs with Flow Photochemistry.",
        event: "Barluenga Conference",
        location: "Oviedo (Spain)",
        abstract: "assets/publications/abstractsConferences/Abstract_BarluengaConference2025_MiguelClaros.pdf"
    },
];

// Totals shown in the summary line above the selected conference contributions.
// The list above shows only a selection, so these counts are kept by hand:
// add 1 to the matching number each time you present at a conference.
// Invited lectures are counted automatically from the invitedLectures list below.
const conferenceTotals = {
    oral: 9,
    poster: 11,
};

const invitedLectures = [
     {
        id: "IL1",
        year: 2025,
        event: "Invited Lecture",
        title: "Automated Platforms for Reaction Optimization: Merging Self-Driving Labs with Flow Photochemistry.",
        institution: "University of Valladolid",
        location: "Valladolid (Spain)",
        abstract: "assets/publications/abstractsConferences/Abstract_Valladolid_MiguelClaros.pdf"
    },
];

/*
====================================================
TOPIC FILTERS FOR JOURNAL ARTICLES
====================================================
Each button groups several "topic" tags. An article appears under a
filter if it has at least one of the filter's topics.
  label : text on the button
  icon  : optional path to a small icon, e.g. "assets/icons/publications/filters/flow.svg"
          (leave "" until the icons are ready)
  topics: the topic tags (exactly as written in each article) that belong here
  researchPanel: id of the Research panel that gets a "See all ... articles" link
          opening Publications with this filter (leave it out for no link)
The small tags under each article follow the order of its "topic" list:
put the main topic first.
Since 19-11-2026 each article's "topic" only uses the filter names
("Photochemistry", "Homogeneous Catalysis", "Heterogeneous Catalysis",
"Flow Chemistry", "Automation"), so what you
read in the list is exactly where the article appears. The same topics also
fill the "Research Articles" and "Reviews & Book Chapters" of each Research
panel (articles with review: true go under Reviews; conferences stay in index.html).
Catalysis was split into Homogeneous / Heterogeneous on 21-11-2026; both
filters share the Catalysis panel of Research (it gets two "See all" links).
*/

const publicationFilters = [
    {
        id: "photochemistry",
        researchPanel: "photochemistry-panel",
        label: "Photochemistry",
        icon: "assets/icons/publications/filters/photochemistry_1.svg",
        topics: ["Photochemistry"],
    },
    {
        id: "homogeneous",
        researchPanel: "catalysis-panel",
        label: "Homogeneous Catalysis",
        icon: "assets/icons/publications/filters/homogeneous_catalysis.svg",
        topics: ["Homogeneous Catalysis"],
    },
    {
        id: "heterogeneous",
        researchPanel: "catalysis-panel",
        label: "Heterogeneous Catalysis",
        icon: "assets/icons/publications/filters/heterogeneous_catalysis.svg",
        topics: ["Heterogeneous Catalysis"],
    },
    {
        id: "flow",
        researchPanel: "flow-panel",
        label: "Flow Chemistry",
        icon: "assets/icons/publications/filters/flow.svg",
        topics: ["Flow Chemistry"],
    },
    {
        id: "automation",
        researchPanel: "automation-panel",
        label: "Automation",
        icon: "assets/icons/publications/filters/automation_1.svg",
        topics: ["Automation"],
    },
];

/*
====================================================
FIND THE PUBLICATIONS CONTAINER IN THE HTML
====================================================
*/

// This finds the <div id="publications-list"></div> element in index.html.

const list = document.getElementById("publications-list");

/*
====================================================
GENERATE PUBLICATIONS
====================================================
*/

// For each publication in the publications array,
// create one HTML block and insert it into the page.

let currentYear = null;
publications.sort((a, b) => b.number - a.number);

publications.forEach(pub => {

    if (pub.year !== currentYear) {

    const yearHeading = document.createElement("h3");
    yearHeading.classList.add("publication-year");
    yearHeading.textContent = pub.year;

    list.appendChild(yearHeading);

    currentYear = pub.year;
    }
/*
====================================================
BUILD CITATION
====================================================
*/
    const citationParts = [];    

    if (pub.journal) {
        citationParts.push(`<span class="pub-journal">${pub.journal}</span>`);
    }

    if (pub.year) {
        citationParts.push(`<strong>${pub.year}</strong>`);
    }

    if (pub.volume) {
        const issueHTML = pub.issue ? `(${pub.issue})` : "";
        citationParts.push(`<span class="pub-volume">${pub.volume}</span>${issueHTML}`);
    }

    if (pub.pages) {
        citationParts.push(pub.pages);
    }

    const citationHTML = citationParts.join(", ");

/*
====================================================
CREATE PUBLICATION ITEM
====================================================
*/

    // Create a new div for one publication.
    const item = document.createElement("div");

    // Add the CSS class publication-item to that div.
    item.classList.add("publication-item");
    item.id = pub.id;

    // Highlight my name wherever it appears in the author list.
    const authors = highlightMyName(
    pub.authors
    );

    // If there is a DOI, create a clickable DOI link.
    const doiHTML = pub.doi
        ? ` <span class="doi">DOI: <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">${pub.doi}</a>.</span>`
        : "";

    // Define the HTML content of the publication.

    item.innerHTML = `
        <div class="pub-title">
            <span class="pub-number">[${pub.number}]</span>
            <em>${pub.title}.</em>
        </div>

        <div class="pub-authors">
            ${authors}
        </div>

        <div class="pub-citation">
             ${citationHTML}.${doiHTML}
        </div>
    `;
    
    // Add the publication to the publications list in the HTML.
    list.appendChild(item);
});

/*
====================================================
TOPIC FILTERS (buttons above Journal Articles)
====================================================
Builds the buttons from publicationFilters, adds small topic tags under
each article and shows/hides articles (and empty year headings).
*/

(function buildPublicationFilters() {

    const bar = document.getElementById("publication-filters");
    if (!bar || !list) return;

    // Groups of an article, in the order of its "topic" list: the first topic
    // is the main one, so its tag appears first under the article.
    const groupsOf = pub => {
        const topics = pub.topic || [];
        return publicationFilters
            .map(f => ({ id: f.id, rank: topics.findIndex(t => f.topics.includes(t)) }))
            .filter(g => g.rank >= 0)
            .sort((a, b) => a.rank - b.rank)
            .map(g => g.id);
    };

    // Mark each article with its groups and add the small tags under it.
    publications.forEach(pub => {
        const item = document.getElementById(pub.id);
        if (!item) return;
        const groups = groupsOf(pub);
        item.dataset.groups = groups.join(" ");
        if (groups.length) {
            const tags = document.createElement("div");
            tags.classList.add("pub-tags");
            tags.innerHTML = groups.map(id => {
                const f = publicationFilters.find(x => x.id === id);
                return `<button type="button" class="pub-tag" data-filter="${id}">${f.label}</button>`;
            }).join("");
            item.appendChild(tags);
        }
    });

    // Buttons: "All" + one per filter, with the number of articles.
    const allButtons = [{ id: "all", label: "All", icon: "" }, ...publicationFilters];
    bar.innerHTML = allButtons.map(f => {
        const n = f.id === "all"
            ? publications.length
            : publications.filter(p => groupsOf(p).includes(f.id)).length;
        const icon = f.icon ? `<img src="${f.icon}" alt="" class="filter-icon" width="34" height="34" loading="lazy">` : "";
        const active = f.id === "all" ? " active" : "";
        return `<button type="button" class="filter-btn${active}" data-filter="${f.id}" aria-pressed="${f.id === "all"}">`
             + `${icon}<span>${f.label}</span><span class="filter-count">${n}</span></button>`;
    }).join("");

    function applyFilter(id) {
        bar.querySelectorAll(".filter-btn").forEach(b => {
            const on = b.dataset.filter === id;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on);
        });
        list.querySelectorAll(".publication-item").forEach(item => {
            item.hidden = !(id === "all" || (item.dataset.groups || "").split(" ").includes(id));
        });
        // Hide a year heading when none of its articles is visible.
        list.querySelectorAll(".publication-year").forEach(h => {
            let el = h.nextElementSibling, anyVisible = false;
            while (el && !el.classList.contains("publication-year")) {
                if (!el.hidden) anyVisible = true;
                el = el.nextElementSibling;
            }
            h.hidden = !anyVisible;
        });
    }

    // After filtering, go back to the "Journal Articles" title (same smooth jump and
    // header offset as the menu links, via scroll-margin-top in style.css), so the
    // reader always sees the start of the filtered list.
    function goToArticlesTop() {
        const title = document.getElementById("journal-articles");
        if (title) title.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    bar.addEventListener("click", e => {
        const b = e.target.closest(".filter-btn");
        if (!b) return;
        applyFilter(b.dataset.filter);
        goToArticlesTop();
    });

    // Clicking a small tag under an article applies that filter.
    list.addEventListener("click", e => {
        const t = e.target.closest(".pub-tag");
        if (!t) return;
        applyFilter(t.dataset.filter);
        goToArticlesTop();
    });

    // "See all ... articles" link at the end of each Research panel: it opens
    // Journal Articles with that panel's filter already applied.
    publicationFilters.forEach(f => {
        const panel = f.researchPanel && document.getElementById(f.researchPanel);
        if (!panel) return;
        const n = publications.filter(p => groupsOf(p).includes(f.id)).length;
        const icon = f.icon ? `<img src="${f.icon}" alt="" width="28" height="28" loading="lazy">` : "";
        const p = document.createElement("p");
        p.classList.add("see-related");
        p.innerHTML = `<a href="#journal-articles" data-filter="${f.id}">${icon}`
                    + `<span>See all ${f.label} articles (${n}) &rarr;</span></a>`;
        panel.appendChild(p);
    });

    // "Related outputs" of each Research panel: the "Research Articles" and
    // "Reviews & Book Chapters" lines are filled here from the topics, in the
    // <div class="related-pubs"> placeholder of index.html.
    document.querySelectorAll(".research-panel").forEach(panel => {
        const box = panel.querySelector(".related-pubs");
        if (!box) return;
        const ids = publicationFilters.filter(f => f.researchPanel === panel.id).map(f => f.id);
        const inPanel = p => groupsOf(p).some(g => ids.includes(g));
        const byNumber = (a, b) => a.number - b.number;
        const link = (id, n, label) => `<a href="#${id}">[${n}]</a> <em>${label}</em>`;
        const line = (title, items) => items.length
            ? `<p class="related-outputs-list"><strong>${title}</strong><br>${items.join(", ")}.</p>` : "";
        const arts = publications.filter(inPanel).sort(byNumber);
        const chapters = (typeof bookChapters !== "undefined" ? bookChapters : []).filter(inPanel).sort(byNumber);
        box.innerHTML =
            line("Research Articles", arts.filter(p => !p.review)
                .map(p => link(p.id, p.number, `${p.journal} ${p.year}`)))
          + line("Reviews &amp; Book Chapters", [
                ...chapters.map(c => link(c.id, "BC" + c.number, `${c.short || c.publisher} ${c.year}`)),
                ...arts.filter(p => p.review).map(p => link(p.id, p.number, `${p.journal} ${p.year}`)),
            ]);
    });

    document.addEventListener("click", e => {
        const a = e.target.closest(".see-related a");
        if (!a) return;
        e.preventDefault();
        applyFilter(a.dataset.filter);
        goToArticlesTop();
    });

    // Links to an article (from Research, Projects or News) still work when
    // a filter is hiding it: the filter is reset to "All" first.
    document.addEventListener("click", e => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const target = document.getElementById(a.getAttribute("href").slice(1));
        if (target && target.hidden && list.contains(target)) applyFilter("all");
    }, true);

})();

/*
====================================================
GENERATE BOOK CHAPTERS
====================================================
*/

const bookChaptersContainer = document.getElementById("bookchapters-container");

if (bookChaptersContainer && typeof bookChapters !== "undefined") {
    bookChapters.forEach(chapter => {

        const authors = highlightMyName(chapter.authors);

        const citationParts = [];

        if (chapter.book) {
            citationParts.push(`<span class="pub-journal">${chapter.book}</span>`);
        }

        if (chapter.publisher) {
            citationParts.push(`<span class="pub-journal">${chapter.publisher}</span>`);
        }
        
        if (chapter.year) {
            citationParts.push(`<strong>${chapter.year}</strong>`);
        }

        if (chapter.pages) {
            citationParts.push(chapter.pages);
        }

        if (chapter.isbn) {
            const isbnHTML = chapter.isbn_link
                ? `ISBN: <a href="${chapter.isbn_link}" target="_blank" rel="noopener noreferrer">${chapter.isbn}</a>`
                : `ISBN: ${chapter.isbn}`;

            citationParts.push(`<span class="isbn">${isbnHTML}</span>`);
        }

        

        const citationHTML = citationParts.join(", ");

        const item = document.createElement("div");
        item.classList.add("publication-item");
        item.id = chapter.id;

        item.innerHTML = `
            <h3 class="publication-year">${chapter.year}</h3>

            <div class="pub-title">
                <span class="pub-number">[BC${chapter.number}]</span>
                <em>${chapter.title}.</em>
            </div>

            <div class="pub-authors">
                ${authors}
            </div>

            <div class="pub-citation">
                ${citationHTML}.
            </div>
        `;

        bookChaptersContainer.appendChild(item);
    });
}

/*
====================================================
FIND THE PATENT CONTAINER IN THE HTML & Generate reference
====================================================
*/

const patentsContainer = document.getElementById("patents-container");

if (patentsContainer) {
    patents.forEach(patent => {

        const inventors = highlightMyName(patent.inventors);

       const item = document.createElement("div");
        item.classList.add("publication-item");
        item.id = patent.id;

        item.innerHTML = `
            <h3 class="publication-year">
                ${patent.year}
            </h3>

            <div class="pub-title">
                <span class="pub-number">[P${patent.number}]</span>
                <em>${patent.title}.</em>
            </div>

            <div class="pub-authors">
                ${inventors}
            </div>

            <div class="pub-citation">
                <em>${patent.type}</em>,
                <a href="${patent.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="patent-link">
                    ${patent.patent_number}
                </a>.
            </div>
        `;

        patentsContainer.appendChild(item);
    });
}

/*
====================================================
GENERATE CONFERENCE CONTRIBUTIONS
====================================================
*/

const conferencesContainer =
    document.getElementById("conferences-container");

if (conferencesContainer) {

    // Summary + selected title (numbers come from conferenceTotals + invitedLectures)
    const nInvited = invitedLectures.length;
    const nTotal = conferenceTotals.oral + conferenceTotals.poster + nInvited;

    conferencesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="conference-summary">
            ${nTotal} National and International conferences: ${conferenceTotals.oral} Oral Communications · ${conferenceTotals.poster} Posters · ${nInvited} Invited Lecture${nInvited === 1 ? "" : "s"}
        </div>

        <div class="conference-selected">
            Selected Contributions:
        </div>
        `
    );

    // Selected conferences
    conferences.forEach(conf => {

        const item = document.createElement("div");
        item.classList.add("publication-item");
        item.classList.add("conference-item");
        item.id = `conference-${conf.id}`;

        const abstractHTML = conf.abstract
            ? `
                <a href="${conf.abstract}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="conference-abstract-link">
                        <img src="assets/icons/publications/abstracts.svg" alt="Abstract">
                        Abstract
                </a>
            `
            : "";

        item.innerHTML = `
            <div class="pub-title">
                <span class="pub-number">[${conf.id}]</span>
                <em>${conf.title}</em>
            </div>

            <div class="pub-citation">
                <span class="conference-event">${conf.event}</span>,
                ${conf.location},
                <strong>${conf.year}</strong>.
                ${abstractHTML}
            </div>
        `;

        conferencesContainer.appendChild(item);
    });

    // Invited lectures title
    conferencesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="conference-selected invited-lectures-title">
            Invited Lectures:
        </div>
        `
    );

    // Invited lectures
    invitedLectures.forEach(lecture => {

        const item = document.createElement("div");
        item.classList.add("publication-item");
        item.classList.add("conference-item");
        item.classList.add("invited-lecture-item");
        item.id = `invited-lecture-${lecture.id}`;

        const abstractHTML = lecture.abstract
            ? `
                <a href="${lecture.abstract}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="conference-abstract-link">
                        <img src="assets/icons/publications/abstracts.svg" alt="Abstract">
                        Abstract
                </a>
            `
            : "";

        item.innerHTML = `
            <div class="pub-title">
                <span class="pub-number">[${lecture.id}]</span>
                <em>${lecture.title}</em>
            </div>

            <div class="pub-citation">
                <span class="conference-event">${lecture.event}</span>,
                ${lecture.location},
                <strong>${lecture.year}</strong>.
                ${abstractHTML}
            </div>
        `;

        conferencesContainer.appendChild(item);
    });
}


