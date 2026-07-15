import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, Construction } from "lucide-react";
import { useLang } from "../i18n";
import { getTechIcon } from "../techIcons";

const projects = [
  {
    title: {
      fr: "AeroTwin — Maintenance Prédictive Aéronautique",
      en: "AeroTwin — Aeronautical Predictive Maintenance",
    },
    category: { fr: "Data Engineering & IA", en: "Data Engineering & AI" },
    accent: "green",
    icon: "✈️",
    wip: true,
    description: {
      fr: "Jumeau numérique de flotte aéronautique construit autour du dataset N-CMAPSS DS01 : ingestion PostGIS, météo METAR et trajectoires simulées depuis LFBO. Prédiction de la durée de vie résiduelle (RUL) par XGBoost, API FastAPI et suivi des expériences avec MLflow.",
      en: "Aircraft fleet digital twin built around the N-CMAPSS DS01 dataset: PostGIS ingestion, METAR weather and simulated trajectories from LFBO. Remaining Useful Life (RUL) prediction with XGBoost, FastAPI API and MLflow experiment tracking.",
    },
    stack: ["Python", "Docker", "Prefect", "dbt", "PostGIS", "GeoPandas", "FastAPI", "XGBoost", "MLflow", "Streamlit"],
    date: "2026",
    links: { github: "https://github.com/Willthethreat8/Data_project" },
  },
  {
    title: { fr: "ESIR-as-a-Service Startup", en: "ESIR-as-a-Service Startup" },
    category: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    accent: "cyan",
    icon: "🚀",
    description: {
      fr: "Conception d'une architecture conteneurisée avec Docker, déployée sur machine virtuelle (VM) et orchestrée via Nginx en reverse proxy. Intégration d'outils de monitoring et réalisation de tests de charge pour assurer la scalabilité et la stabilité des services. Déploiement final sur Hostinger.",
      en: "Design of a containerized architecture with Docker, deployed on a virtual machine and orchestrated via Nginx as a reverse proxy. Monitoring tools integration and load testing to ensure service scalability and stability. Final deployment on Hostinger.",
    },
    stack: ["Docker", "Nginx", "VM", "Monitoring", "Load testing", "Hostinger"],
    date: "2025",
    links: { demo: "https://esir-startup.wajrock.me" },
  },
  {
    title: {
      fr: "Application d'Authentification & Gestion d'Utilisateurs",
      en: "Authentication & User Management App",
    },
    category: { fr: "Développement Web", en: "Web Development" },
    accent: "cyan",
    icon: "🔐",
    description: {
      fr: "Développement d'une application web d'authentification et de gestion d'utilisateurs avec Angular et NestJS. Mise en place d'une API REST sécurisée avec authentification JWT, gestion CRUD des utilisateurs. Sécurisation des routes via guards, interface responsive et conviviale.",
      en: "Web application for authentication and user management built with Angular and NestJS. Secure REST API with JWT authentication and full user CRUD. Route protection via guards, responsive and user-friendly interface.",
    },
    stack: ["Angular", "NestJS", "JWT", "API REST", "TypeScript", "Guards"],
    date: "2024",
    links: {},
  },
];

const accentMap: Record<
  string,
  { bar: string; badge: string; badgeText: string; chip: string; icon: string; link: string }
> = {
  green: {
    bar: "bg-green-500",
    badge: "bg-green-500/15 border-green-400/25",
    badgeText: "text-green-300",
    chip: "bg-green-500/10 border-green-400/20 text-green-300",
    icon: "bg-green-500/15",
    link: "hover:text-green-300",
  },
  purple: {
    bar: "bg-purple-500",
    badge: "bg-purple-500/15 border-purple-400/25",
    badgeText: "text-purple-300",
    chip: "bg-purple-500/10 border-purple-400/20 text-purple-300",
    icon: "bg-purple-500/15",
    link: "hover:text-purple-300",
  },
  orange: {
    bar: "bg-orange-500",
    badge: "bg-orange-500/15 border-orange-400/25",
    badgeText: "text-orange-300",
    chip: "bg-orange-500/10 border-orange-400/20 text-orange-300",
    icon: "bg-orange-500/15",
    link: "hover:text-orange-300",
  },
  blue: {
    bar: "bg-blue-500",
    badge: "bg-blue-500/15 border-blue-400/25",
    badgeText: "text-blue-300",
    chip: "bg-blue-500/10 border-blue-400/20 text-blue-300",
    icon: "bg-blue-500/15",
    link: "hover:text-blue-300",
  },
  pink: {
    bar: "bg-pink-500",
    badge: "bg-pink-500/15 border-pink-400/25",
    badgeText: "text-pink-300",
    chip: "bg-pink-500/10 border-pink-400/20 text-pink-300",
    icon: "bg-pink-500/15",
    link: "hover:text-pink-300",
  },
  cyan: {
    bar: "bg-cyan-500",
    badge: "bg-cyan-500/15 border-cyan-400/25",
    badgeText: "text-cyan-300",
    chip: "bg-cyan-500/10 border-cyan-400/20 text-cyan-300",
    icon: "bg-cyan-500/15",
    link: "hover:text-cyan-300",
  },
};

export function Projects() {
  const { lang, t } = useLang();

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-8"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("Projets Réalisés", "My Projects")}
        </h1>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          {t(
            "Mes projets personnels et académiques en Data Engineering, IA et DevOps",
            "My personal and academic projects in Data Engineering, AI and DevOps",
          )}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          const a = accentMap[project.accent];
          return (
            <motion.div
              key={project.title.fr}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.06 }}
              className="group relative bg-slate-800/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col"
            >
              <div className={`h-1 w-full ${a.bar}`} />

              {project.wip && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30 text-amber-300 backdrop-blur-sm shadow-lg">
                    <Construction className="w-3.5 h-3.5 animate-pulse" />
                    {t("En cours", "In progress")}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${a.icon}`}
                  >
                    {project.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${a.badge} ${a.badgeText}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.category[lang]}
                  </span>
                </div>

                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {project.title[lang]}
                </h3>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description[lang]}
                </p>

                <div className="mb-5">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => {
                      const icon = getTechIcon(tech);
                      return (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg border text-xs inline-flex items-center gap-1 ${a.chip}`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {icon && <i className={`${icon} colored text-sm`} aria-hidden="true" />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/8">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className={`flex items-center gap-1.5 text-slate-400 text-sm transition-colors ${a.link}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className={`flex items-center gap-1.5 text-slate-400 text-sm transition-colors ${a.link}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
