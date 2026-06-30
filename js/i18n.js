// ─── i18n.js — Language translation module ───────────────────────────────────
// Supports English (en) and German (de).
// Text nodes are tagged with data-i18n="key" in index.html.
// Placeholders use data-i18n-placeholder="key".
// Language preference is persisted in localStorage under the key "lang".

const translations = {
  en: {
    // Header
    subtitle: "ML/AI & Backend Engineer | M.Sc. Computer Science Student",
    status_label: "Status",
    status_value: "Available",
    updated_label: "Updated",
    contact_label: "Contact",
    links_label: "Links",

    // TOC / Nav
    toc_title: "Contents",
    nav_intro: "Introduction",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_skills: "Technical Skills",
    nav_hobbies: "Hobbies & Interests",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    // Introduction
    intro_heading: "Introduction",
    intro_body:
      "Hey there! I'm an ML/AI & Backend Engineer with 2 years of experience building and scaling production-grade AI systems. Currently pursuing an M.Sc. in Computer Science at Leibniz Universität Hannover, I love architecting high-performance cloud infrastructure and delivering end-to-end AI solutions.",

    // Experience
    exp_heading: "Experience",
    exp_col_pos: "Position",
    exp_col_resp: "Responsibilities",
    exp_col_dur: "Duration",
    exp1_role: "Software Engineer (AI & Backend)",
    exp1_company: "Various Startups",
    exp1_location: "Remote • AnCrypto, 30 Sundays, Dippy AI, YRAL",
    exp1_bullet1:
      "• Built and scaled Python backend systems (FastAPI, SQLAlchemy) for AI products supporting up to 1M+ users.",
    exp1_bullet2:
      "• Architected and deployed LLM and diffusion-based applications (chatbots, GenAI pipelines).",
    exp1_bullet3:
      "• Designed cloud-native infrastructure on GCP (Docker, K8s, GKE) ensuring auto-scaling and high availability.",
    exp1_bullet4:
      "• Engineered data pipelines and caching (PostgreSQL, Redis, Elasticsearch, BigQuery).",
    exp1_duration: "2023 - Present",
    exp2_role: "Machine Learning Engineer",
    exp2_location: "Singapore (Remote)",
    exp2_bullet1:
      "• Architected and deployed LLM and diffusion-model powered applications for AI content generation.",
    exp2_bullet2:
      "• Built scalable Python backend services & REST APIs (OpenAPI) to serve AI models in production.",
    exp2_bullet3:
      "• Designed load-balanced, cloud-native deployments on Google Cloud (GKE).",
    exp2_duration: "2024 - 2025",

    // Education
    edu_heading: "Education",
    edu_col_inst: "Institution",
    edu_col_deg: "Degree",
    edu_col_dur: "Duration",
    edu1_location: "Hannover, Germany",
    edu1_degree: "Master of Science in Computer Science",
    edu1_duration: "2026 - Present",
    edu2_location: "Jalandhar, India",
    edu2_degree: "Bachelor of Technology in Computer Science & Engineering",
    edu2_duration: "2020 - 2024",

    // Projects
    proj_heading: "Projects",
    proj1_title: "PhishNet: Phishing Websites Detection Tool",
    proj1_body:
      "Built this tool using cool ML and data science tricks like feature extraction and XGBoost to spot phishing websites before they can do any damage.",
    proj1_link: "View on arXiv",
    proj2_title: "Blockchain-based Petition System",
    proj2_body:
      "Created a blockchain petition system that makes everything more transparent, secure, and democratic. No middlemen needed!",
    proj2_link: "View on arXiv",

    // Skills
    skills_heading: "Technical Skills",
    skills_ai: "AI/ML & Data",
    skills_backend: "Backend, Cloud & Systems",
    skills_langs: "Programming Languages",

    // Spoken Languages
    spoken_heading: "Spoken Languages",
    spoken_body: "English (C2) • German (B1) • Hindi (C1) • Malayalam (C2)",

    // Hobbies
    hobbies_heading: "Hobbies & Interests",
    hobby_trekking: "Trekking",
    hobby_football: "Football",
    hobby_chess: "Chess",

    // Gallery
    gallery_heading: "Gallery",
    gallery_intro: "Some cool shots from my treks:",
    gallery_cap1: "Zero Point, Kashmir-Ladakh border",
    gallery_cap2: "Kheerganga, Himachal Pradesh",

    // Contact
    contact_heading: "Contact",
    contact_intro:
      "Got a cool project or just want to chat about tech? I'm all ears!",
    contact_success:
      "Thanks! Got your message. I'll get back to you soon.",
    contact_error: "Oops! There was a problem submitting your form",
    form_name: "Name",
    form_name_ph: "What should I call you?",
    form_email: "Email",
    form_email_ph: "Where can I reach you?",
    form_message: "Message",
    form_msg_ph: "What's on your mind?",
    form_submit: "Send it my way",
    contact_direct: "Or just reach out directly:",

    // Footer
    footer_handle: 'I usually go by "kevnantony" on all platforms.',
    footer_copy: "© 2025 Kevin Antony. All rights reserved.",
  },

  de: {
    // Header
    subtitle: "ML/KI & Backend-Ingenieur | M.Sc.-Student Informatik",
    status_label: "Status",
    status_value: "Verfügbar",
    updated_label: "Aktualisiert",
    contact_label: "Kontakt",
    links_label: "Links",

    // TOC / Nav
    toc_title: "Inhalt",
    nav_intro: "Einleitung",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_projects: "Projekte",
    nav_skills: "Technische Fähigkeiten",
    nav_hobbies: "Hobbys & Interessen",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",

    // Introduction
    intro_heading: "Einleitung",
    intro_body:
      "Hallo! Ich bin ML/KI & Backend-Ingenieur mit 2 Jahren Erfahrung im Aufbau und der Skalierung produktionsreifer KI-Systeme. Derzeit absolviere ich meinen M.Sc. in Informatik an der Leibniz Universität Hannover. Ich entwerfe gerne leistungsstarke Cloud-Infrastrukturen und liefere End-to-End-KI-Lösungen.",

    // Experience
    exp_heading: "Erfahrung",
    exp_col_pos: "Position",
    exp_col_resp: "Aufgaben",
    exp_col_dur: "Zeitraum",
    exp1_role: "Software-Ingenieur (KI & Backend)",
    exp1_company: "Verschiedene Startups",
    exp1_location: "Remote • AnCrypto, 30 Sundays, Dippy AI, YRAL",
    exp1_bullet1:
      "• Python-Backend-Systeme (FastAPI, SQLAlchemy) für KI-Produkte mit bis zu 1 Mio.+ Nutzern entwickelt und skaliert.",
    exp1_bullet2:
      "• LLM- und Diffusionsmodell-basierte Anwendungen (Chatbots, GenAI-Pipelines) entworfen und deployt.",
    exp1_bullet3:
      "• Cloud-native Infrastruktur auf GCP (Docker, K8s, GKE) mit Auto-Scaling und hoher Verfügbarkeit konzipiert.",
    exp1_bullet4:
      "• Datenpipelines und Caching (PostgreSQL, Redis, Elasticsearch, BigQuery) entwickelt.",
    exp1_duration: "2023 – Heute",
    exp2_role: "Machine-Learning-Ingenieur",
    exp2_location: "Singapur (Remote)",
    exp2_bullet1:
      "• LLM- und Diffusionsmodell-basierte Anwendungen zur KI-Inhaltserstellung entworfen und deployt.",
    exp2_bullet2:
      "• Skalierbare Python-Backend-Dienste & REST-APIs (OpenAPI) für KI-Modelle in der Produktion entwickelt.",
    exp2_bullet3:
      "• Lastverteilte, cloud-native Deployments auf Google Cloud (GKE) konzipiert.",
    exp2_duration: "2024 – 2025",

    // Education
    edu_heading: "Ausbildung",
    edu_col_inst: "Institution",
    edu_col_deg: "Abschluss",
    edu_col_dur: "Zeitraum",
    edu1_location: "Hannover, Deutschland",
    edu1_degree: "Master of Science in Informatik",
    edu1_duration: "2026 – Heute",
    edu2_location: "Jalandhar, Indien",
    edu2_degree: "Bachelor of Technology in Informatik & Ingenieurwesen",
    edu2_duration: "2020 – 2024",

    // Projects
    proj_heading: "Projekte",
    proj1_title: "PhishNet: Phishing-Website-Erkennungstool",
    proj1_body:
      "Dieses Tool wurde mithilfe von ML-Methoden wie Feature-Extraktion und XGBoost entwickelt, um Phishing-Websites zu erkennen, bevor sie Schaden anrichten können.",
    proj1_link: "Auf arXiv ansehen",
    proj2_title: "Blockchain-basiertes Petitionssystem",
    proj2_body:
      "Ein Blockchain-Petitionssystem entwickelt, das alles transparenter, sicherer und demokratischer macht – ganz ohne Mittelsleute!",
    proj2_link: "Auf arXiv ansehen",

    // Skills
    skills_heading: "Technische Fähigkeiten",
    skills_ai: "KI/ML & Daten",
    skills_backend: "Backend, Cloud & Systeme",
    skills_langs: "Programmiersprachen",

    // Spoken Languages
    spoken_heading: "Gesprochene Sprachen",
    spoken_body: "Englisch (C2) • Deutsch (B1) • Hindi (C1) • Malayalam (C2)",

    // Hobbies
    hobbies_heading: "Hobbys & Interessen",
    hobby_trekking: "Wandern",
    hobby_football: "Fußball",
    hobby_chess: "Schach",

    // Gallery
    gallery_heading: "Galerie",
    gallery_intro: "Einige Aufnahmen von meinen Touren:",
    gallery_cap1: "Zero Point, Grenze Kaschmir-Ladakh",
    gallery_cap2: "Kheerganga, Himachal Pradesh",

    // Contact
    contact_heading: "Kontakt",
    contact_intro:
      "Hast du ein spannendes Projekt oder möchtest einfach über Technik reden? Ich bin ganz Ohr!",
    contact_success: "Danke! Nachricht erhalten. Ich melde mich bald.",
    contact_error: "Oops! Beim Absenden deiner Nachricht ist ein Fehler aufgetreten.",
    form_name: "Name",
    form_name_ph: "Wie soll ich dich nennen?",
    form_email: "E-Mail",
    form_email_ph: "Wie kann ich dich erreichen?",
    form_message: "Nachricht",
    form_msg_ph: "Was liegt dir auf dem Herzen?",
    form_submit: "Nachricht senden",
    contact_direct: "Oder direkt kontaktieren:",

    // Footer
    footer_handle: 'Auf allen Plattformen bin ich als \u201ekevnantony\u201c zu finden.',
    footer_copy: "© 2025 Kevin Antony. Alle Rechte vorbehalten.",
  },
};

// ─── Core apply function ──────────────────────────────────────────────────────

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Placeholder attributes (inputs / textareas)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update the toggle button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Store preference
  localStorage.setItem("lang", lang);

  // Update html lang attribute for accessibility
  document.documentElement.lang = lang;
}

// ─── Toggle UI wiring ─────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });
});
