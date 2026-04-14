import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-400/40 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                Disponible pour un CDI · À partir d'octobre 2026
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-400/40 rounded-full">
              <span className="text-purple-300 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                🔎 Recherche développeur IA
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Sir William NGOMA
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Software
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">
              Engineer
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Étudiant en alternance à l'École Supérieure d'Ingénieurs de Rennes (ESIR) —
            Spécialité Systèmes d'Information. Actuellement en poste d'alternant Data & IA.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            <span className="px-3.5 py-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full text-sm" style={{ fontFamily: "var(--font-heading)" }}>
              Dev Full Stack
            </span>
            <span className="px-3.5 py-1.5 bg-green-500/20 text-green-300 border border-green-400/30 rounded-full text-sm" style={{ fontFamily: "var(--font-heading)" }}>
              Data Engineer
            </span>
            <span className="px-3.5 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-sm" style={{ fontFamily: "var(--font-heading)" }}>
              Business Analyst
            </span>
            <span className="px-3.5 py-1.5 bg-pink-500/20 text-pink-300 border border-pink-400/30 rounded-full text-sm" style={{ fontFamily: "var(--font-heading)" }}>
              IA Générative
            </span>
            <span className="px-3.5 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-full text-sm" style={{ fontFamily: "var(--font-heading)" }}>
              Chef de Projet / Product Owner
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-base">🇫🇷</span>
              <span>Français <span className="text-slate-500">· Maternel</span></span>
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-1.5">
              <span className="text-base">🇬🇧</span>
              <span>Anglais <span className="text-slate-500">· Courant (TOEIC B2 : 880/990)</span></span>
            </span>
          </div>

          <div className="flex gap-3 mb-8">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-green-900/40 hover:shadow-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Download className="w-5 h-5" />
              Télécharger CV
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:border-green-400/60 hover:bg-white/15 transition-all shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Mail className="w-5 h-5" />
              Me contacter
            </Link>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Willthethreat8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 rounded-xl border border-white/20 hover:border-slate-400/40 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Github className="w-5 h-5 text-slate-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sir-william-ngoma-3ab907173/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 rounded-xl border border-white/20 hover:border-blue-400/40 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5 text-slate-300" />
            </a>
            <a
              href="mailto:nsirwilliam@gmail.com"
              className="p-2.5 bg-white/10 rounded-xl border border-white/20 hover:border-green-400/40 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 text-slate-300" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -top-8 -left-8 w-36 h-36 rounded-2xl border-2 border-green-200/50 bg-green-50/40" style={{ transform: "rotate(6deg)" }} />
          <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-2xl border-2 border-blue-200/50 bg-blue-50/40" style={{ transform: "rotate(-6deg)" }} />

          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-2xl shadow-green-900/40 flex flex-col items-center justify-center gap-4 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(255,255,255,0.3) 24px,rgba(255,255,255,0.3) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(255,255,255,0.3) 24px,rgba(255,255,255,0.3) 25px)",
              }}
            />
            <div className="text-7xl relative z-10">👨‍💻</div>
            <div className="relative z-10 text-center">
              <p className="text-green-400 text-sm tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                DATA · IA · GENAI
              </p>
              <p className="text-slate-400 text-xs mt-1">ESIR · 2026</p>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-sm opacity-70" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-sm opacity-70" />
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          À propos de moi
        </h2>
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-sm">
          <div className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            <p className="mb-5">
              Originaire du Congo-Brazzaville, je suis arrivé en France avec une passion pour les sciences et la technologie. Mon parcours m'a mené des classes préparatoires scientifiques (MPSI puis MP*) jusqu'à l'ingénierie informatique, où j'ai développé une double appétence : la maîtrise technique du développement logiciel, de la data et de l'IA, et le pilotage de projets de bout en bout.
            </p>
            <p className="mb-5">
              Aujourd'hui, je cherche à combiner ces deux dimensions. Mon profil technique me permet de comprendre en profondeur les enjeux de conception et d'architecture, tandis que mon goût pour la coordination, la gestion des parties prenantes et la vision produit m'oriente naturellement vers des rôles de Product Owner, chef de projet ou lead technique. Je suis convaincu qu'un bon manager technique est avant tout quelqu'un qui comprend ce que ses équipes construisent.
            </p>
            <p className="mb-5">
              Au-delà du code et des algorithmes, je suis quelqu'un de curieux et créatif. J'aime le basketball pour l'esprit d'équipe, la photographie pour capturer les moments, la cuisine du monde pour explorer les cultures, et la musique congolaise qui me rappelle mes racines. Ces passions m'ont appris l'importance de la diversité, de la collaboration et de la créativité.
            </p>
            <p>
              Mon objectif est de contribuer à des projets qui ont un impact positif sur la société — que ce soit en tant que développeur, ingénieur data/IA ou chef de projet. Que ce soit dans la santé, la finance ou l'aéronautique, je veux mettre mes compétences techniques et managériales au service d'un monde meilleur.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Qualités & Savoir-être
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              emoji: "🤝",
              title: "Travail d'équipe & Autonomie",
              desc: "Force de proposition, capacité d'adaptation rapide dans des environnements techniques variés",
              border: "border-green-400/20 hover:border-green-400/50",
              bg: "bg-green-500/15",
              glow: "hover:shadow-green-500/10",
            },
            {
              emoji: "🔍",
              title: "Curiosité & Rigueur",
              desc: "Volonté de comprendre, d'optimiser et d'innover dans chaque projet",
              border: "border-blue-400/20 hover:border-blue-400/50",
              bg: "bg-blue-500/15",
              glow: "hover:shadow-blue-500/10",
            },
            {
              emoji: "💡",
              title: "Proactivité & Innovation",
              desc: "Toujours à la recherche de solutions créatives et d'améliorations continues",
              border: "border-purple-400/20 hover:border-purple-400/50",
              bg: "bg-purple-500/15",
              glow: "hover:shadow-purple-500/10",
            },
            {
              emoji: "🎯",
              title: "Adaptabilité",
              desc: "Intégration rapide dans des environnements techniques et culturels variés",
              border: "border-yellow-400/20 hover:border-yellow-400/50",
              bg: "bg-yellow-500/15",
              glow: "hover:shadow-yellow-500/10",
            },
          ].map((q, i) => (
            <div
              key={q.title}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl border ${q.border} hover:shadow-lg ${q.glow} p-5 transition-all duration-300 flex items-start gap-4`}
            >
              <div className={`w-10 h-10 ${q.bg} rounded-xl flex items-center justify-center text-xl shrink-0`}>
                {q.emoji}
              </div>
              <div>
                <h3 className="text-white text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {q.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <blockquote className="text-2xl md:text-3xl font-medium text-slate-300 italic max-w-3xl mx-auto">
          "Cela semble toujours impossible, jusqu'à ce que ce soit fait."
        </blockquote>
        <p className="text-slate-500 mt-3 text-sm">— Nelson Mandela</p>
      </div>
    </div>
  );
}