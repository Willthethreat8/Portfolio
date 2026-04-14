import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, Construction } from "lucide-react";

const projects = [
  {
    title: "AeroTwin — Maintenance Prédictive Aéronautique",
    category: "Data Engineering & IA",
    accent: "orange",
    icon: "✈️",
    wip: true,
    description:
      "Plateforme end-to-end de surveillance de l'usure des moteurs d'avions, capable de prédire la durée de vie restante (RUL) et d'afficher l'état de la flotte sur une carte 3D en temps réel. Architecture Lambda combinant batch processing (Airflow, dbt) et streaming (Kafka, Spark), avec modèle ML (XGBoost) servi via FastAPI et tracking MLflow.",
    stack: ["Python", "Docker", "Kafka", "Spark", "Airflow", "dbt", "PostGIS", "FastAPI", "XGBoost", "MLflow", "Kepler.gl", "Grafana"],
    date: "2026",
    links: { github: "https://github.com/Willthethreat8/Data_project" },
  },
  {
    title: "ESIR-as-a-Service Startup",
    category: "DevOps & Cloud",
    accent: "green",
    icon: "🚀",
    description:
      "Conception d'une architecture conteneurisée avec Docker, déployée sur machine virtuelle (VM) et orchestrée via Nginx en reverse proxy. Intégration d'outils de monitoring et réalisation de tests de charge pour assurer la scalabilité et la stabilité des services. Déploiement final sur Hostinger.",
    stack: ["Docker", "Nginx", "VM", "Monitoring", "Tests de charge", "Hostinger"],
    date: "2025",
    links: { demo: "https://esir-startup.wajrock.me" },
  },
  {
    title: "Application d'Authentification & Gestion d'Utilisateurs",
    category: "Développement Web",
    accent: "blue",
    icon: "🔐",
    description:
      "Développement d'une application web d'authentification et de gestion d'utilisateurs avec Angular et NestJS. Mise en place d'une API REST sécurisée avec authentification JWT, gestion CRUD des utilisateurs. Sécurisation des routes via guards, interface responsive et conviviale.",
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
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-14"
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Projets Réalisés
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Mes projets personnels et académiques en Data Engineering, IA et DevOps
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const a = accentMap[project.accent];
          return (
            <div
              key={project.title}
              className="group relative bg-slate-800/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col"
            >
              <div className={`h-1 w-full ${a.bar}`} />

              {project.wip && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30 text-amber-300 backdrop-blur-sm shadow-lg">
                    <Construction className="w-3.5 h-3.5 animate-pulse" />
                    En cours
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
                    {project.category}
                  </span>
                </div>

                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="mb-5">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg border text-xs ${a.chip}`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {tech}
                      </span>
                    ))}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
