import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTour } from "./TourGuide";
import { useLang } from "../i18n";

const STORAGE_KEY = "welcome-tour-seen";
export const OPEN_TOUR_EVENT = "open-welcome-tour";

type Step = "welcome" | "ask" | "tree";

type SectionNode = {
  path: string;
  label: { fr: string; en: string };
  icon: string;
  desc: { fr: string; en: string };
  x: number; // % dans la carte
  y: number;
  curve: string; // chemin SVG depuis la racine (50,50)
};

const sections: SectionNode[] = [
  { path: "/", label: { fr: "Accueil", en: "Home" }, icon: "🏠", desc: { fr: "Qui je suis", en: "Who I am" }, x: 16, y: 16, curve: "M 50 50 C 38 48, 28 16, 16 16" },
  { path: "/competences", label: { fr: "Compétences", en: "Skills" }, icon: "🧠", desc: { fr: "Stack & savoir-faire", en: "Stack & know-how" }, x: 11, y: 50, curve: "M 50 50 C 38 50, 26 50, 11 50" },
  { path: "/projets", label: { fr: "Projets", en: "Projects" }, icon: "🚀", desc: { fr: "Ce que je construis", en: "What I build" }, x: 16, y: 84, curve: "M 50 50 C 38 52, 28 84, 16 84" },
  { path: "/experience", label: { fr: "Expérience", en: "Experience" }, icon: "💼", desc: { fr: "Mon parcours", en: "My journey" }, x: 84, y: 16, curve: "M 50 50 C 62 48, 72 16, 84 16" },
  { path: "/hobbies", label: { fr: "Hobbies", en: "Hobbies" }, icon: "🎧", desc: { fr: "Au-delà du code", en: "Beyond the code" }, x: 89, y: 50, curve: "M 50 50 C 62 50, 74 50, 89 50" },
  { path: "/contact", label: { fr: "Contact", en: "Contact" }, icon: "✉️", desc: { fr: "Discutons ensemble", en: "Let's talk" }, x: 84, y: 84, curve: "M 50 50 C 62 52, 72 84, 84 84" },
];

function TypedLine({ text, onDone }: { text: string; onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c + 1), 55);
    return () => clearTimeout(t);
  }, [count, text, onDone]);

  return (
    <p
      className="text-2xl md:text-4xl text-emerald-300 text-center px-6"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span className="text-slate-500">&gt; </span>
      {text.slice(0, count)}
      <span className="text-emerald-400 animate-pulse">▍</span>
    </p>
  );
}

export function WelcomeTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const navigate = useNavigate();
  const tour = useTour();
  const { lang, t } = useLang();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
    const handler = () => {
      setStep("welcome");
      setOpen(true);
    };
    window.addEventListener(OPEN_TOUR_EVENT, handler);
    return () => window.removeEventListener(OPEN_TOUR_EVENT, handler);
  }, []);

  const close = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    setStep("welcome");
  }, []);

  const goTo = (path: string) => {
    close();
    navigate(path);
  };

  const onTypingDone = useCallback(() => setStep("ask"), []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-lg flex items-center justify-center overflow-y-auto"
        >
          {/* Grille de fond, rappel du thème */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 30px,#fff 30px,#fff 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,#fff 30px,#fff 31px)",
            }}
          />

          <button
            onClick={close}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Fermer la visite"
          >
            <X className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative"
              >
                <TypedLine
                  key={lang}
                  text={t(
                    "Bienvenue dans le monde que je conçois...",
                    "Welcome to the world I'm designing...",
                  )}
                  onDone={onTypingDone}
                />
              </motion.div>
            )}

            {step === "ask" && (
              <motion.div
                key="ask"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 70, damping: 16 }}
                className="relative text-center px-6"
              >
                <p
                  className="text-lg md:text-xl text-slate-400 mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  &gt; {t("Bienvenue dans le monde que je conçois.", "Welcome to the world I'm designing.")}
                </p>
                <h2
                  className="text-3xl md:text-5xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("Voulez-vous", "Would you like")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {t("poursuivre la visite", "to take the tour")}
                  </span>{" "}
                  ?
                </h2>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                  {t(
                    "Data, IA et produits utiles — je vous guide à travers mon univers.",
                    "Data, AI and useful products — let me guide you through my world.",
                  )}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      close();
                      tour.start();
                    }}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold shadow-lg shadow-emerald-900/40 hover:from-emerald-600 hover:to-cyan-700 transition-all"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t("Oui, guidez-moi ✨", "Yes, guide me ✨")}
                  </button>
                  <button
                    onClick={() => setStep("tree")}
                    className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t("Explorer librement", "Explore freely")}
                  </button>
                </div>
              </motion.div>
            )}

            {step === "tree" && (
              <motion.div
                key="tree"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full max-w-5xl px-4 py-10"
              >
                <h2
                  className="text-2xl md:text-4xl font-bold text-white text-center mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("Choisissez votre", "Choose your")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    destination
                  </span>
                </h2>
                <p
                  className="text-slate-500 text-center mb-8 text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  &gt; {t("cliquez sur une branche pour explorer", "click a branch to explore")}
                </p>

                {/* ------ Carte en arbre (desktop) ------ */}
                <div className="relative hidden md:block h-[460px]">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="branch" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(52,211,153,0.7)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0.7)" />
                      </linearGradient>
                    </defs>
                    {sections.map((s, i) => (
                      <motion.path
                        key={s.path}
                        d={s.curve}
                        fill="none"
                        stroke="url(#branch)"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                      />
                    ))}
                  </svg>

                  {/* Racine */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute left-1/2 top-1/2 flex flex-col items-center gap-2"
                    style={{ x: "-50%", y: "-50%" }}
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-xl shadow-emerald-900/50 flex items-center justify-center text-4xl ring-4 ring-white/10">
                      👨‍💻
                    </div>
                    <span
                      className="text-white text-sm font-semibold whitespace-nowrap"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Sir William NGOMA
                    </span>
                  </motion.div>

                  {/* Sections */}
                  {sections.map((s, i) => (
                    <motion.button
                      key={s.path}
                      onClick={() => goTo(s.path)}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 14,
                        delay: 0.5 + i * 0.12,
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="absolute w-44 bg-slate-800/80 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 rounded-2xl p-4 text-left shadow-lg hover:shadow-emerald-500/10 transition-colors group"
                      style={{ left: `${s.x}%`, top: `${s.y}%`, x: "-50%", y: "-50%" }}
                    >
                      <div className="text-2xl mb-1.5">{s.icon}</div>
                      <div
                        className="text-white text-sm font-semibold group-hover:text-emerald-300 transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {s.label[lang]}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{s.desc[lang]}</div>
                    </motion.button>
                  ))}
                </div>

                {/* ------ Version mobile : liste verticale ------ */}
                <div className="md:hidden relative pl-6">
                  <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/60 to-cyan-400/60" />
                  <div className="space-y-3">
                    {sections.map((s, i) => (
                      <motion.button
                        key={s.path}
                        onClick={() => goTo(s.path)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="relative w-full bg-slate-800/80 border border-white/10 hover:border-emerald-400/50 rounded-xl p-4 text-left flex items-center gap-3 transition-colors"
                      >
                        <span className="absolute -left-[1.15rem] w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-xl">{s.icon}</span>
                        <span>
                          <span
                            className="block text-white text-sm font-semibold"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {s.label[lang]}
                          </span>
                          <span className="block text-slate-500 text-xs">{s.desc[lang]}</span>
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
