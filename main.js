const fallbackData = {
  basics: {
    name: "Aung Bhone Pyae",
    title: "Computer Science MSc Student",
    location: "Phutthamonthon",
    email: "aungbonepyace@gmail.com",
    phone: "+66 91 727 1301",
    summary:
      "Computer Science MSc student with hands-on experience in developing digital solutions including facial recognition and database systems. Skilled in Python, Agile methodologies, and IT support with experience working remotely and in educational environments.",
    cvPdf: "./assets/CV.pdf",
    links: [
      { label: "GitHub", url: "https://github.com/aungbhonepyace" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/aung-bhone-pyae-6459481b9/" }
    ]
  },
  skills: [
    {
      category: "Programming Languages and Technologies",
      items: ["Python", "SQL", "HTML/CSS/JS basics"]
    },
    {
      category: "Prototyping and Automation Tools",
      items: ["Axure RP", "Power Apps", "Power Automate"]
    },
    {
      category: "Methodologies",
      items: ["Agile & Scrum Methodologies"]
    },
    {
      category: "Hardware and Imaging",
      items: ["Raspberry Pi", "OpenCV"]
    },
    {
      category: "Database",
      items: ["Database Design", "ER Modeling"]
    },
    {
      category: "Data Skills",
      items: ["Data Analysis & Visualization"]
    }
  ],
  tools: [
    "Python",
    "SQL",
    "Power Apps",
    "Power Automate",
    "Axure RP",
    "OpenCV",
    "Raspberry Pi",
    "Git",
    "Jira",
    "MySQL",
    "PostgreSQL"
  ],
  languages: [
    { name: "Burmese", level: "Native speaker" },
    { name: "English", level: "Highly proficient (speaking and writing)" },
    { name: "Thai", level: "A1" },
    { name: "Italian", level: "A1" }
  ],
  experience: [
    {
      id: "experience-saya-foundation",
      company: "Saya Foundation",
      role: "IT Specialist",
      location: "Remote",
      start: "2023",
      end: "Present",
      details:
        "Remote IT specialist delivering and maintaining digital solutions that keep foundation operations running smoothly.",
      highlights: [
        "Developed full-code digital solutions for internal organizational use.",
        "Provided remote IT support, ensuring uptime and system maintenance.",
        "Assisted with project planning and rollout of digital platforms."
      ],
      tech: ["Python", "SQL", "Power Automate", "GitHub", "Remote Support"],
      links: []
    },
    {
      id: "experience-yangon-academy-international-school",
      company: "Yangon Academy International School (YAIS)",
      role: "Junior IT Assistant",
      location: "Yangon",
      start: "2022",
      end: "2023",
      details:
        "Provided on-site IT assistance and low-code solutions to support teachers, staff, and students.",
      highlights: [
        "Maintained and updated IT inventory across branches.",
        "Built low-code tools using Power Apps and Power Automate.",
        "Delivered hands-on tech support to teachers, staff, and students."
      ],
      tech: ["Power Apps", "Power Automate", "Microsoft 365", "Asset Management"],
      links: []
    },
    {
      id: "experience-ykko-restaurant-group",
      company: "YKKO (Restaurant Group)",
      role: "IT Intern",
      location: "Yangon",
      start: "2020",
      end: "2021",
      details:
        "IT intern supporting troubleshooting, networking, and hardware upkeep across restaurant locations.",
      highlights: [
        "Supported troubleshooting of hardware, software, and networking.",
        "Helped manage and track IT assets across multiple locations."
      ],
      tech: ["Hardware Support", "Networking", "Inventory Tracking"],
      links: []
    }
  ],
  projects: [
    {
      id: "project-facial-recognition-door-unlock",
      title: "Facial Recognition Door Unlock System",
      tagline: "Raspberry Pi 5 system using Python and OpenCV to automate door access.",
      start: "2024",
      end: "2024",
      details:
        "Built a Raspberry Pi 5-based access system using a camera module, Python, and OpenCV for real-time facial recognition.",
      highlights: [
        "Integrated camera module capture and OpenCV-based facial recognition pipeline.",
        "Deployed on Raspberry Pi 5 with GPIO control for door unlock signaling."
      ],
      tech: ["Python", "OpenCV", "Raspberry Pi", "GPIO"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-thailand-aqi-analysis",
      title: "Thailand AQI Data Analysis",
      tagline: "Data analysis of Thailand’s AQI with visual insights on pollution trends.",
      start: "2024",
      end: "2024",
      details:
        "Performed exploratory data analysis on Thailand’s AQI dataset to surface trends and visual insights.",
      highlights: [
        "Cleaned and transformed AQI datasets for visualization.",
        "Built visual summaries highlighting seasonal and regional pollution trends."
      ],
      tech: ["Python", "Pandas", "Data Visualization"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-board-game-cafe-database",
      title: "Board Game Café Database System",
      tagline: "Relational database design with ER modeling and SQL schema for a board game café.",
      start: "2024",
      end: "2024",
      details:
        "Designed and implemented a database system for a board game café, covering ER modeling and SQL schema.",
      highlights: [
        "Created ER diagrams capturing inventory, bookings, and customer data.",
        "Implemented normalized SQL schema to support daily operations."
      ],
      tech: ["Database Design", "ER Modeling", "SQL"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-shph-management-system",
      title: "SHPH Management System",
      tagline: "Agile-led build of a Subdistrict Health Promotion Hospital management system.",
      start: "2024",
      end: "2024",
      details:
        "Served as Scrum Master leading a team of 7 to build a SHPH Management System using agile practices.",
      highlights: [
        "Facilitated sprints, standups, and retros for a 7-person team.",
        "Delivered core modules for patient intake, scheduling, and reporting."
      ],
      tech: ["Agile", "Scrum", "Project Management"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-employee-management-system",
      title: "Employee Management System",
      tagline: "CRUD system with access control for managing employee records.",
      start: "2021",
      end: "2021",
      details: "Built during BSc studies to manage employee data with role-based access control.",
      highlights: [
        "Implemented CRUD workflows for employee records.",
        "Added role-based access control to protect sensitive data."
      ],
      tech: ["SQL", "Web Development", "Access Control"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-university-forum-website",
      title: "University Forum Website",
      tagline: "Collaboration platform for student engagement and discussion.",
      start: "2021",
      end: "2021",
      details:
        "Collaborated on a forum website enabling student discussions and engagement.",
      highlights: [
        "Built discussion boards with topic/thread organization.",
        "Enabled user accounts for posting and moderation."
      ],
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-in-car-stereo-prototype",
      title: "Interactive In-car Stereo App Prototype",
      tagline: "Axure RP prototype for an in-car stereo experience.",
      start: "2020",
      end: "2020",
      details: "Designed an interactive prototype for an in-car stereo app using Axure RP.",
      highlights: [
        "Mapped user flows and interactive elements for media control.",
        "Produced clickable prototype showcasing navigation and playback."
      ],
      tech: ["Axure RP", "Prototyping"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-library-website",
      title: "Library Website",
      tagline: "Online library site with reading and purchasing capabilities.",
      start: "2020",
      end: "2020",
      details: "Built a library website allowing online reading and purchasing of books.",
      highlights: [
        "Implemented catalog browsing and search.",
        "Added online reading and purchase request flows."
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      results: [],
      links: [],
      images: []
    },
    {
      id: "project-hospital-website",
      title: "Hospital Website",
      tagline: "Informational site with doctor/treatment information and appointment requests.",
      start: "2019",
      end: "2019",
      details:
        "Built as a group project to share hospital information and handle appointment requests.",
      highlights: [
        "Published doctor profiles, treatments, and services.",
        "Added appointment request form routing to staff."
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      results: [],
      links: [],
      images: []
    }
  ],
  education: [
    {
      id: "education-mahidol-university",
      school: "Mahidol University",
      degree: "MSc in Computer Science",
      location: "Thailand",
      start: "2024",
      end: "Present",
      details: "Postgraduate studies focused on computer science, applied projects, and agile delivery.",
      highlights: [
        "Developed a Facial Recognition Door Unlock System using Raspberry Pi 5, camera module, Python, and OpenCV.",
        "Performed data analysis on Thailand’s AQI, generating visual insights on pollution trends.",
        "Designed a database system for a board game café, including ER modeling and SQL schema.",
        "Served as Scrum Master for a team of 7 in building a Subdistrict Health Promotion Hospital (SHPH) Management System using agile practices."
      ],
      links: []
    },
    {
      id: "education-university-of-greenwich",
      school: "University of Greenwich",
      degree: "BSc in Computing",
      location: "United Kingdom",
      start: "2019",
      end: "2022",
      details: "Undergraduate studies in computing covering software development and collaborative web projects.",
      highlights: [
        "Created an Employee Management System with CRUD functionality and access control.",
        "Collaborated on a University Forum Website for student engagement and discussion."
      ],
      links: []
    },
    {
      id: "education-ncc-education",
      school: "NCC Education",
      degree: "L5D in Computing",
      location: "United Kingdom",
      start: "2020",
      end: "2021",
      details: "Level 5 diploma work emphasizing applied computing and interface prototyping.",
      highlights: [
        "Designed an interactive in-car stereo app prototype using Axure RP.",
        "Built a Library Website with online reading and purchasing capabilities."
      ],
      links: []
    },
    {
      id: "education-kmd",
      school: "KMD",
      degree: "Diploma in Web Development",
      location: "Myanmar",
      start: "2019",
      end: "2019",
      details: "Diploma studies focused on foundational web development skills.",
      highlights: [
        "Built a Hospital Website as a group project, providing doctor/treatment information and appointment requests."
      ],
      links: []
    }
  ]
};

const itemLookup = new Map();
let lastTrigger = null;
let currentData = null;

const dom = {
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  location: document.getElementById("location"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  avatar: document.getElementById("avatar"),
  links: document.getElementById("links"),
  copyEmail: document.getElementById("copyEmail"),
  skillsList: document.getElementById("skillsList"),
  toolsList: document.getElementById("toolsList"),
  languagesList: document.getElementById("languagesList"),
  summary: document.getElementById("summary"),
  experienceList: document.getElementById("experienceList"),
  projectsList: document.getElementById("projectsList"),
  educationList: document.getElementById("educationList"),
  dialog: document.getElementById("detailDialog"),
  detailType: document.getElementById("detailType"),
  detailTitle: document.getElementById("detailTitle"),
  detailMeta: document.getElementById("detailMeta"),
  detailDescription: document.getElementById("detailDescription"),
  detailHighlights: document.getElementById("detailHighlights"),
  detailTech: document.getElementById("detailTech"),
  detailResults: document.getElementById("detailResults"),
  detailLinks: document.getElementById("detailLinks"),
  closeButton: document.querySelector(".close-button"),
  downloadButton: document.querySelector(".primary-button")
};

function iconForLabel(label) {
  const key = (label || "").toLowerCase();
  if (key.includes("github")) {
    const img = document.createElement("img");
    img.src = "./assets/github-mark/github-mark.svg";
    img.alt = "";
    img.loading = "lazy";
    return img;
  }
  if (key.includes("linkedin")) {
    const img = document.createElement("img");
    img.src = "https://img.icons8.com/ios-filled/32/linkedin.png";
    img.alt = "";
    img.loading = "lazy";
    img.width = 16;
    img.height = 16;
    return img;
  }
  return null;
}

async function loadData() {
  try {
    const response = await fetch("./data/cv.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to fetch cv.json: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Falling back to inline CV data due to fetch error:", error);
    return fallbackData;
  }
}

function validateData(data) {
  const errors = [];
  const idSet = new Set();

  if (!data.basics?.name) errors.push("Missing basics.name");
  if (!data.basics?.email) errors.push("Missing basics.email");
  if (!data.basics?.summary) errors.push("Missing basics.summary");

  ["experience", "projects", "education"].forEach((section) => {
    const list = Array.isArray(data[section]) ? data[section] : [];
    list.forEach((item, index) => {
      const path = `${section}[${index}]`;
      if (!item.id) errors.push(`Missing required field ${path}.id`);
      if (item.id && idSet.has(item.id)) errors.push(`Duplicate id found: ${item.id}`);
      if (item.id) idSet.add(item.id);

      if (section === "experience") {
        ["company", "role", "start", "end"].forEach((field) => {
          if (!item[field]) errors.push(`Missing ${path}.${field}`);
        });
      }
      if (section === "projects") {
        ["title", "start", "end"].forEach((field) => {
          if (!item[field]) errors.push(`Missing ${path}.${field}`);
        });
      }
      if (section === "education") {
        ["school", "degree", "start", "end"].forEach((field) => {
          if (!item[field]) errors.push(`Missing ${path}.${field}`);
        });
      }
    });
  });

  errors.forEach((msg) => console.error(msg));
}

function renderBasics(basics) {
  if (!basics) return;
  dom.name.textContent = basics.name || "";
  dom.title.textContent = basics.title || "";
  dom.location.textContent = basics.location || "";
  dom.email.textContent = basics.email || "";
  dom.email.href = basics.email ? `mailto:${basics.email}` : "#";
  dom.phone.textContent = basics.phone || "";
  dom.summary.textContent = basics.summary || "";
  const photoSrc = basics.photo || "./assets/ABP.JPG";
  dom.avatar.src = photoSrc;
  dom.avatar.alt = basics.name ? `Profile photo of ${basics.name}` : "Profile photo";

  dom.downloadButton.href = basics.cvPdf || "./assets/CV.pdf";

  dom.copyEmail.addEventListener("click", () => {
    if (!basics.email) return;
    navigator.clipboard
      .writeText(basics.email)
      .then(() => {
        dom.copyEmail.textContent = "Copied!";
        setTimeout(() => (dom.copyEmail.textContent = "Copy email"), 1400);
      })
      .catch((err) => console.error("Clipboard unavailable", err));
  });

  dom.links.innerHTML = "";
  (basics.links || []).forEach((link) => {
    const icon = iconForLabel(link.label);
    if (link.url) {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer noopener";
      anchor.className = "contact-link";
      if (icon) anchor.prepend(icon);
      dom.links.appendChild(anchor);
    } else {
      const span = document.createElement("span");
      span.textContent = link.label;
      span.className = "contact-link";
      if (icon) span.prepend(icon);
      dom.links.appendChild(span);
    }
  });
}

function renderSkills(skills = []) {
  dom.skillsList.innerHTML = "";
  skills.forEach((skill) => {
    const group = document.createElement("div");
    group.className = "skill-group";

    const heading = document.createElement("div");
    heading.className = "skill-group-title";
    heading.textContent = skill.category;
    group.appendChild(heading);

    const tags = document.createElement("div");
    tags.className = "tags";
    (skill.items || []).forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item;
      tags.appendChild(tag);
    });
    group.appendChild(tags);

    dom.skillsList.appendChild(group);
  });
}

function renderTools(tools = []) {
  dom.toolsList.innerHTML = "";
  tools.forEach((tool) => {
    const li = document.createElement("li");
    li.textContent = tool;
    dom.toolsList.appendChild(li);
  });
}

function renderLanguages(languages = []) {
  dom.languagesList.innerHTML = "";
  languages.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = `${lang.name}: ${lang.level}`;
    dom.languagesList.appendChild(li);
  });
}

function formatDateRange(start, end) {
  return [start, end].filter(Boolean).join(" – ");
}

function formatMeta(parts = []) {
  return parts.filter(Boolean).join(" · ");
}

function registerItem(type, item, element) {
  itemLookup.set(item.id, { type, item, element });
}

const cardConfig = {
  experience: {
    title: (item) => item.role,
    subtitle: (item) => item.company,
    meta: (item) => formatMeta([formatDateRange(item.start, item.end), item.location]),
    tags: (item) => item.tech || []
  },
  projects: {
    title: (item) => item.title,
    subtitle: (item) => item.tagline,
    meta: (item) => formatDateRange(item.start, item.end),
    tags: (item) => item.tech || []
  },
  education: {
    title: (item) => item.degree,
    subtitle: (item) => item.school,
    meta: (item) => formatMeta([formatDateRange(item.start, item.end), item.location]),
    tags: () => []
  }
};

function renderEntries(type, list, container) {
  if (!container) return;
  container.innerHTML = "";
  const config = cardConfig[type];
  (list || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "entry-card";
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    card.dataset.id = item.id;
    card.dataset.type = type;

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = config.title(item);

    const subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.textContent = config.subtitle(item) || "";

    const chevron = document.createElement("div");
    chevron.className = "chevron";
    chevron.textContent = "›";
    chevron.setAttribute("aria-hidden", "true");

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = config.meta(item);

    const tags = document.createElement("div");
    tags.className = "tags";
    (config.tags(item) || []).slice(0, 4).forEach((stack) => {
      const chip = document.createElement("span");
      chip.className = "tag";
      chip.textContent = stack;
      tags.appendChild(chip);
    });

    card.appendChild(title);
    card.appendChild(chevron);
    card.appendChild(subtitle);
    card.appendChild(meta);
    if (tags.childNodes.length) {
      card.appendChild(tags);
    }

    const triggerOpen = () => {
      lastTrigger = card;
      openDetail(type, item.id);
    };

    card.addEventListener("click", triggerOpen);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        triggerOpen();
      }
    });

    container.appendChild(card);
    registerItem(type, item, card);
  });
}

function setBlock(container, title, list, renderItem) {
  if (!container) return;
  container.innerHTML = "";
  if (!list || !list.length) {
    container.style.display = "none";
    return;
  }
  container.style.display = "";
  const heading = document.createElement("h3");
  heading.textContent = title;
  container.appendChild(heading);

  if (renderItem) {
    container.appendChild(renderItem(list));
  } else {
    const ul = document.createElement("ul");
    list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
}

function buildMetaForDetail(type, item) {
  if (type === "experience") {
    return formatMeta([formatDateRange(item.start, item.end), item.company, item.location]);
  }
  if (type === "projects") {
    return formatMeta([formatDateRange(item.start, item.end), item.tagline]);
  }
  if (type === "education") {
    return formatMeta([formatDateRange(item.start, item.end), item.school, item.location]);
  }
  return "";
}

function openDetail(type, id, { updateHash = true } = {}) {
  const record = itemLookup.get(id);
  if (!record || record.type !== type) {
    console.warn("No record found for", type, id);
    return;
  }

  const item = record.item;
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  dom.detailType.textContent = typeLabel;

  if (type === "experience") dom.detailTitle.textContent = item.role || "";
  if (type === "projects") dom.detailTitle.textContent = item.title || "";
  if (type === "education") dom.detailTitle.textContent = item.degree || "";

  dom.detailMeta.textContent = buildMetaForDetail(type, item);
  dom.detailDescription.textContent =
    item.details || item.tagline || item.description || "";

  setBlock(dom.detailHighlights, "Highlights", item.highlights);
  setBlock(dom.detailResults, "Results", item.results);
  setBlock(dom.detailTech, "Tech Stack", item.tech, (items) => {
    const row = document.createElement("div");
    row.className = "chip-row";
    items.forEach((chipText) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = chipText;
      row.appendChild(chip);
    });
    return row;
  });
  const linkItems = (item.links || []).filter((link) => link.url);
  setBlock(dom.detailLinks, "Links", linkItems, (items) => {
    const row = document.createElement("div");
    row.className = "link-list";
    items.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer noopener";
      row.appendChild(anchor);
    });
    return row;
  });

  dom.dialog.showModal();
  if (updateHash) {
    const encoded = encodeURIComponent(item.id);
    if (`#${encoded}` !== window.location.hash) {
      window.location.hash = encoded;
    }
  }
  dom.dialog.focus();
}

function closeDetail() {
  if (dom.dialog.open) {
    dom.dialog.close();
  }
  history.replaceState(null, "", window.location.pathname + window.location.search);
  if (lastTrigger) {
    lastTrigger.focus();
  }
}

function handleHashChange() {
  const hash = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!hash) return;
  const record = itemLookup.get(hash);
  if (record) {
    openDetail(record.type, record.item.id, { updateHash: false });
  }
}

function initDialog() {
  dom.closeButton.addEventListener("click", closeDetail);
  dom.dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDetail();
  });
  dom.dialog.addEventListener("click", (event) => {
    if (event.target === dom.dialog) {
      closeDetail();
    }
  });
  dom.dialog.addEventListener("close", () => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    if (lastTrigger) {
      lastTrigger.focus();
    }
  });
}

async function init() {
  currentData = await loadData();
  validateData(currentData);

  renderBasics(currentData.basics);
  renderSkills(currentData.skills);
  renderTools(currentData.tools);
  renderLanguages(currentData.languages);
  renderEntries("experience", currentData.experience, dom.experienceList);
  renderEntries("projects", currentData.projects, dom.projectsList);
  renderEntries("education", currentData.education, dom.educationList);

  initDialog();
  if (window.location.hash) {
    handleHashChange();
  }
  window.addEventListener("hashchange", handleHashChange);
}

window.addEventListener("DOMContentLoaded", init);
window.openDetail = openDetail;
