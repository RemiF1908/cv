import { p as push, t as head, l as pop, u as fallback, v as attr, m as escape_html, w as bind_props, x as ensure_array_like, y as spread_props, z as attr_style } from './index-P0Y8g9gz.js';

function Header($$payload, $$props) {
  push();
  let profile = fallback(
    $$props["profile"],
    () => ({
      name: "Rémi Ferrato",
      title: "Etudiant ingénieur en informatique",
      image: "/images/photo.jpg",
      contact: {
        email: "remi.ferrato@gmail.com",
        phone: "+33 6 18823660",
        location: "Nancy, FR"
      },
      social: {
        github: "github.com/RemiF1908",
        linkedin: "linkedin.com/in/remiferrato"
      },
      about: "Etudiant en école d'ingénieur à Télécom Nancy"
    }),
    true
  );
  $$payload.out += `<header class="bg-card rounded-xl shadow-md overflow-hidden mb-8"><div class="md:flex"><div class="md:w-1/3 bg-primary p-8 flex items-center justify-center"><div class="text-center"><div class="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden shadow-lg"><img${attr("src", profile.image)} alt="Profile" class="w-full h-full object-cover"></div> <h1 class="text-2xl font-bold text-light">${escape_html(profile.name)}</h1> <p class="text-light">${escape_html(profile.title)}</p></div></div> <div class="md:w-2/3 p-8"><div class="space-y-6"><h2 class="text-2xl font-bold text-light mb-6">Mes contacts</h2> <div class="md:flex md:gap-8 space-y-4 md:space-y-0"><div class="flex-1 space-y-4"><div class="flex items-center"><svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg> <a${attr("href", `mailto:${profile.contact.email}`)} class="text-light hover:text-primary transition-colors">${escape_html(profile.contact.email)}</a></div> <div class="flex items-center"><svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg> <a${attr("href", `tel:${profile.contact.phone}`)} class="text-light hover:text-primary transition-colors">${escape_html(profile.contact.phone)}</a></div></div> <div class="flex-1 space-y-4"><div class="flex items-center"><svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg> <span class="text-light">${escape_html(profile.contact.location)}</span></div> <div class="flex items-center"><svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"></path></svg> <a${attr("href", `https://${profile.social.github}`)} target="_blank" rel="noopener noreferrer" class="text-light hover:text-primary transition-colors">${escape_html(profile.social.github)}</a></div> <div class="flex items-center"><svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> <a${attr("href", `https://${profile.social.linkedin}`)} target="_blank" rel="noopener noreferrer" class="text-light hover:text-primary transition-colors">${escape_html(profile.social.linkedin)}</a></div></div></div></div></div></div></header>`;
  bind_props($$props, { profile });
  pop();
}
function TimelineItem($$payload, $$props) {
  let title = $$props["title"];
  let company = $$props["company"];
  let period = $$props["period"];
  let bullets = $$props["bullets"];
  const each_array = ensure_array_like(bullets);
  $$payload.out += `<div class="relative pl-8 timeline-item"><div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div> <div class="mb-2"><h3 class="text-xl font-semibold">${escape_html(title)}</h3> <div class="flex flex-wrap justify-between text-light"><span>${escape_html(company)}</span> <span class="text-sm">${escape_html(period)}</span></div></div> <ul class="list-disc pl-5 space-y-2 text-light"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let bullet = each_array[$$index];
    $$payload.out += `<li>${escape_html(bullet)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { title, company, period, bullets });
}
function Experience($$payload) {
  const experiences = [
    {
      title: "Stage ouvrier",
      company: "IRNC (Institut de recherche sur la résolution non-violente des conflits)",
      period: "Mai-Juin 2024",
      bullets: [
        "Participation à la création du nouveau site web de l'institut",
        "Utilisation de drupal",
        "Utilisation de GIT et de Docker"
        // Other bullet points
      ]
    },
    {
      title: "Stage d'observation",
      company: "Nexvision, Marseille.",
      period: "Avril 2019",
      bullets: [
        "Découverte des métiers en lien avec l'optronique, la CAO, et le développement logiciel"
        // Other bullet points
      ]
    }
    // Other experiences
  ];
  const each_array = ensure_array_like(experiences);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-briefcase mr-3"></i> <span>Expérience professionnel</span></h2> <div class="space-y-8 relative"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let experience = each_array[$$index];
    TimelineItem($$payload, spread_props([experience]));
  }
  $$payload.out += `<!--]--></div></section>`;
}
function ProjectCard($$payload, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let tech = $$props["tech"];
  const each_array = ensure_array_like(tech);
  $$payload.out += `<div class="project-card bg-gray-1000 rounded-lg p-6 border border-gray-200 transition-all duration-300"><div class="flex items-center mb-4"><h3 class="text-lg font-semibold">${escape_html(title)}</h3></div> <p class="text-light mb-4">${escape_html(description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let t = each_array[$$index];
    $$payload.out += `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${escape_html(t)}</span>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { title, description, tech });
}
function Projects($$payload, $$props) {
  let projects = fallback(
    $$props["projects"],
    () => [
      {
        title: "OpenBar",
        description: "Application web open source permettant la gestion de la cafétéria de Télécom Nancy",
        tech: ["Golang", "Svelte", "MongoDB"],
        icon: "utensils"
      },
      {
        title: "EDT CPP",
        description: "Site web permettant aux étudiants de la Prépa des INP de Grenoble d'obtenir un fichier ICS avec leur emploi du temps personnalisé en fonction de leurs options  ",
        tech: ["Python", "Azure"],
        icon: "project-diagram"
      }
      // Add other projects
    ],
    true
  );
  const each_array = ensure_array_like(projects);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-code mr-3"></i> <span>Projets</span></h2> <div class="grid md:grid-cols-2 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$payload, spread_props([project]));
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { projects });
}
function SkillItem($$payload, $$props) {
  let name = $$props["name"];
  let percentage = $$props["percentage"];
  $$payload.out += `<div><div class="flex justify-between mb-1"><span>${escape_html(name)}</span> `;
  if (percentage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span>${escape_html(percentage)}%</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="skill-bar"><div class="skill-progress"${attr_style(`width: ${percentage}%`)}></div></div></div>`;
  bind_props($$props, { name, percentage });
}
function Skills($$payload, $$props) {
  push();
  let skills = fallback(
    $$props["skills"],
    () => ({
      frontend: [
        { name: "HTML/CSS", percentage: 85 },
        { name: "JavaScript/TypeScript", percentage: 60 }
      ],
      backend: [
        { name: "Python", percentage: 90 },
        { name: "Php", percentage: 70 },
        { name: "Golang", percentage: 20 }
      ],
      other: ["Git", "Docker", "Bash"]
    }),
    true
  );
  const each_array = ensure_array_like(skills.frontend);
  const each_array_1 = ensure_array_like(skills.backend);
  const each_array_2 = ensure_array_like(skills.other);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-cogs mr-3"></i> <span>Compétences</span></h2> <div class="space-y-6"><div><h3 class="font-semibold mb-2">Frontend</h3> <div class="space-y-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let skill = each_array[$$index];
    SkillItem($$payload, spread_props([skill]));
  }
  $$payload.out += `<!--]--></div></div> <div><h3 class="font-semibold mb-2">Backend</h3> <div class="space-y-3"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let skill = each_array_1[$$index_1];
    SkillItem($$payload, spread_props([skill]));
  }
  $$payload.out += `<!--]--></div></div> <div><h3 class="font-semibold mb-2">Other</h3> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let skill = each_array_2[$$index_2];
    $$payload.out += `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">${escape_html(skill)}</span>`;
  }
  $$payload.out += `<!--]--></div></div></div></section>`;
  bind_props($$props, { skills });
  pop();
}
function Education($$payload, $$props) {
  let education = fallback(
    $$props["education"],
    () => [
      {
        degree: "Ingénieur du numérique",
        institution: "Télécom Nancy",
        period: "2024 - 2027"
      },
      {
        degree: "Classe préparatoire intégré",
        institution: "Prépa des INP, Grenoble",
        period: "2022 - 2024"
      },
      {
        degree: "Baccalauréat Mathématiques - Sciences de l'ingénieur",
        institution: "Lycée de la Méditerranée, La Ciotat",
        period: "2019 - 2022"
      }
    ],
    true
  );
  const each_array = ensure_array_like(education);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-graduation-cap mr-3"></i> <span>Formation</span></h2> <div class="space-y-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let edu = each_array[$$index];
    $$payload.out += `<div><h3 class="text-lg font-semibold">${escape_html(edu.degree)}</h3> <p class="text-light">${escape_html(edu.institution)}</p> <p class="text-sm text-gray-500">${escape_html(edu.period)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { education });
}
function Certifications($$payload, $$props) {
  let certifications = fallback(
    $$props["certifications"],
    () => [
      {
        title: "MOOC Gestion de projet",
        issuer: "Rémi Bachelet",
        year: 2024
      },
      {
        title: "MOOC de l'ANSI",
        issuer: "SecNumacadémie",
        year: 2024
      }
      // Add other certifications
    ],
    true
  );
  const each_array = ensure_array_like(certifications);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-certificate mr-3"></i> <span>Certifications</span></h2> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cert = each_array[$$index];
    $$payload.out += `<div class="flex items-start"><div class="bg-primary bg-opacity-10 p-2 rounded-md mr-3"><i class="fas fa-award text-primary"></i></div> <div><h3 class="font-semibold">${escape_html(cert.title)}</h3> <p class="text-sm text-light">${escape_html(cert.issuer)} - ${escape_html(cert.year)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { certifications });
}
function Languages($$payload, $$props) {
  let languages = fallback(
    $$props["languages"],
    () => [
      {
        name: "Français",
        level: "Natif",
        percentage: 100
      },
      {
        name: "Angais",
        level: "Intermédiaire",
        percentage: 70
      },
      {
        name: "Italien",
        level: "Intermédiaire",
        percentage: 60
      }
    ],
    true
  );
  const each_array = ensure_array_like(languages);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-language mr-3"></i> <span>Langues</span></h2> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let lang = each_array[$$index];
    $$payload.out += `<div><div class="flex justify-between mb-1"><span>${escape_html(lang.name)}</span> <span>${escape_html(lang.level)}</span></div></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { languages });
}
function AssoCard($$payload, $$props) {
  let title = $$props["title"];
  let bullets = $$props["bullets"];
  const each_array = ensure_array_like(bullets);
  $$payload.out += `<div class="project-card bg-gray-1000 rounded-lg p-6 border border-gray-200 transition-all duration-300"><div class="flex items-center mb-4"><h3 class="text-lg font-semibold">${escape_html(title)}</h3></div> <ul class="list-disc pl-5 space-y-2 text-light"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let bullet = each_array[$$index];
    $$payload.out += `<li>${escape_html(bullet)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { title, bullets });
}
function Assocs($$payload, $$props) {
  let assocs = fallback(
    $$props["assocs"],
    () => [
      {
        title: "Trésorier du club de Cyber-sécurité de Télécom Nancy",
        bullets: [
          "Gestion d'un budget",
          "Réalisation du budget prévisionel annuel",
          "Développement du site web du club, proposant des cours sur la cyber-sécurité"
        ]
      },
      {
        title: "Vice-trésorier du club bar de Télécom Nancy (cafétéria)",
        bullets: [
          "Comptabilité",
          "Respect des règles sanitaires",
          "Logisitique",
          "Accueil client"
        ]
      },
      {
        title: "Responsable logistique du club vidéo de Télécom Nancy",
        bullets: [
          "Gestion du matériel",
          "Inventaire",
          "Utilisation de matériel son et vidéo",
          "Régie"
        ]
      },
      {
        title: "Administrateur de l'environement informatique des associations de Télécom Nancy",
        bullets: [
          "Gestion de serveurs web",
          "Utilisation de Google Workspace"
        ]
      }
    ],
    true
  );
  const each_array = ensure_array_like(assocs);
  $$payload.out += `<section class="bg-card rounded-xl shadow-md p-8"><h2 class="text-2xl font-bold text-primary mb-6 flex items-center"><i class="fas fa-code mr-3"></i> <span>Associatif</span></h2> <div class="grid md:grid-cols-2 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let assoc = each_array[$$index];
    AssoCard($$payload, spread_props([assoc]));
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { assocs });
}
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Rémi Ferrato</title>`;
  });
  $$payload.out += `<div class="bg-background text-light font-sans"><div class="container mx-auto px-4 py-8 max-w-6xl">`;
  Header($$payload, {});
  $$payload.out += `<!----> <div class="flex flex-col md:flex-row gap-8"><div class="md:w-2/3 space-y-8">`;
  Experience($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload, {});
  $$payload.out += `<!----> `;
  Assocs($$payload, {});
  $$payload.out += `<!----></div> <div class="md:w-1/3 space-y-8">`;
  Skills($$payload, {});
  $$payload.out += `<!----> `;
  Education($$payload, {});
  $$payload.out += `<!----> `;
  Certifications($$payload, {});
  $$payload.out += `<!----> `;
  Languages($$payload, {});
  $$payload.out += `<!----></div></div> <footer class="mt-12 text-center text-gray-500 text-sm"><p class="mt-4">© 2025 Rémi Ferrato.</p></footer></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DbIK1HuW.js.map
