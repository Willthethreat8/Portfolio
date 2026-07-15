import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, X, Check, Download, Mail } from "lucide-react";
import { useLang } from "../i18n";

export type TourStep = {
  path: string;
  icon: string;
  label: { fr: string; en: string };
  desc: { fr: string; en: string };
};

export const tourSteps: TourStep[] = [
  {
    path: "/",
    icon: "🏠",
    label: { fr: "Accueil", en: "Home" },
    desc: {
      fr: "Commençons par qui je suis : mon profil, mes valeurs et ce qui m'anime.",
      en: "Let's start with who I am: my profile, my values and what drives me.",
    },
  },
  {
    path: "/competences",
    icon: "🧠",
    label: { fr: "Compétences", en: "Skills" },
    desc: {
      fr: "Mon arsenal technique : data engineering, IA, développement et méthodologies.",
      en: "My technical arsenal: data engineering, AI, development and methodologies.",
    },
  },
  {
    path: "/projets",
    icon: "🚀",
    label: { fr: "Projets", en: "Projects" },
    desc: {
      fr: "Ce que je construis — dont AeroTwin, mon projet vedette de maintenance prédictive.",
      en: "What I build — including AeroTwin, my flagship predictive maintenance project.",
    },
  },
  {
    path: "/experience",
    icon: "💼",
    label: { fr: "Expérience", en: "Experience" },
    desc: {
      fr: "Mon parcours professionnel et académique, de la prépa à l'alternance Data & IA.",
      en: "My professional and academic journey, from prep school to my Data & AI apprenticeship.",
    },
  },
  {
    path: "/hobbies",
    icon: "🎧",
    label: { fr: "Hobbies", en: "Hobbies" },
    desc: {
      fr: "Ce qui me nourrit en dehors du code : basket, photo, cuisine et musique.",
      en: "What fuels me outside of code: basketball, photography, cooking and music.",
    },
  },
  {
    path: "/contact",
    icon: "✉️",
    label: { fr: "Contact", en: "Contact" },
    desc: {
      fr: "La visite se termine ici. Une opportunité, un projet, une question ? Discutons !",
      en: "The tour ends here. An opportunity, a project, a question? Let's talk!",
    },
  },
];

type TourContextValue = {
  active: boolean;
  stepIndex: number;
  start: () => void;
  exit: () => void;
  next: () => void;
  prev: () => void;
};

const TourContext = createContext<TourContextValue | null>(null);

export function useTour() {
  const ctx = useContext(TourContext);
  if (!ctx) throw new Error("useTour doit être utilisé dans un TourProvider");
  return ctx;
}

export function TourProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [ended, setEnded] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  const goTo = useCallback(
    (i: number) => {
      setStepIndex(i);
      navigate(tourSteps[i].path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate],
  );

  const start = useCallback(() => {
    setEnded(false);
    setActive(true);
    goTo(0);
  }, [goTo]);

  const exit = useCallback(() => setActive(false), []);

  const next = useCallback(() => {
    if (stepIndex < tourSteps.length - 1) {
      goTo(stepIndex + 1);
    } else {
      setActive(false);
      setEnded(true);
    }
  }, [stepIndex, goTo]);

  const prev = useCallback(() => {
    if (stepIndex > 0) goTo(stepIndex - 1);
  }, [stepIndex, goTo]);

  // Navigation clavier pendant la visite
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") exit();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, next, prev, exit]);

  return (
    <TourContext.Provider value={{ active, stepIndex, start, exit, next, prev }}>
      {children}
      <TourHUD />
      <TourEndScreen open={ended} onClose={() => setEnded(false)} />
    </TourContext.Provider>
  );
}

function TourEndScreen({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-slate-900 border border-emerald-400/25 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-emerald-900/30"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
              className="text-6xl mb-5"
            >
              🎉
            </motion.div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("Merci d'avoir suivi", "Thanks for taking")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {t("la visite", "the tour")}
              </span>{" "}
              !
            </h2>
            <p className="text-slate-400 mb-8">
              {t(
                "Vous connaissez maintenant mon univers. Une opportunité, un projet en tête ? La suite se passe ici :",
                "You now know my world. An opportunity or a project in mind? Here's what comes next:",
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold shadow-lg shadow-emerald-900/40 hover:from-emerald-600 hover:to-cyan-700 transition-all"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Download className="w-4 h-4" />
                {t("Télécharger mon CV", "Download my resume")}
              </a>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Mail className="w-4 h-4" />
                {t("Me contacter", "Contact me")}
              </button>
            </div>
            <p
              className="text-slate-600 text-xs mt-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              &gt; {t("visite terminée · 6/6 sections explorées", "tour completed · 6/6 sections explored")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TourHUD() {
  const { active, stepIndex, exit, next, prev } = useTour();
  const { lang, t } = useLang();
  const step = tourSteps[stepIndex];
  const isLast = stepIndex === tourSteps.length - 1;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="fixed bottom-4 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-2xl"
          style={{ x: "-50%" }}
        >
          <div className="relative bg-slate-900/95 backdrop-blur-md border border-emerald-400/25 rounded-2xl shadow-2xl shadow-black/50 px-5 py-4">
            {/* Barre de progression */}
            <div className="absolute top-0 left-4 right-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                animate={{ width: `${((stepIndex + 1) / tourSteps.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-xl bg-emerald-500/15 border border-emerald-400/25 items-center justify-center text-xl">
                {step.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-xs text-emerald-400 mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t("étape", "step")} {stepIndex + 1}/{tourSteps.length}
                </p>
                <p
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.label[lang]}
                </p>
                <p className="text-slate-400 text-xs leading-snug mt-0.5 line-clamp-2">
                  {step.desc[lang]}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={prev}
                  disabled={stepIndex === 0}
                  className="p-2.5 rounded-xl border border-white/15 text-slate-300 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Étape précédente"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-sm font-semibold hover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-900/40 transition-all"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {isLast ? (
                    <>
                      {t("Terminer", "Finish")} <Check className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      {t("Suivant", "Next")} <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <button
                  onClick={exit}
                  className="p-2.5 rounded-xl text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Quitter la visite"
                  title="Quitter la visite"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Points d'étapes */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {tourSteps.map((s, i) => (
                <span
                  key={s.path}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === stepIndex
                      ? "w-5 bg-emerald-400"
                      : i < stepIndex
                        ? "w-1.5 bg-emerald-400/50"
                        : "w-1.5 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
