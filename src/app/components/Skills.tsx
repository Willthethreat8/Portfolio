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

export function Skills() {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: Code,
      color: "blue",
      skills: [
        "Python ",
        "Java",
        "JavaScript / TypeScript",
        "SQL",
        "Bash",
      ],
    },
    {
      title: "Frameworks & Librairies",
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
      color: "cyan",
      skills: [
        "Apache Kafka",
        "Apache Spark",
        "PostGIS",
        "QGIS",
        "ETL / ELT",
      ],
    },
    {
      title: "Intelligence Artificielle",
      icon: Brain,
      color: "purple",
      skills: [
        "Machine Learning",
        "IA Générative",
        "RAG",
        "LLMs",
        "Prompt Engineering",
      ],
    },
    {
      title: "Business Analysis & Méthodologies",
      icon: BarChart3,
      color: "pink",
      skills: [
        "Méthodologies Agile / Scrum",
        "User Stories",
        "Backlog Management",
        "Cahier des charges",
        "Analyse fonctionnelle",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "orange",
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
      title: "Outils & Collaboration",
      icon: Workflow,
      color: "blue",
      skills: [
        "Jira",
        "Confluence",
        "SharePoint",
        "VS Code",
        "Notion",
      ],
    },
    {
      title: "Réseaux & Conformité",
      icon: Database,
      color: "blue",
      skills: [
        "Protocoles TCP/IP",
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
          Compétences Techniques
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Un ensemble de compétences acquises au cours de ma formation à l'ESIR
          et de mes projets personnels et professionnels
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const c = colorMap[category.color];
          const Icon = category.icon;

          return (
            <div
              key={category.title}
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
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-sm transition-colors cursor-default ${c.chip}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-yellow-500/15 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-yellow-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            En cours d'apprentissage
          </h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">
          Technologies que je suis en train d'approfondir dans le cadre de mes projets et de mon alternance.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Apache Airflow",
            "dbt",
            "Terraform",
            "AWS",
            "GitHub Actions",
            "Kubernetes",
          ].map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl border border-yellow-400/25 bg-yellow-500/10 text-yellow-300 text-sm flex items-center gap-2 cursor-default hover:bg-yellow-500/20 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
