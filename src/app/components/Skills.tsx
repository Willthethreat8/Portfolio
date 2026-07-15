import { motion } from "motion/react";
import {
  Database,
  Brain,
  Code,
  Cloud,
  Workflow,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { useLang } from "../i18n";
import { getTechIcon } from "../techIcons";

export function Skills() {
  const { t } = useLang();

  const skillCategories = [
    {
      title: t("Langages de Programmation", "Programming Languages"),
      icon: Code,
      color: "cyan",
      skills: [
        "Python ",
        "Java",
        "JavaScript / TypeScript",
        "SQL",
        "Bash",
      ],
    },
    {
      title: t("Frameworks & Librairies", "Frameworks & Libraries"),
      icon: Workflow,
      color: "green",
      skills: [
        "Node.js",
        "NestJS",
        "Angular",
        "Laravel",
      ],
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "green",
      skills: [
        "Apache Kafka",
        "Apache Spark",
        "PostGIS",
        "QGIS",
        "ETL / ELT",
      ],
    },
    {
      title: t("Intelligence Artificielle", "Artificial Intelligence"),
      icon: Brain,
      color: "green",
      skills: [
        "Machine Learning",
        t("IA Générative", "Generative AI"),
        "RAG",
        "LLMs",
        "Prompt Engineering",
      ],
    },
    {
      title: t("Business Analysis & Méthodologies", "Business Analysis & Methodologies"),
      icon: BarChart3,
      color: "cyan",
      skills: [
        t("Méthodologies Agile / Scrum", "Agile / Scrum methodologies"),
        "User Stories",
        "Backlog Management",
        t("Cahier des charges", "Requirements specification"),
        t("Analyse fonctionnelle", "Functional analysis"),
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "green",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "GitLab",
        "Linux",
        "n8n",
      ],
    },
    {
      title: t("Outils & Collaboration", "Tools & Collaboration"),
      icon: Workflow,
      color: "cyan",
      skills: [
        "Jira",
        "Confluence",
        "SharePoint",
        "VS Code",
        "Notion",
      ],
    },
    {
      title: t("Réseaux & Conformité", "Networks & Compliance"),
      icon: Database,
      color: "green",
      skills: [
        t("Protocoles TCP/IP", "TCP/IP protocols"),
        "ISO 27001",
        "RGPD",
      ],
    },
  ];

  const colorMap: Record<
    string,
    {
      card: string;
      header: string;
      icon: string;
      chip: string;
      title: string;
    }
  > = {
    green: {
      card: "border-green-400/20 bg-slate-800/60",
      header: "bg-green-500/10",
      icon: "text-green-400",
      chip: "bg-green-500/10 text-green-300 border-green-400/20 hover:bg-green-500/20",
      title: "text-green-300",
    },
    purple: {
      card: "border-purple-400/20 bg-slate-800/60",
      header: "bg-purple-500/10",
      icon: "text-purple-400",
      chip: "bg-purple-500/10 text-purple-300 border-purple-400/20 hover:bg-purple-500/20",
      title: "text-purple-300",
    },
    blue: {
      card: "border-blue-400/20 bg-slate-800/60",
      header: "bg-blue-500/10",
      icon: "text-blue-400",
      chip: "bg-blue-500/10 text-blue-300 border-blue-400/20 hover:bg-blue-500/20",
      title: "text-blue-300",
    },
    orange: {
      card: "border-orange-400/20 bg-slate-800/60",
      header: "bg-orange-500/10",
      icon: "text-orange-400",
      chip: "bg-orange-500/10 text-orange-300 border-orange-400/20 hover:bg-orange-500/20",
      title: "text-orange-300",
    },
    cyan: {
      card: "border-cyan-400/20 bg-slate-800/60",
      header: "bg-cyan-500/10",
      icon: "text-cyan-400",
      chip: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-500/20",
      title: "text-cyan-300",
    },
    pink: {
      card: "border-pink-400/20 bg-slate-800/60",
      header: "bg-pink-500/10",
      icon: "text-pink-400",
      chip: "bg-pink-500/10 text-pink-300 border-pink-400/20 hover:bg-pink-500/20",
      title: "text-pink-300",
    },
  };

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
          {t("Compétences Techniques", "Technical Skills")}
        </h1>
        <p className="text-base text-slate-400 max-w-3xl mx-auto">
          {t(
            "Un ensemble de compétences acquises au cours de ma formation à l'ESIR et de mes projets personnels et professionnels",
            "A set of skills built through my studies at ESIR and my personal and professional projects",
          )}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => {
          const c = colorMap[category.color];
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.05 }}
              className={`rounded-2xl border backdrop-blur-sm ${c.card} overflow-hidden`}
            >
              <div className={`flex items-center gap-3 px-6 py-4 ${c.header}`}>
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <h3
                  className={`font-semibold ${c.title}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="px-6 py-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const icon = getTechIcon(skill);
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-sm transition-colors cursor-default inline-flex items-center gap-1.5 ${c.chip}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {icon && <i className={`${icon} colored text-base`} aria-hidden="true" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-yellow-500/15 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-yellow-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("En cours d'apprentissage", "Currently learning")}
          </h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">
          {t(
            "Technologies que je suis en train d'approfondir dans le cadre de mes projets et de mon alternance.",
            "Technologies I'm currently deepening through my projects and apprenticeship.",
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Apache Airflow",
            "dbt",
            "Terraform",
            "AWS",
            "GitHub Actions",
            "Kubernetes",
          ].map((skill) => {
            const icon = getTechIcon(skill);
            return (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl border border-yellow-400/25 bg-yellow-500/10 text-yellow-300 text-sm flex items-center gap-2 cursor-default hover:bg-yellow-500/20 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                {icon && <i className={`${icon} colored text-base`} aria-hidden="true" />}
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
