import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Construction,
  ChevronDown,
} from "lucide-react";
import { useLang } from "../i18n";
import { getTechIcon } from "../techIcons";

/* ---------- Typing animé ---------- */

function TypingRole({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === current) delay = 2200;
    if (deleting && text === "") delay = 350;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true);
        else setText(current.slice(0, text.length + 1));
      } else if (text === "") {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <div
      className="h-8 mb-4 text-lg md:text-xl flex items-center"
      style={{ fontFamily: "var(--font-mono)" }}
      aria-label={roles[roleIndex]}
    >
      <span className="text-slate-500 mr-2">&gt;</span>
      <span className="text-emerald-300">{text}</span>
      <span className="text-emerald-400 animate-pulse ml-0.5">▍</span>
    </div>
  );
}

/* ---------- Compteur animé ---------- */

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Environnements sans IntersectionObserver (jsdom, vieux navigateurs)
    if (typeof IntersectionObserver === "undefined") {
      setVal(target);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const duration = 1200;
          const step = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- Tuile bento ---------- */

function Tile({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 110, damping: 16, delay }}
      className={`bg-slate-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:border-emerald-400/30 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Données du pipeline (compact) ---------- */

const pipelineStages = [
  { icon: "📡", label: "N-CMAPSS" },
  { icon: "🗄️", label: "PostGIS" },
  { icon: "⚙️", label: "dbt" },
  { icon: "🤖", label: "XGBoost" },
  { icon: "🚀", label: "FastAPI" },
];

/* ---------- Page ---------- */

export function Home() {
  const { lang, t } = useLang();
  const [aboutOpen, setAboutOpen] = useState(false);

  const roles =
    lang === "fr"
      ? ["Data Engineer", "IA Générative & LLMs", "Dev Full Stack", "Product Owner"]
      : ["Data Engineer", "Generative AI & LLMs", "Full Stack Dev", "Product Owner"];

  const skillIcons = ["Python", "Docker", "PostGIS", "FastAPI", "Angular", "Apache Kafka", "Git", "Linux"];

  const qualities = [
    { emoji: "🤝", label: t("Travail d'équipe", "Teamwork") },
    { emoji: "🔍", label: t("Curiosité & Rigueur", "Curiosity & Rigor") },
    { emoji: "💡", label: t("Proactivité", "Proactivity") },
    { emoji: "🎯", label: t("Adaptabilité", "Adaptability") },
  ];

  const hobbies = ["🏀", "🚴", "🎮", "🎨", "🥾", "🎵", "🍜", "📷"];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* ---- Profil (grande tuile) ---- */}
        <Tile className="md:col-span-2 lg:row-span-2 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-400/40 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span
                className="text-green-300 text-xs"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t(
                  "Disponible pour un CDI · Octobre 2026",
                  "Open to full-time roles · October 2026",
                )}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-1 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sir William NGOMA
            </h1>
            <h2
              className="text-xl md:text-2xl font-bold mb-2 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400"
                style={{ backgroundSize: "200% auto", animation: "gradient-x 5s ease-in-out infinite" }}
              >
                Data & AI Engineer
              </span>
            </h2>
            <TypingRole key={lang} roles={roles} />

            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              {t(
                "Alternant Data & IA — École Supérieure d'Ingénieurs de Rennes (ESIR), spécialité Systèmes d'Information.",
                "Data & AI apprentice — ESIR (Rennes Graduate School of Engineering), Information Systems major.",
              )}
            </p>

            <div className="flex items-center gap-3 mb-5 text-xs text-slate-400">
              <span>🇫🇷 {t("Maternel", "Native")}</span>
              <span className="w-px h-3 bg-white/20" />
              <span>🇬🇧 {t("Courant · TOEIC 880", "Fluent · TOEIC 880")}</span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5 mb-4">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-green-900/40"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Download className="w-4 h-4" />
                {t("Télécharger CV", "Download resume")}
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 text-white text-sm rounded-xl hover:border-green-400/60 hover:bg-white/15 transition-all"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Mail className="w-4 h-4" />
                {t("Me contacter", "Contact me")}
              </Link>
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com/Willthethreat8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sir-william-ngoma-3ab907173/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="mailto:nsirwilliam@gmail.com"
                className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>
        </Tile>

        {/* ---- AeroTwin (tuile large) ---- */}
        <Tile className="md:col-span-2 relative overflow-hidden" delay={0.08}>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500" />
          <div className="flex items-center justify-between gap-3 mb-2">
            <p
              className="text-emerald-400 text-[10px] tracking-[0.25em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("PROJET VEDETTE", "FEATURED PROJECT")}
            </p>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 border border-amber-400/30 text-amber-300">
              <Construction className="w-3 h-3" />
              {t("En cours", "In progress")}
            </span>
          </div>

          <h3
            className="text-lg font-bold text-white mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ✈️ AeroTwin —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t("Jumeau numérique aéronautique", "Aeronautical digital twin")}
            </span>
          </h3>
          <p className="text-slate-400 text-xs mb-4 leading-relaxed">
            {t(
              "Pipeline data de bout en bout : capteurs → prédiction de durée de vie résiduelle (RUL), suivi MLflow.",
              "End-to-end data pipeline: sensors → Remaining Useful Life (RUL) prediction, MLflow tracking.",
            )}
          </p>

          {/* Pipeline compact */}
          <div className="flex items-center gap-1 mb-4 flex-wrap">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-1">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/70 border border-white/10 rounded-lg text-xs text-slate-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <span>{stage.icon}</span>
                  {stage.label}
                </span>
                {i < pipelineStages.length - 1 && (
                  <motion.span
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
                    className="text-emerald-400"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Willthethreat8/Data_project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 text-xs hover:text-emerald-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
            <Link
              to="/projets"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs hover:bg-emerald-500/25 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("Voir le projet", "View project")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Tile>

        {/* ---- Stats (tuile large) ---- */}
        <Tile className="md:col-span-2" delay={0.14}>
          <div className="grid grid-cols-3 gap-4 h-full items-center">
            {[
              { target: 3, suffix: "+", label: t("Projets", "Projects") },
              { target: 25, suffix: "+", label: t("Technologies", "Technologies") },
              { target: 880, suffix: "", label: "TOEIC" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CountUp target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-slate-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Tile>

        {/* ---- À propos condensé ---- */}
        <Tile className="md:col-span-2" delay={0.1}>
          <h3
            className="text-white font-bold mb-2 text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("À propos de moi", "About me")}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t(
              "Du Congo-Brazzaville aux classes prépa (MPSI, MP*) puis à l'ingénierie informatique : je combine maîtrise technique (data, IA, dev) et pilotage de projets, avec l'ambition de contribuer à des produits qui ont un impact positif.",
              "From Congo-Brazzaville through intensive prep classes (MPSI, MP*) to computer engineering: I combine technical mastery (data, AI, dev) with project leadership, aiming to build products with a positive impact.",
            )}
          </p>
          <AnimatePresence initial={false}>
            {aboutOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {t(
                    "Mon profil technique me permet de comprendre en profondeur les enjeux de conception et d'architecture, tandis que mon goût pour la coordination et la vision produit m'oriente vers des rôles de Product Owner ou lead technique. Au-delà du code : basketball, photographie, cuisine du monde et musique congolaise m'ont appris la diversité, la collaboration et la créativité.",
                    "My technical background lets me deeply understand design and architecture challenges, while my taste for coordination and product vision draws me toward Product Owner or tech lead roles. Beyond code: basketball, photography, world cuisine and Congolese music taught me diversity, collaboration and creativity.",
                  )}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="mt-3 flex items-center gap-1 text-emerald-300 text-xs hover:text-emerald-200 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {aboutOpen ? t("Réduire", "Show less") : t("En savoir plus", "Read more")}
            <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }}>
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        </Tile>

        {/* ---- Compétences (aperçu) ---- */}
        <Tile delay={0.16}>
          <h3
            className="text-white font-bold mb-3 text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Compétences", "Skills")}
          </h3>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {skillIcons.map((tech) => {
              const icon = getTechIcon(tech);
              return (
                <div
                  key={tech}
                  title={tech}
                  className="aspect-square rounded-lg bg-slate-900/70 border border-white/10 flex items-center justify-center text-xl hover:border-emerald-400/40 hover:scale-110 transition-all"
                >
                  {icon ? (
                    <i className={`${icon} colored`} aria-hidden="true" />
                  ) : (
                    <span className="text-xs text-slate-400">{tech.slice(0, 2)}</span>
                  )}
                </div>
              );
            })}
          </div>
          <Link
            to="/competences"
            className="flex items-center gap-1 text-emerald-300 text-xs hover:text-emerald-200 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Voir tout", "See all")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Tile>

        {/* ---- Qualités ---- */}
        <Tile delay={0.2}>
          <h3
            className="text-white font-bold mb-3 text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Qualités", "Qualities")}
          </h3>
          <ul className="space-y-2.5">
            {qualities.map((q) => (
              <li key={q.label} className="flex items-center gap-2.5 text-slate-300 text-xs">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-sm shrink-0">
                  {q.emoji}
                </span>
                {q.label}
              </li>
            ))}
          </ul>
        </Tile>

        {/* ---- Hobbies ---- */}
        <Tile delay={0.24}>
          <h3
            className="text-white font-bold mb-3 text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hobbies
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {hobbies.map((h, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.25, rotate: 8 }}
                className="w-9 h-9 rounded-lg bg-slate-900/70 border border-white/10 flex items-center justify-center text-lg cursor-default"
              >
                {h}
              </motion.span>
            ))}
          </div>
          <Link
            to="/hobbies"
            className="flex items-center gap-1 text-emerald-300 text-xs hover:text-emerald-200 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Découvrir", "Discover")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Tile>

        {/* ---- Contact rapide ---- */}
        <Tile delay={0.28} className="flex flex-col justify-between">
          <div>
            <h3
              className="text-white font-bold mb-2 text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("Discutons", "Let's talk")}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              {t(
                "Une opportunité, un projet, une question ?",
                "An opportunity, a project, a question?",
              )}
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-xs font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all shadow-md"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Mail className="w-3.5 h-3.5" />
            {t("Me contacter", "Contact me")}
          </Link>
        </Tile>
      </div>

      {/* ---- Citation ---- */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 text-sm italic max-w-2xl mx-auto mt-10"
      >
        "The best way to predict the future is to invent it." — Alan Kay
      </motion.p>
    </div>
  );
}
