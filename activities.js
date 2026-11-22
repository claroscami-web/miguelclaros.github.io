/*
================================================
ACTIVITIES DATA: Teaching, Mentoring, Outreach, Skills, Memberships
and Complementary Activities
================================================
Each list below fills a <div data-fill="..."> placeholder in index.html
(the placeholder is replaced by the generated HTML, so the page looks exactly
as if it were written by hand). To add something, add one line to the list.

Simple item:  { title: "...", after: "...", lines: ["...", "..."] }
  -> <strong>title</strong>after<br>line 1<br>line 2
Student:      { name: "...", topic: "...", where: "UVa", year: 2026,
                from: "University" (optional), extra: "co-promotor" (optional) }
The student counts, e.g. "Bachelor's Students (4)", are calculated automatically.
*/

const teachingData = {
    courses: [
        { title: "Basic Laboratory Operations", after: ", University of Valladolid · BSc Chemistry (2021–2022).",
          lines: ["Practical laboratory instruction covering laboratory safety, experimental techniques, data analysis and scientific reporting."] },
    ],
    lectures: [
        { title: "Automated Platforms for Reaction Optimization:", after: " Merging Self-Driving Labs with Flow Photochemistry",
          lines: ["Lecture introducing flow chemistry, automation and sustainable chemical manufacturing to master and phd students at IU-CINQUIMA."] },
    ],
    workshops: [
        { title: "INNOVATING Organic Chemistry:", after: " Exploring Technology &amp; Sustainable Solutions.",
          lines: ["Artificial Photosynthesis to Produce Fuels and Chemicals: Hybrid Systems for Improved Light Harvesting and CO2 Reduction (Photo2Fuel).",
                  "Reactor Development and Scale-up process."] },
        { title: "Visible Light Promoted Activation of Alkyl Halides", after: ".",
          lines: ["One-day activity at ICIQ: Prof. Kazushi Mashima´s group Visit."] },
        { title: "Research at Lloret-Fillol´s Group", after: ".",
          lines: ["Open days at ICIQ 2019."] },
    ],
};

const mentoringData = {
    selected: [
        { title: "ICIQ: ", after: "Mentoring of undergraduate, Master's and PhD researchers in photocatalysis and mechanistic investigations." },
        { title: "University of Valladolid (UVa): ", after: "Daily supervision of undergraduate and doctoral researchers in organometallic chemistry and supported catalysis." },
        { title: "University of Amsterdam (UvA): ", after: "Co-supervision of PhD and Master's students working on automation, flow chemistry and sustainable synthesis." },
    ],
    groups: [
        { title: "Bachelor's Students", students: [
            { name: "Víctor Mateos", topic: "Flow reactor design", where: "ICIQ", year: 2018 },
            { name: "María Hurtado", topic: "Catalyst design and photocatalytic bond activation", where: "UVa", year: 2021 },
            { name: "Martín Ivanov", topic: "Ligand design for photoredox catalysis", where: "UVa", year: 2021 },
            { name: "Ana Montero", topic: "Catalyst design for photocatalytic HAT", where: "UVa", year: 2022 },
        ] },
        { title: "Master's Students", students: [
            { name: "Suyun Sun", topic: "Visible-light Photoredox Catalysis", where: "ICIQ", year: 2019 },
            { name: "Julian Quévarec", topic: "Decatungstate Ionic Liquid for photocatalytic HAT", where: "UvA", year: 2024 },
            { name: "Bente Reus", topic: "Laboratory automation and data-driven optimization", where: "UvA", year: 2024 },
        ] },
        { title: "PhD Students", students: [
            { name: "Jordi Aragón", topic: "Visible-light Photoredox Catalysis", where: "ICIQ", year: 2018 },
            { name: "Guillermo Marcos", topic: "Organometallic chemistry and photoredox catalysis", where: "UVa", year: 2021 },
            { name: "Diego Tur de Montis", topic: "Laboratory automation and data-driven optimization", where: "UvA", year: 2026, extra: "co-promotor" },
        ] },
        { title: "Visiting PhD Researchers", students: [
            { name: "Nicola Bragato", from: "Ca' Foscari University of Venice", topic: "Automated photoreactor systems and CO2 valorization", where: "UvA", year: 2023 },
            { name: "Sara Fernández", from: "University of Murcia", topic: "Flow chemistry Photoredox catalysis", where: "UvA", year: 2024 },
        ] },
    ],
};

const outreachData = {
    communication: [
        { title: "Inside Scientific Research: From a Small Village to a Scientific Career.",
          lines: ["Outreach lecture delivered to secondary school students in Asturias, introducing scientific careers, research pathways and the role of science in everyday life."] },
        { title: "Flow Chemistry and Modern Chemical Technologies.",
          lines: ["Outreach lecture for high-school students presenting flow chemistry, laboratory automation and sustainable chemical technologies."] },
    ],
    events: [
        { title: "3rd PhD Day Congress, Institute of Chemical Research of Catalonia (ICIQ)",
          lines: ["Member of the organizing committee, involved in speaker coordination, program development, session chairing, logistics and event management. Additionally responsible for the design of the congress logo, visual identity and promotional materials. (Tarragona, Spain)."] },
        { title: "Enabling Technologies for Organic Chemistry (ETOC)",
          lines: ["Member of the organizing team of the online seminar series hosted by the University of Amsterdam, bringing together researchers working in flow chemistry, automation and organic chemistry (2025)."] },
        { title: "1st PhD Day Congress, University of Valladolid (UVa)",
          lines: ["Assistant organizer of the first PhD Day congress, supporting the coordination and execution of the event (Valladolid, Spain)."] },
    ],
};

// Skills: "items" are joined with " · "; "sub" gives labelled lines (e.g. Software)
const skillsData = [
    { title: "Research Areas", items: ["Photocatalysis", "Flow Chemistry", "Organometallic Chemistry", "Sustainable Catalysis", "Laboratory Automation"] },
    { title: "Laboratory Skills", items: ["Inert Atmosphere techniques (Schlenk, glovebox)", "Reactor Design", "High-Throughput Experimentation", "Automated Optimization", "Data Analysis"] },
    { title: "Software", sub: [
        { label: "Chemistry", items: ["ChemDraw", "Gaussian", "Avogadro", "MestreNova", "TopSpin", "Copasi"] },
        { label: "Graphical Design", items: ["Illustrator", "Photoshop", "Fusion", "FreeCAD"] },
        { label: "Programming and languages", items: ["PyCharm", "GitHub", "Origin", "Python", "R", "HTML"] },
    ] },
    { title: "Technical Skills", items: ["3D-Printing", "Soldering", "Carpentry", "Electronics", "Plumbing"] },
];

// Memberships: logo grid (extraClass adds a class to the item, e.g. "jiq")
const membershipsData = [
    { href: "https://rseq.org/", logo: "assets/logos/institution_logos/RSEQ.svg", alt: "RSEQ" },
    { href: "https://geqo.rseq.org/", logo: "assets/logos/institution_logos/GECO.svg", alt: "GECO" },
    { href: "https://jiq.rseq.org", logo: "assets/logos/institution_logos/JIQ.svg", alt: "JIQ", extraClass: "jiq" },
    { href: "https://www.rsc.org/", logo: "assets/logos/institution_logos/RSC.svg", alt: "RSC" },
];

// Complementary activities: groups of { title, text }
const complementaryData = [
    { title: "Leadership & Responsibilities", items: [
        { title: "Work Package Leader (WP4 – Scale-up).", text: "Photo2Fuel Consortium – Coordination of reactor scale-up activities and collaboration between academic and industrial partners within an international Horizon Europe project." },
        { title: "Research Project Leadership.", text: "Development and management of independent research projects in photocatalysis, flow chemistry, and laboratory automation across multiple institutions." },
        { title: "Student Supervision and Mentoring.", text: "Guidance of undergraduate, Master’s, PhD, and visiting researchers in experimental design, data analysis, and scientific communication." },
        { title: "Laboratory Management and Safety.", text: "Lab Safety Coordinator at ICIQ, contributing to safe laboratory practices, training, and infrastructure management." },
        { title: "Scientific Infrastructure Development.", text: "Design, construction, operation, and maintenance of advanced research equipment, including photochemical reactors, gloveboxes, chromatography systems, automated platforms, and analytical instrumentation." },
    ] },
    { title: "Scientific Training & Courses", items: [
        { title: "Scientific Communications.", text: "Oral presentation, Biomedicine course by Steve foundation (Tarragona, Spain)" },
        { title: "Analytical Chemistry & Automation.", text: "ACS Webinars: High-Throughput Automation; UHPLC method development, and rapid online analysis of reactions" },
        { title: "Artificial Intelligence.", text: "Elements of Artificial Intelligence – a Crash Course on Machine Learning for Chemists (Amsterdam, The Netherlands)." },
        { title: "Specialized Training.", text: "Course “Drugs Are Molecules: Design, Structure and Function” (UIMP, Santander, Spain)." },
        { title: "Specialized Training.", text: "“Bridge” course on Interprofessional Relations (Tarragona, Spain)." },
    ] },
    { title: "Safety & Emergency Training", items: [
        { title: "Emergency Response.", text: "DEA training, Spanish Red Cross (Tarragona, Spain)." },
        { title: "Fire Safety.", text: "Basic Firefighting and Rescue, School of Emergencies of Catalonia (Tarragona, Spain)" },
        { title: "Water Rescue.", text: "First Aid Lifeguard and Water Rescue, Federation of Rescue and Lifesaving of Asturias (Gijón, Spain)." },
    ] },
    { title: "Sports", items: [
        { title: "Federated Swimmer.", text: "RFEN (2003 – 2016)." },
        { title: "Swimming Coach.", text: "Las Anclas Swimming Team (2014 – 2016)." },
        { title: "Swimming Referee.", text: "Asturian Swimming Federation (2014 – 2016)." },
    ] },
];

/*
================================================
RENDER (no need to touch below)
================================================
*/
(function renderActivities() {
    const li = it => `<li><strong>${it.title}</strong>${it.after || ""}${(it.lines || []).map(l => "<br>" + l).join("")}</li>`;
    const ul = items => `<ul class="teaching-list">${items.map(li).join("")}</ul>`;
    const student = s => `<li><strong>${s.name}${s.from ? `</strong> <em>(${s.from})</em>:` : ":</strong>"} ${s.topic} (${s.where}, ${s.year}).${s.extra ? ` <strong>${s.extra}</strong>` : ""}</li>`;

    const html = {
        teaching:
            `<h5>Courses</h5>${ul(teachingData.courses)}` +
            `<h5>Lectures &amp; Training</h5>${ul(teachingData.lectures)}` +
            `<h5>Workshops</h5>${teachingData.workshops.map(w => ul([w])).join("")}`,
        mentoring:
            `<h5>Selected Supervision Activities</h5>${ul(mentoringData.selected)}` +
            `<h5>Supervision Summary</h5><div class="teaching-list">` +
            mentoringData.groups.map(g => `<h5>${g.title} (${g.students.length})</h5><ul>${g.students.map(student).join("")}</ul>`).join("") +
            `</div>`,
        outreach:
            `<h5>Science Communication</h5>${ul(outreachData.communication)}` +
            `<h5>Event Organization</h5>${ul(outreachData.events)}`,
        skills: skillsData.map(g => `<h4>${g.title}</h4>` + (g.items
            ? `<p>${g.items.join(" · ")}</p>`
            : g.sub.map(s => `<p><strong>${s.label}: </strong>${s.items.join(" · ")}</p>`).join(""))).join(""),
        memberships: `<div class="membership-grid">` + membershipsData.map(m =>
            `<div class="membership-item${m.extraClass ? " " + m.extraClass : ""}"><a href="${m.href}" target="_blank" rel="noopener noreferrer">` +
            `<img loading="lazy" decoding="async" src="${m.logo}" alt="${m.alt}"></a></div>`).join("") + `</div>`,
        complementary: complementaryData.map(g => `<h4>${g.title.replace(/&/g, "&amp;")}</h4>` +
            g.items.map(i => `<p><strong>${i.title.replace(/&/g, "&amp;")}</strong> ${i.text}</p>`).join("")).join(""),
    };

    document.querySelectorAll("[data-fill]").forEach(el => {
        const content = html[el.dataset.fill];
        if (content !== undefined) el.outerHTML = content;
    });
})();
