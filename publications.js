
//Publications Miguel
// Date: 13-06-2026

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
        number: 12,
        year: 2026,
        dateValue: "Jun 2026",
        timelineDate: "2026-06-13",
        title: "Redefining Synthetic Efficiency: Chemical and Technological Shortcuts",
        authors: "J. Djossou, M. Claros, O. Bayley and T. Noël*",
        journal: "Chem",
        citation: "",
        volume: "",
        pages: "",
        doi: "",

        id: "Chem2026",
        timelineTitle: "Chemical and Technological Shortcuts",

        topic: [
            "Photochemistry",
            "Automation",
            "Self-Driving Labs",
            "Catalysis",
        ],
    },
    {
        type: "article",
        number: 11,
        year: 2026,
        dateValue: "Dec 2025",
        timelineDate: "2025-12-14",
        title: "Closed-Loop Photoreactor Design Enabled by Machine Learning and Digital Twins",
        authors: "J. H. A. Schuurmans‡, M. Claros‡, E. Savino, F. Lukas, A. Slattery and T. Noël*",
        journal: "ChemRxiv",
        citation: "2025, s7b3k",
        volume: "",
        pages: "s7b3k",
        doi: "10.26434/chemrxiv-2025-s7b3k",

        id: "ChemRxiv2025",
        timelineTitle: "Photoreactor Design",

        topic: [
            "Photochemistry",
            "Automation",
            "Self-Driving Labs",
            "Chemical Engineering",
            "Reactor Design",
            "Catalysis",
        ],
    },
    {
        type: "article",
        number: 10,
        year: 2026,
        dateValue: "Apr 2026",
        timelineDate: "2026-04-27",
        title: "A Flexible and Affordable Self-Driving Laboratory for Automated Reaction Optimization",
        authors: "S. Pilon‡, E. Savino‡, O. Bayley‡, M. Vanzella, M. Claros, P. Siasiaridis, J. Liu, F. Lukas, M. Damian, V. Tseliou, N. Intini, A. Slattery, J. Orduna, T. den Hartog, R. Peters, A. Gargano, F. Mutti and T. Noël*",
        journal: "Nat. Synth.",
        citation: "2026",
        volume: "",
        pages: "",
        doi: "10.1038/s44160-026-01053-0",

        id: "NatSynth2026",
        timelineTitle: "Robochem-Flex",

        topic: [
            "Photochemistry",
            "Flow Chemistry",
            "Automation",
            "Self-Driving Labs",
            "Chemical Engineering",
            "Reactor Design",
            "Catalysis",
        ],
    },
    {
        type: "article",
        number: 9,
        year: 2025,
        dateValue: "Jun 2025",
        timelineDate: "2025-06-03",
        title: "Design and Application of a Decatungstate-based Ionic Liquid Photocatalyst for Sustainable Hydrogen Atom Transfer Reactions",
        authors: "M. Claros, J. Quévarec, S. Fernández-García and T.Noel*",
        journal: "Green. Chem.",
        citation: "Green. Chem., 2025, 27, 7660",
        volume: "27",
        pages: "7660",
        doi: "10.1039/D5GC02160J",

        id: "GreenChem2025",
        timelineTitle: "Decatungstate Ionic Liquid",

        topic: [
            "Photochemistry",
            "Flow Chemistry",
            "Green Chemistry",
            "Catalysis"
        ],
    },
    {
        type: "article",
        number: 8,
        year: 2025,
        dateValue: "Jan 2025",
        timelineDate: "2025-01-06",
        title: "Interaction of Light with Gas–Liquid Interfaces: Influence on Photon Absorption in Continuous-Flow Photoreactors",
        authors: "J.H. A. Schuurmans, S. D. A. Zondag, A. Chaudhuri, M. Claros, J. van der Schaaf, and T.Noel*",
        journal: "React. Chem. Eng.",
        citation: "React. Chem. Eng., 2025, 10, 790",
        volume: "10",
        pages: "790",
        doi: "10.1039/D4RE00540F",

        id: "ReactChemEng2025",
        timelineTitle: "Interaction of Light with Gas–Liquid Interfaces",

        topic: [
            "Photochemistry",
            "Flow Chemistry",
            "Chemical Engineering"
        ],
    },
    {
        type: "article",
        number: 7,
        year: 2024,
        dateValue: "Nov 2024",
        timelineDate: "2024-11-08",
        title: "Light-assisted Carbon Dioxide Reduction in an Automated Photoreactor System Coupled to Carbonylation Chemistry",
        authors: "J. H. A. Schuurmans‡, T. M. Masson‡, S. D. A. Zondag‡, S. Pilon, N. Bragato, M. Claros, T. den Hartog, F. Sastre, J. van den Ham, P. Buskens, G. Fiorani and T. Noel*",
        journal: "Chem. Sci.",
        citation: "Chem. Sci., 2024, 15, 19842",
        volume: "15",
        pages: "19842",
        doi: "10.1039/D4SC06660J",

        id: "ChemSci2024",
        timelineTitle: "Automated CO2 Reduction",

        topic: [
            "Photochemistry",
            "Flow Chemistry",
            "Automation",
            "Reactor Design",
            "CO2 Valorization",
            "Catalysis",
            "Chemical Engineering"
        ],
    },
    {
        type: "article",
        number: 6,
        year: 2023,
        dateValue: "Oct 2023",
        timelineDate: "2023-10-19",
        title: "Palladium Catalysts Supported in Microporous Phosphine Polymer Networks",
        authors: "N. Esteban, M. Claros, C. Álvarez, A. E. Lozano, C. Bartolomé*, J. M. de Ilarduya, J. A. Miguel*",
        journal: "Polymers",
        citation: "Polymers, 2023, 15(20), 4143",
        volume: "15",
        pages: "4143",
        doi: "10.3390/polym15204143",

        id: "Polymers2023",
        timelineTitle: "Palladium POP Catalysts",

        topic: [
            "Organometallic Chemistry",
            "Catalyst Design",
            "Supported Catalysis",
            "Catalysis"
        ],
    },
    {
        type: "article",
        number: 5,
        year: 2020,
        dateValue: "Mar 2020",
        timelineDate: "2020-03-25",
        title: "The Synergy between the CsPbBr3 Nanoparticle Surface and the Organic Ligand Becomes Manifest in a Demanding Carbon–Carbon Coupling Reaction",
        authors: "I. Rosa-Pardo, C. Casadevall, L. Schmidt, M. Claros, R. E. Galian, J. Lloret-Fillol* and J. Pérez-Prieto*",
        journal: "Chem. Commun.",
        citation: "Chem. Commun., 2020, 56, 5026",
        volume: "56",
        pages: "5026",
        doi: "10.1039/D0CC01339K",

        id: "ChemCommun2020",
        timelineTitle: "Perovskites Photocatalysis",

        topic: [
            "Photochemsitry",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Catalysis"
        ],
    },
    {
        type: "article",
        number: 4,
        year: 2020,
        dateValue: "Feb 2020",
        timelineDate: "2020-02-23",
        title: "Asymmetric Transfer Hydrogenation of Arylketones Catalyzed by Enantiopure Ruthenium(II)/Pybox Complexes Containing Achiral Phosphonite and Phosphinite Ligands",
        authors: "M. Claros, E. de Julián, J. Díez, E. Lastra and P. Gamasa*",
        journal: "Molecules",
        citation: "Molecules 2020, 25(4), 990",
        volume: "25",
        pages: "990",
        doi: "10.3390/molecules25040990",

        id: "Molecules2020",
        timelineTitle: "Ru-Pybox Hydrogenation of Ketones",

        topic: [
            "Photochemsitry",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Catalysis"
        ],

    },
    {
        type: "article",
        number: 3,
        year: 2019,
        dateValue: "Jul 2019",
        timelineDate: "2019-07-17",
        title: "Visible-Light Reductive Cyclization of Nonactivated Alkyl Chlorides",
        authors: "M. Claros, A. Casitas*, J. Lloret-Fillol*",
        journal: "Synlett",
        citation: "Synlett 2019, 30, 1496",
        volume: "30",
        pages: "1496",
        doi: "10.1055/s-0037-1611878",

        id: "Synlett2019",
        timelineTitle: "Reductive Cyclizations oc Alk-Cl",

        topic: [
            "Photochemsitry",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Catalysis"
        ],
    },
    {
        type: "article",
        number: 2,
        year: 2019,
        dateValue: "2019-02-01",
        timelineDate: "Feb 2019",
        title: "Reductive Cyclization of Unactivated Alkyl Chlorides with Tethered Alkenes under Visible‐Light Photoredox Catalysis",
        authors: "M. Claros, F. Ungeheuer, F. Franco, V. Martin‐Diaconescu, A. Casitas* and J. Lloret‐Fillol.*",
        journal: "Angew. Chem. Int. Ed.",
        citation: "Angew. Chem. Int. Ed. 2019, 58, 4869",
        volume: "58",
        pages: "4869",
        doi: "10.1002/anie.201812702",

        id: "ACIE2019",
        timelineTitle: "Vis-Light Reductive Cyclizations",

        topic: [
            "Photochemsitry",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Reactor Design",
            "Catalysis"
        ],
    },
    {
        type: "article",
        number: 1,
        year: 2018,
        dateValue: "2017-12-01",
        timelineDate: "Dec 2017",
        title: "Practical Synthesis of Enantiopure Benzylamines by Catalytic Hydrogenation or Transfer Hydrogenation Reactions in Isopropanol Using a Ru-pybox Catalyst",
        authors: "E. de Julián, E. Menéndez, M. Claros, M. Vaquero, J. Díez, E. Lastra, P. Gamasa* and A. Pizzano*",
        journal: "Org. Chem. Front.",
        citation: "Org. Chem. Front., 2018, 5, 841",
        volume: "5",
        pages: "841",
        doi: "10.1039/C7QO00908A",

        id: "OCF2018",
        timelineTitle: "Ru-Pybox Hydrogenation",

        topic: [
            "Organometallic Chemistry", 
            "Enantioselective Catalysis",
            "Catalyst Design",
            "Catalysis"
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
        pages: "493-546",
        isbn_link: "https://link.springer.com/chapter/10.1007/978-3-030-63713-2_20",
        
        id: "Springer2022",
        timelineTitle: "First-Row Transition Metal Photocatalysts",

        topic: [
            "Photocatalysis",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Catalysis"
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
            "Photocatalysis",
            "Organometallic Chemistry",
            "Catalyst Design",
            "Catalysis"
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
        citationParts.push(`<span class="pub-volume">${pub.volume}</span>`);
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

    // Summary + selected title
    conferencesContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="conference-summary">
            21 National and International conferences: 9 Oral Communications · 11 Posters · 1 Invited Lecture
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


