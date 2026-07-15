import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Award,
  BadgeCheck,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronDown,
  Github,
  ExternalLink,
  Images,
} from "lucide-react";
import { useState } from "react";
import { useLang } from "../i18n";


type AccentKey = "green" | "blue" | "purple" | "yellow";

const accentMap: Record<
  AccentKey,
  {
    border: string;
    badge: string;
    badgeText: string;
    dot: string;
    chip: string;
    chevron: string;
    linkHover: string;
    expandedBg: string;
  }
> = {
  green: {
    border: "border-green-400/30",
    badge: "bg-green-500/15 border-green-400/25 text-green-300",
    badgeText: "text-green-300",
    dot: "bg-green-400",
    chip: "bg-green-500/10 border-green-400/20 text-green-300",
    chevron: "text-green-400",
    linkHover: "hover:text-green-300 hover:border-green-400/40",
    expandedBg: "bg-green-500/5",
  },
  blue: {
    border: "border-blue-400/30",
    badge: "bg-blue-500/15 border-blue-400/25 text-blue-300",
    badgeText: "text-blue-300",
    dot: "bg-blue-400",
    chip: "bg-blue-500/10 border-blue-400/20 text-blue-300",
    chevron: "text-blue-400",
    linkHover: "hover:text-blue-300 hover:border-blue-400/40",
    expandedBg: "bg-blue-500/5",
  },
  purple: {
    border: "border-purple-400/30",
    badge: "bg-purple-500/15 border-purple-400/25 text-purple-300",
    badgeText: "text-purple-300",
    dot: "bg-purple-400",
    chip: "bg-purple-500/10 border-purple-400/20 text-purple-300",
    chevron: "text-purple-400",
    linkHover: "hover:text-purple-300 hover:border-purple-400/40",
    expandedBg: "bg-purple-500/5",
  },
  yellow: {
    border: "border-yellow-400/30",
    badge: "bg-yellow-500/15 border-yellow-400/25 text-yellow-300",
    badgeText: "text-yellow-300",
    dot: "bg-yellow-400",
    chip: "bg-yellow-500/10 border-yellow-400/20 text-yellow-300",
    chevron: "text-yellow-400",
    linkHover: "hover:text-yellow-300 hover:border-yellow-400/40",
    expandedBg: "bg-yellow-500/5",
  },
};


interface ExperienceItem {
  title: string;
  type: string;
  company: string;
  period: string;
  location: string;
  accent: string;
  summary: string;
  achievements: string[];
  skills: string[];
  links: { github?: string; demo?: string; images?: string };
}

type TFunc = (fr: string, en: string) => string;

const getExperiences = (t: TFunc): ExperienceItem[] => [
  {
    title: "Data & IA Engineer",
    type: t("Contrat de professionnalisation", "Professional training contract"),
    company: t("Acanthe (Filiale de BLOT Immobilier)", "Acanthe (subsidiary of BLOT Immobilier)"),
    period: t("Septembre 2025 – Présent", "September 2025 – Present"),
    location: "Rennes, France",
    accent: "green",
    summary: t(
      "Mission de professionnalisation de la gestion des données de prospection, amélioration de la détection de signaux faibles et intégration d'outils d'IA dans les processus internes d'Acanthe, en collaboration avec Conjecto.",
      "Professionalizing prospecting data management, improving weak-signal detection and integrating AI tools into Acanthe's internal processes, in collaboration with Conjecto.",
    ),
    achievements: [
      t(
        "Structuration des données de prospection dans le CRM interne (V4), avec nettoyage et enrichissement via open data (DVF, INSEE, données cadastrales)",
        "Structuring prospecting data in the internal CRM (V4), with cleaning and enrichment via open data (DVF, INSEE, cadastral data)",
      ),
      t(
        "Développement d'un module de détection de signaux faibles via crawling, NLP et classification automatique",
        "Development of a weak-signal detection module using crawling, NLP and automatic classification",
      ),
      t(
        "Intégration de notifications dynamiques avec déclencheurs d'événements métier",
        "Integration of dynamic notifications with business event triggers",
      ),
      t(
        "Mise en œuvre de traitements géospatiaux (SIG) sur des données de zonage urbain (PLU / 2AU)",
        "Implementation of geospatial (GIS) processing on urban zoning data (PLU / 2AU)",
      ),
      t(
        "Classement automatisé de documents en lien avec les workflows internes",
        "Automated document classification linked to internal workflows",
      ),
      t(
        "Appui technique à l'intégration de solutions d'agents conversationnels vocaux / chatbots IA",
        "Technical support for integrating voice conversational agents / AI chatbots",
      ),
      t(
        "Évaluation de solutions de traitement de documents juridiques (SaaS et open source)",
        "Evaluation of legal document processing solutions (SaaS and open source)",
      ),
    ],
    skills: ["Python", "Pandas", "Requests", "Scrapy", "NLP", "SQL", "API REST", "Open Data", t("SIG", "GIS"), "QGIS", "PostGIS", t("Automatisation", "Automation"), "n8n", "Zapier"],
    links: {},
  },
  {
    title: t("Développeur IA Générative", "Generative AI Developer"),
    type: t("Stage", "Internship"),
    company: "MBCS",
    period: t("Juin 2025 – Septembre 2025", "June 2025 – September 2025"),
    location: "Dinan, France",
    accent: "purple",
    summary: t(
      "Conception et déploiement d'agents intelligents utilisant le RAG et les LLMs. Développement de workflows d'automatisation et d'interfaces web pour chatbots IA.",
      "Design and deployment of intelligent agents using RAG and LLMs. Development of automation workflows and web interfaces for AI chatbots.",
    ),
    achievements: [
      t(
        "Conception et déploiement d'agents intelligents utilisant le RAG (Retrieval-Augmented Generation) et les LLMs",
        "Design and deployment of intelligent agents using RAG (Retrieval-Augmented Generation) and LLMs",
      ),
      t(
        "Développement de workflows d'automatisation avec n8n et Langchain",
        "Development of automation workflows with n8n and Langchain",
      ),
      t(
        "Création d'interfaces web responsives pour chatbots IA (HTML, CSS, JS, PHP)",
        "Creation of responsive web interfaces for AI chatbots (HTML, CSS, JS, PHP)",
      ),
    ],
    skills: ["RAG", "LLMs", "n8n", "Langchain", "HTML/CSS/JS", "PHP"],
    links: {},
  },
  {
    title: t("Employé Back-Office", "Back-Office Employee"),
    type: t("CDD", "Fixed-term contract"),
    company: "Zara",
    period: t("Septembre 2022 – Novembre 2022", "September 2022 – November 2022"),
    location: "Lyon, France",
    accent: "blue",
    summary: t(
      "Gestion des flux de marchandises et suivi logistique via outils informatiques en période de forte affluence.",
      "Goods flow management and logistics tracking using IT tools during peak periods.",
    ),
    achievements: [
      t(
        "Gestion des flux de marchandises : réception, tri, mise en rayon",
        "Goods flow management: receiving, sorting, shelving",
      ),
      t(
        "Utilisation d'un terminal mobile pour le suivi des articles et des stocks",
        "Use of a mobile terminal for item and stock tracking",
      ),
      t(
        "Saisie de données et suivi logistique via poste informatique",
        "Data entry and logistics tracking via computer workstation",
      ),
      t(
        "Application rigoureuse des procédures internes en période de forte affluence",
        "Rigorous application of internal procedures during peak periods",
      ),
    ],
    skills: [t("Logistique", "Logistics"), t("Gestion de stocks", "Stock management"), t("Travail d'équipe", "Teamwork"), t("Rigueur", "Rigor")],
    links: {},
  },
];

const getEducation = (t: TFunc) => [
  {
    degree: t("Diplôme d'Ingénieur en Informatique", "Master's Degree in Computer Engineering"),
    school: t("ESIR (École Supérieure d'Ingénieurs de Rennes)", "ESIR (Rennes Graduate School of Engineering)"),
    specialization: t(
      "Spécialisation : Système d'Information, Sécurité et Data Intelligence",
      "Major: Information Systems, Security and Data Intelligence",
    ),
    location: "Rennes, France",
    period: t("Septembre 2024 – En cours", "September 2024 – Present"),
    accent: "green",
    highlights: [
      t(
        "Développement logiciel avancé, Intelligence artificielle, Big Data",
        "Advanced software development, Artificial intelligence, Big Data",
      ),
      t("Systèmes distribués, Parallélisme", "Distributed systems, Parallel computing"),
      t(
        "Gestion de projet, Management, Communication, Séminaires de recherche",
        "Project management, Leadership, Communication, Research seminars",
      ),
    ],
  },
  {
    degree: t("Cycle Ingénieur Informatique (Niveau Master 1)", "Computer Engineering Program (Master 1 level)"),
    school: "ECE Paris-Lyon",
    specialization: "",
    location: "Lyon / Paris, France",
    period: t("Septembre 2022 – Février 2024", "September 2022 – February 2024"),
    accent: "purple",
    highlights: [
      t(
        "Technologies web avancées, Bases de données avancées",
        "Advanced web technologies, Advanced databases",
      ),
      t("DevOps, Sécurité des réseaux informatiques", "DevOps, Network security"),
      t("Systèmes d'exploitation (Linux, Windows)", "Operating systems (Linux, Windows)"),
    ],
  },
];


function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const a = accentMap[exp.accent as AccentKey];
  const hasLinks = exp.links.github || exp.links.demo || exp.links.images;

  return (
    <div className="relative pl-12">
      <div
        className={`absolute left-[13px] top-6 w-2.5 h-2.5 rounded-full ${a.dot} ring-2 ring-slate-900`}
      />

      <div
        className={`bg-slate-800/60 border backdrop-blur-sm rounded-2xl overflow-hidden ${a.border} transition-colors ${open ? "bg-slate-800/80" : "hover:bg-slate-800/80"}`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-6 flex items-start justify-between gap-4 group"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                }}
              >
                {exp.title}
              </h3>
              <span
                className={`px-2.5 py-0.5 rounded-full border text-xs ${a.badge}`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.type}
              </span>
            </div>
            <p
              className={`font-medium text-sm mb-2 ${a.badgeText}`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {exp.company}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </span>
            </div>
            {!open && (
              <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-2">
                {exp.summary}
              </p>
            )}
          </div>

          <div
            className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10 ${a.chevron}`}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className={`px-6 pb-6 border-t border-white/8 pt-5 ${a.expandedBg}`}
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {exp.summary}
                </p>

                <h4
                  className="text-slate-400 text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("Missions", "Responsibilities")}
                </h4>
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-300 text-sm"
                    >
                      <ChevronRight
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${a.chevron}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-2.5 py-1 rounded-lg border text-xs ${a.chip}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {hasLinks && (
                  <div className="border-t border-white/8 pt-4 flex flex-wrap gap-3">
                    {exp.links.github && (
                      <a
                        href={exp.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm transition-all ${a.linkHover}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        <Github className="w-4 h-4" />
                        {t("Code source", "Source code")}
                      </a>
                    )}
                    {exp.links.demo && (
                      <a
                        href={exp.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm transition-all ${a.linkHover}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("Voir le projet", "View project")}
                      </a>
                    )}
                    {exp.links.images && (
                      <a
                        href={exp.links.images}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm transition-all ${a.linkHover}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        <Images className="w-4 h-4" />
                        {t("Captures d'écran", "Screenshots")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


export function Experience() {
  const { t } = useLang();
  const experiences = getExperiences(t);
  const education = getEducation(t);

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-10"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("Parcours & Expériences", "Background & Experience")}
        </h1>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          {t(
            "Mon parcours académique et professionnel en Informatique, Data et Transformation Digitale",
            "My academic and professional journey in Computer Science, Data and Digital Transformation",
          )}
        </p>
      </motion.div>

      <div className="grid xl:grid-cols-2 gap-x-10 items-start">
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-blue-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Expérience Professionnelle", "Professional Experience")}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/25 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-purple-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Formation", "Education")}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />
          <div className="space-y-6">
            {education.map((edu, index) => {
              const a = accentMap[edu.accent as AccentKey];
              return (
                <div
                  key={edu.degree}
                  className="relative pl-12"
                >
                  <div
                    className={`absolute left-[13px] top-6 w-2.5 h-2.5 rounded-full ${a.dot} ring-2 ring-slate-900`}
                  />
                  <div
                    className={`bg-slate-800/60 border backdrop-blur-sm rounded-2xl p-6 ${a.border} hover:bg-slate-800/80 transition-colors`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3
                          className="text-white mb-0.5"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: "1.05rem",
                          }}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className={`font-medium text-sm ${a.badgeText}`}
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {edu.school}
                        </p>
                        {edu.specialization && (
                          <p className="text-slate-400 text-sm mt-0.5">
                            {edu.specialization}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-xs shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-300 text-sm"
                        >
                          <ChevronRight
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${a.chevron}`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex items-center justify-center">
            <BadgeCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            {
              title: t("Python pour la Data Analyse #3", "Python for Data Analysis #3"),
              issuer: "DataScientest",
              date: t("Novembre 2023", "November 2023"),
              location: "Paris",
              accent: "green",
              highlights: [
                t("Programmation en Python (bases et avancé)", "Python programming (basics and advanced)"),
                t(
                  "Manipulation de données avec Pandas (DataFrames, nettoyage, transformation)",
                  "Data manipulation with Pandas (DataFrames, cleaning, transformation)",
                ),
                t(
                  "Visualisation des données avec Matplotlib et Seaborn",
                  "Data visualization with Matplotlib and Seaborn",
                ),
                t(
                  "Concepts statistiques pour l'analyse des données",
                  "Statistical concepts for data analysis",
                ),
                t("Automatisation et gestion de datasets", "Automation and dataset management"),
              ],
            },
            {
              title: t(
                "MOOC Gestion de Projet — Tronc commun GdP 20",
                "Project Management MOOC — GdP 20 core curriculum",
              ),
              issuer: "Centrale Lille — Rémi Bachelet",
              date: "2023",
              location: t("En ligne", "Online"),
              accent: "purple",
              highlights: [
                t(
                  "Méthodologie de gestion de projet (cycle de vie, objectifs, livrables)",
                  "Project management methodology (lifecycle, goals, deliverables)",
                ),
                t(
                  "Planification et organisation (PERT, Gantt, gestion des ressources)",
                  "Planning and organization (PERT, Gantt, resource management)",
                ),
                t("Gestion des risques et des parties prenantes", "Risk and stakeholder management"),
                t("Outils et techniques de suivi de projet", "Project tracking tools and techniques"),
                t("Approches agiles et traditionnelles", "Agile and traditional approaches"),
              ],
            },
            {
              title: "Scientific Computing with Python",
              issuer: "freeCodeCamp",
              date: t("Avril 2026", "April 2026"),
              location: t("En ligne", "Online"),
              accent: "blue",
              highlights: [
                t(
                  "Maîtrise des fondamentaux Python (variables, structures de contrôle, fonctions)",
                  "Mastery of Python fundamentals (variables, control structures, functions)",
                ),
                t(
                  "Manipulation avancée des chaînes de caractères et structures de données",
                  "Advanced string and data structure manipulation",
                ),
                t(
                  "Programmation orientée objet et modularisation de code",
                  "Object-oriented programming and code modularization",
                ),
                t(
                  "Lecture/écriture de fichiers et gestion des exceptions",
                  "File reading/writing and exception handling",
                ),
                t(
                  "Résolution d'exercices pratiques de calcul scientifique en Python",
                  "Solving practical scientific computing exercises in Python",
                ),
              ],
            },
          ].map((cert, index) => {
            const a = accentMap[cert.accent as AccentKey];
            return (
              <div
                key={cert.title}
                className={`bg-slate-800/60 border backdrop-blur-sm rounded-2xl p-6 ${a.border} hover:bg-slate-800/80 transition-colors`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${a.badge}`}
                  >
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="text-white text-sm mb-0.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`font-medium text-xs ${a.badgeText}`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-3 text-slate-500 text-xs mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {cert.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {cert.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-300 text-xs"
                    >
                      <ChevronRight
                        className={`w-3 h-3 mt-0.5 shrink-0 ${a.chevron}`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
