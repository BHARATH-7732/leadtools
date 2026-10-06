/* =========================================================
   LEADSTACK HUB — APPLICATION LOGIC
   ========================================================= */
/* =========================================================
   AUTO ACCENT COLOR
   Changes every time the page is opened.
========================================================= */

const palettes = [
    ["#00d4ff","#3878ff","#a855f7"],
    ["#b44cff","#6d28d9","#ec4899"],
    ["#ff7a18","#ff3d81","#ffd166"],
    ["#00e88a","#00a86b","#00d4ff"],
    ["#ff4d8d","#e11d72","#a855f7"],
    ["#ffd166","#f59e0b","#ff7a18"],
    ["#00f5ff","#0066ff","#7c3aed"],
    ["#39ff14","#00c853","#00e5ff"]
];

const previousPalette =
    Number(sessionStorage.getItem("scraper-palette-index"));

const paletteIndex =
    Number.isNaN(previousPalette)
        ? 0
        : (previousPalette + 1) % palettes.length;

sessionStorage.setItem(
    "scraper-palette-index",
    paletteIndex
);

document.documentElement.style.setProperty(
    "--accent",
    palettes[paletteIndex][0]
);

document.documentElement.style.setProperty(
    "--accent2",
    palettes[paletteIndex][1]
);

document.documentElement.style.setProperty(
    "--accent3",
    palettes[paletteIndex][2]
);


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("scraper-theme");

if (savedTheme) {
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );
} else {
    document.documentElement.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark"
    );
}

function updateThemeIcon(){
    const theme =
        document.documentElement.getAttribute("data-theme");

    themeBtn.textContent =
        theme === "light" ? "☾" : "☼";
}

updateThemeIcon();

themeBtn.addEventListener("click", () => {

    const current =
        document.documentElement.getAttribute("data-theme");

    const next =
        current === "light" ? "dark" : "light";

    document.documentElement.setAttribute(
        "data-theme",
        next
    );

    localStorage.setItem(
        "scraper-theme",
        next
    );

    updateThemeIcon();

    showToast(
        next === "light"
            ? "Light mode enabled"
            : "Dark mode enabled"
    );
});


/* =========================================================
   TOAST
========================================================= */

const toast =
    document.getElementById("toast");

let toastTimer;

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

/* =========================================================
   SEARCH AND CATEGORY FILTERS
========================================================= */

const searchInput = document.getElementById("toolSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".card[data-category]");
const resultsStatus = document.getElementById("resultsStatus");
const noResults = document.getElementById("noResults");
let activeFilter = "all";

function updateToolResults(){
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    toolCards.forEach(card => {
        const matchesCategory =
            activeFilter === "all" || card.dataset.category === activeFilter;
        const matchesSearch =
            !query || card.textContent.toLowerCase().includes(query);
        const visible = matchesCategory && matchesSearch;

        card.classList.toggle("is-hidden", !visible);
        if(visible) visibleCount += 1;
    });

    noResults.style.display = visibleCount ? "none" : "block";
    resultsStatus.textContent = query
        ? `Showing ${visibleCount} matching ${visibleCount === 1 ? "tool" : "tools"}`
        : `Showing ${visibleCount} ${visibleCount === 1 ? "tool" : "tools"}`;
}

searchInput.addEventListener("input", updateToolResults);

filterButtons.forEach(button => {
    button.setAttribute("aria-pressed", button.classList.contains("is-active"));
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(item => {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", isActive);
        });
        updateToolResults();
    });
});


/* =========================================================
   3D CARD MOUSE EFFECT
========================================================= */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove",event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const px =
            x / rect.width * 100;

        const py =
            y / rect.height * 100;

        card.style.setProperty(
            "--mx",
            px + "%"
        );

        card.style.setProperty(
            "--my",
            py + "%"
        );

        const rotateY =
            ((px - 50) / 50) * 2.5;

        const rotateX =
            ((50 - py) / 50) * 2.5;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;
    });

    card.addEventListener("mouseleave",() => {
        card.style.transform = "";
    });

});


/* =========================================================
   NATIVE SHARE SHEET
   Uses the phone's actual installed apps.
========================================================= */

const shareData = {
    landbase:{name:"Landbase",description:"AI-powered GTM intelligence for account and prospecting workflows."},
    leadfluxa:{name:"LeadFluxA",description:"B2B lead generation and contact discovery for prospecting workflows."},
    go4database:{name:"Go4Database",description:"B2B lead database and company intelligence."},
    emailnator:{name:"Emailnator",description:"Temporary email inboxes for workflow testing."},
    consulti:{name:"Consulti AI",description:"AI-powered research and business productivity workflows."},
    apollo:{name:"Apollo.io",description:"B2B prospecting and sales intelligence."},
    outscraper:{name:"Outscraper",description:"Business data extraction for lead and company research."},
    "temp-mail":{name:"Temp Mail",description:"Temporary email service for disposable email access."},
    timedatatrack:{name:"Timedatatrack",description:"Web-based time and data tracking application."},
    omni:{name:"Google Map Scraper",description:"Chrome extension for Google Maps lead collection."},
    "li-prospect":{name:"LI Prospect Finder",description:"Chrome extension for LinkedIn prospect discovery."},
    snov:{name:"Snov.io",description:"Chrome extension for email finding and verification."},
    "open-multiple-urls":{name:"Open Multiple URLs",description:"Chrome extension for opening multiple web pages from a list of URLs."},
};

document.querySelectorAll(".share").forEach(button => {

    button.addEventListener("click",async event => {

        event.preventDefault();

        const card =
            button.closest(".card");

        const id =
            card.dataset.shareId;

        const data =
            shareData[id];

        if(!data) return;

        const baseUrl =
            window.location.href.split("#")[0];

        const shareUrl =
            baseUrl + "#" + id;

        const shareText =
            ` Check out ${data.name}

${data.description}

LeadStack Hub`;

        /* Native Android / iOS / supported browser share sheet */

        if(navigator.share){

            try{

                await navigator.share({
                    title:data.name,
                    text:shareText,
                    url:shareUrl
                });

            }catch(error){

                /* Cancelled by user — no error message */
                if(error.name !== "AbortError"){
                    showToast("Unable to open share sheet");
                }
            }

            return;
        }

        /* Fallback */

        try{

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                shareUrl
            );

            showToast(
                "Share content copied"
            );

        }catch{

            showToast(
                "Sharing is not supported in this browser"
            );
        }
    });

});


/* =========================================================
   DETAILS MODAL
========================================================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalBody =
    document.getElementById("modalBody");

const modalData = {

    omni:{
        title:"Google Map Scraper",
        body:`
            <p>
                Google Map Scraper is designed for
                Google Maps lead collection and structured
                export workflows.
            </p>

            <ul>
                <li>Google Maps lead collection</li>
                <li>CSV export</li>
                <li>Webhook synchronization</li>
                <li>Browser-based extraction</li>
            </ul>
        `
    },

};

const toolsInfo = {
    landbase:{title:"Landbase",description:"AI-powered GTM intelligence for targeted account and prospecting workflows.",points:["AI-powered GTM intelligence","Account intelligence","High-value prospect targeting","Personalization workflows"]},
    leadfluxa:{title:"LeadFluxA",description:"B2B lead generation and contact discovery for prospecting workflows.",points:["B2B lead generation","Contact discovery","Company information","Prospecting workflows"]},
    go4database:{title:"Go4Database",description:"B2B lead database and company intelligence for targeted prospect research.",points:["B2B lead database","ICP targeting","AI-assisted lead generation","Company intelligence"]},
    emailnator:{title:"Emailnator",description:"Temporary email inboxes for disposable email access and workflow testing.",points:["Temporary email inbox","Disposable email addresses","Email workflow testing","Quick temporary access"]},
    consulti:{title:"Consulti AI",description:"AI-powered assistance for research, productivity and business workflows.",points:["AI-powered assistance","Research support","Business productivity","AI workflows"]},
    apollo:{title:"Apollo.io",description:"B2B prospecting and sales intelligence for company and contact discovery.",points:["B2B company database","Business email & phone data","Prospect discovery","Sales engagement"]},
    outscraper:{title:"Outscraper",description:"Business data extraction for structured lead and company research.",points:["Google Maps data extraction","Business lead generation","Company information","Structured data export"]},
    "temp-mail":{title:"Temp Mail",description:"Temporary email service for quick disposable email access and email workflow testing.",points:["Temporary email address","Disposable inbox","Quick email access","Useful for workflow testing"]},
    timedatatrack:{title:"Timedatatrack",description:"Web-based time and data tracking application.",points:["Time tracking","Activity records","Data monitoring","Web-based workflow"]},
    omni:{title:"Google Map Scraper",description:"Google Maps lead collection and structured export workflows.",points:["Google Maps lead collection","CSV export","Webhook synchronization","Browser-based extraction"]},
    "li-prospect":{title:"LI Prospect Finder",description:"LinkedIn-focused prospect discovery and lead research.",points:["LinkedIn prospect discovery","Lead profile extraction","Prospecting workflow","LinkedIn-focused research"]},
    snov:{title:"Snov.io",description:"Email discovery and verification for B2B prospecting.",points:["Email finder","Email verification","Lead prospecting","Contact discovery"]},
    "open-multiple-urls":{title:"Open Multiple URLs",description:"Chrome extension for opening multiple web pages from a list of URLs.",points:["Multiple URL opening","Bulk browser workflow","Faster web research","Chrome-based utility"]},
};

document.querySelectorAll(".details").forEach(button => {
    button.addEventListener("click",() => {
        let data = modalData[button.dataset.modal];

        if(!data && button.dataset.tool){
            const tool = toolsInfo[button.dataset.tool];
            if(tool){
                data = {
                    title: tool.title,
                    body: `<p>${tool.description}</p><ul>${tool.points.map(point => `<li>${point}</li>`).join("")}</ul>`
                };
            }
        }

        if(!data) return;

        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    });
});

function closeModal(){

    modal.classList.remove("open");

    document.body.style.overflow = "";
}

document.getElementById("closeModal")
    .addEventListener("click",closeModal);

modal.addEventListener("click",event => {

    if(event.target === modal){
        closeModal();
    }
});


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener("keydown",event => {

    if(event.key === "Escape"){
        closeModal();
    }
});


/* =========================================================
   PAGE ENTRY
========================================================= */

document.body.animate(
    [
        {
            opacity:0,
            transform:"scale(.985)"
        },
        {
            opacity:1,
            transform:"scale(1)"
        }
    ],
    {
        duration:700,
        easing:"cubic-bezier(.2,.8,.2,1)"
    }
);
