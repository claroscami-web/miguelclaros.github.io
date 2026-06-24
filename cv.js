/*
====================================================
TIMELINE SCALE
====================================================
*/
const timelineStart = new Date("2009-09-01");
const timelineEnd = new Date("2026-06-30");

const timelineSegments = [
    {
        realStart: new Date("2009-09-01"),
        realEnd: new Date("2015-12-31"),
        visualStart: 0,
        visualEnd: 17
    },
    {
        realStart: new Date("2016-03-01"),
        realEnd: new Date("2020-06-30"),
        visualStart: 18,
        visualEnd: 48
    },
    {
        realStart: new Date("2021-03-01"),
        realEnd: new Date("2022-12-31"),
        visualStart: 50,
        visualEnd: 70
    },
    {
        realStart: new Date("2023-01-01"),
        realEnd: new Date("2026-06-30"),
        visualStart: 70,
        visualEnd: 100
    }
];

function getTimelinePosition(dateString) {
    const date = new Date(dateString);

    for (const segment of timelineSegments){

        if (date >= segment.realStart && date <= segment.realEnd){

            const segmentRealDuration = segment.realEnd - segment.realStart;
            const elapsedInSegment = date - segment.realStart;

            const fraction = elapsedInSegment / segmentRealDuration;

            return segment.visualStart +
                   fraction * (segment.visualEnd - segment.visualStart);
        }
    }

    return 0;
}

/*
====================================================
CV TIMELINE DATA
====================================================
*/

const cvInstitutions = [
    {
        title: "University of Oviedo",
        logo: "assets/logos/institution_logos/UniOvi.svg",
        startDate: "2009-09-01",
        endDate: "2015-12-31"
    },
    {
        title: "Institut of Chemical Research of Catalonia",
        logo: "assets/logos/institution_logos/ICIQ.svg",
        startDate: "2016-03-01",
        endDate: "2020-06-10",
        profileLink: "https://iciq.org/staff/claros-miguel/"
    },
    {
        title: "University of Valladolid",
        logo: "assets/logos/institution_logos/UVa.svg",
        startDate: "2021-03-01",
        endDate: "2022-12-31",
        profileLink: "https://portaldelaciencia.uva.es/investigadores/181946/detalle"
    },
    {
        title: "University of Amsterdam",
        logo: "assets/logos/institution_logos/UvAmsterdam.svg",
        startDate: "2023-01-01",
        endDate: "2026-06-30",
        profileLink: "https://www.noelresearchgroup.com/former-group-members/miguel-claros-casielles-2/"
    },
]

const publicationEvents = publications.map(pub => ({

    type: "publication",
    number: pub.number,
    date: pub.timelineDate,
    dateValue: pub.dateValue,
    title: pub.timelineTitle || pub.title,
    subtitle: pub.topics?.[0] || "",
    description: pub.citation,
    publicationId: pub.id,

    side: "bottom",
    hasWhiteBackground: true,

    icon: "assets/icons/publications/articles.svg",
    iconSize: 45,
    dotIcon: `assets/dots/publication_dots.svg`,
    dotSize: 16

}));

const bookChapterEvents = bookChapters.map(book => ({

    type: "bookChapter",
    number: book.number,
    date: book.timelineDate,
    dateValue: book.dateValue,
    title: book.timelineTitle || book.title,
    subtitle: "Book Chapter",
    description: book.citation,
    publicationId: book.id,

    side: "bottom",
    hasWhiteBackground: true,

    icon: "assets/icons/publications/publications.svg",
    iconSize: 45,
    dotIcon: `assets/dots/publication_dots.svg`,
    dotSize: 16

}));

const patentEvents = patents.map(pat => ({

    type: "patent",
    number: pat.number,
    date: pat.timelineDate,
    dateValue: pat.dateValue,
    title: pat.timelineTitle || pat.title,
    subtitle: "European Patent",
    description: pat.patent_number || pat.citation,
    publicationId: pat.id,

    side: "bottom",
    hasWhiteBackground: true,

    icon: "assets/icons/publications/patent.svg",
    iconSize: 45,
    dotIcon: `assets/dots/publication_dots.svg`,
    dotSize: 16

}));

const cvEvents = [
    /*
    ====================================================
    Positions
    ====================================================*/
    {
        date: "09/2009",
        dateValue: "2009-09-01",
        title: "BSc in Chemistry",
        subtitle: "Bachelor Student",
        type: "education",
        side: "top",
    },
    {
        date: "03/2016 - 06/2020",
        dateValue: "2016-03-01",
        title: "Institut of Chemical Research of Catalonia",
        subtitle: "PhD Student",
        type: "research",
        side: "top",
    },
    {
        date: "07/2015 - 12/2015",
        dateValue: "2021-03-01",
        title: "University of Valladolid",
        subtitle: "Postdoctoral Researcher",
        type: "research",
        side: "top",
    },
        {
        date: "07/2015 - 12/2015",
        dateValue: "2023-01-01",
        title: "University of Amsterdam",
        subtitle: "Postdoctoral Researcher",
        type: "research",
        side: "top",
    },
    /*
    ====================================================
    Titles
    ====================================================*/
    {
        date: "06/2014",
        dateValue: "2014-06-10",
        title: "BSc in Chemistry",
        subtitle: "University of Oviedo",
        description: "",
        
        type: "education", 
        side: "top",

        icon: "assets/icons/cv/timeline/BSc.svg",
        iconSize: 80,
        dotIcon: "assets/dots/award_dots.svg",
        dotSize: 28
    },
    {
        date: "07/2015",
        dateValue: "2015-07-16",
        title: "MSc in Chemistry & Sustainable Development",
        subtitle: "University of Oviedo",
        description: "Master Thesis",
        documentLink: "https://digibuo.uniovi.es/dspace/handle/10651/32088",

        type: "education",
        side: "top",

        icon: "assets/icons/cv/timeline/MSc.svg",
        iconSize: 80,
        dotIcon: "assets/dots/award_dots.svg",
        dotSize: 28
    },
    {
        date: "06/2020",
        dateValue: "2020-06-10",
        title: "PhD Thesis",
        subtitle: "University Rovira i Virgili",
        description: "",
        documentLink: "https://hdl.handle.net/10803/669435",


        type: "education",
        side: "top",

        icon: "assets/icons/cv/timeline/PhD.svg",
        iconSize: 80,
        dotIcon: "assets/dots/award_dots.svg",
        dotSize: 28
    },

    /*
    ====================================================
    Awards
    ====================================================*/
    {
        date: "",
        dateValue: "2021-03-31",
        title: "Junta of CyL Fellow",
        subtitle: "",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
    {
        date: "",
        dateValue: "2022-03-31",
        title: "ACSUCYL accreditation of assistant professor",
        subtitle: "",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
    {
        date: "",
        dateValue: "2019-06-14",
        title: "Best Flash Presentation Award",
        subtitle: "XII International School on Organometallic Chemistry",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
    {
        date: "",
        dateValue: "2018-07-10",
        title: "GEQO-2018 travel grant",
        subtitle: "21st_Int. Symposium on Homogeneous Catalysis",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
    {
        date: "",
        dateValue: "2018-03-01",
        title: "Severo Ochoa Predoctoral Scholarship",
        subtitle: "SEV-2013-0319",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
    {
        date: "",
        dateValue: "2016-03-01",
        title: "CELLEX Predoctoral Scholarship",
        subtitle: "",
        description: "",
        
        type: "award",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/cv/timeline/awards.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },

    /*
    ====================================================
    Invited Lectures
    ====================================================*/
    {
        lectureId: "invited-lecture-IL1",
        
        date: "11/2025",
        dateValue: "2025-11-13",
        title: "Invited Lecture",
        subtitle: "University of Valladolid",
        description: "Automated Platforms for Reaction Optimization: Merging Self-Driving Labs with Flow Photochemistry",
        
        type: "lecture",
        timelineLabel: "IL",
        side: "top",
        hasWhiteBackground: true,

        icon: "assets/icons/publications/conferences.svg",
        iconSize: 45,
        dotIcon: "assets/dots/publication_dots.svg",
        dotSize: 16
    },
];


cvEvents.push(
    ...publicationEvents,
    ...bookChapterEvents,
    ...patentEvents
);

/*
====================================================
GENERATE CV TIMELINE
====================================================
*/

//Find the HTML element where the timlie will be inserted

//HTML: <div id="cv-timeline"></div>
const timeline = document.getElementById("cv-timeline");

const years = [
    2010, 2012, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
];

years.forEach(year => {

    const marker = document.createElement("div");
    marker.classList.add("timeline-year");

    const position = getTimelinePosition(`${year}-04-01`);

    marker.style.left = `${position}%`;
    marker.textContent = year;

    timeline.appendChild(marker);

});

//Loop through all event stored in cvEvents
// For each event:
// 1. Create a new HTML element
// 2. Position it on the timeline
// 3. Fill it with information
// 4. Add it to the page

//Generate Institutions
cvInstitutions.forEach(institution => {

    const logoBlock = document.createElement("div");

    logoBlock.classList.add("timeline-institution");

    // Calculate the midpoint between start and end.
    const start = getTimelinePosition(institution.startDate);
    const end = getTimelinePosition(institution.endDate);

    const center = (start + end) / 2;

    // Create the vertical line connecting the timeline with the institution logo.
    // Start line
    const startLine = document.createElement("div");
    startLine.classList.add("institution-line");
    startLine.style.left = `${start}%`;

    timeline.appendChild(startLine);

    // End line
    const endLine = document.createElement("div");
    endLine.classList.add("institution-line");
    endLine.style.left = `${end}%`;

    timeline.appendChild(endLine);

    // Position the logo at that midpoint.
    logoBlock.style.left = `${center}%`;

    const logoHTML = institution.profileLink
    ? `<a href="${institution.profileLink}"
          target="_blank"
          rel="noopener noreferrer"
          class="institution-logo-link">
            <img src="${institution.logo}" alt="${institution.title}">
       </a>`
    : `<img src="${institution.logo}" alt="${institution.title}">`;
    
    logoBlock.innerHTML = `
        ${logoHTML}
        <div class="institution-name">
            ${institution.title}
        </div>
    `;

    timeline.appendChild(logoBlock);

});

//Generate Events
cvEvents.forEach(event => {

    // Create a new empty div.
    const item = document.createElement("div");
    item.classList.add("timeline-item", event.side);

    // Calculate the position of the event on the timeline.
    const eventPosition = getTimelinePosition(event.dateValue);

    // Set the horizontal position.
    item.style.left = `${eventPosition}%`;

    // If the event is close to the right edge,
    // move the info card inward.
    if (eventPosition > 98) {
        item.classList.add("near-right");
    }

    // If the event is close to the left edge,
    // move the info card inward.
    if (eventPosition < 15) {
        item.classList.add("near-left");
    }

    // Create the icon only if the event has an icon.
    const iconClasses = [
    "timeline-event-icon",
    event.hasWhiteBackground ? "white-icon" : ""
    ].join(" ");

    const iconContentHTML = `
    <div class="${iconClasses}"
        style="width:${event.iconSize || 45}px;
               height:${event.iconSize || 45}px;">

        <img src="${event.icon}" alt="${event.title}">

        ${event.number || event.timelineLabel
            ? `<span class="publication-number ${event.timelineLabel ? 'text-label' : ''}">
                ${event.timelineLabel || event.number}
            </span>`
        : ""}
    </div>
`;

    const iconHTML = event.icon
    ? event.documentLink
        ? `<a href="${event.documentLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="timeline-icon-link"
            title="${event.documentLabel || event.title}">
            ${iconContentHTML}
        </a>`
        : event.publicationId
            ? `<a href="#${event.publicationId}"
                class="timeline-icon-link"
                title="Go to publication">
                ${iconContentHTML}
            </a>`
            : event.lectureId
                ? `<a href="#${event.lectureId}"
                    class="timeline-icon-link"
                    title="Go to invited lecture">
                    ${iconContentHTML}
                </a>`
                : iconContentHTML
    : "";

    const dotHTML = event.dotIcon
        ? `<div class="timeline-dot custom-dot" style="width:${event.dotSize || 32}px; height:${event.dotSize || 32}px;">
                <img src="${event.dotIcon}" alt="${event.title}">
        </div>`
        : `<div class="timeline-dot"></div>`;

    //Create the internal HTML structure.
    item.innerHTML = `
        ${iconHTML}

        ${dotHTML}

        <div class="timeline-card">
            <div class="timeline-date">${event.date}</div>
            <h3>${event.title}</h3>
            <p>${event.subtitle}</p>
            <p>${event.description || ""}</p>
        </div>
    `;

    //Add this timeline event to the cv-timeline container.
    timeline.appendChild(item);
});