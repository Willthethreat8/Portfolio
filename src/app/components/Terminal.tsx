import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useTour } from "./TourGuide";
import { useLang } from "../i18n";

type Line = { type: "cmd" | "out"; text: string };

const BANNER = [
  "╭──────────────────────────────────────╮",
  "│  sir@portfolio · terminal v1.0       │",
  "╰──────────────────────────────────────╯",
];

export function Terminal() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(() =>
    [
      ...BANNER,
      t("Tape 'help' pour voir les commandes.", "Type 'help' to see available commands."),
    ].map((text) => ({ type: "out" as const, text })),
  );
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const tour = useTour();

  // Ouverture via ` ou ² (hors champs de saisie)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (e.key === "`" || e.key === "²") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines, open]);

  const print = (out: string[]) =>
    setLines((prev) => [...prev, ...out.map((text) => ({ type: "out" as const, text }))]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    setLines((prev) => [...prev, { type: "cmd", text: raw }]);

    switch (cmd) {
      case "":
        break;
      case "help":
        print([
          t("Commandes disponibles :", "Available commands:"),
          t("  whoami      qui je suis", "  whoami      who I am"),
          t("  projects    aller aux projets", "  projects    go to projects"),
          t("  skills      aller aux compétences", "  skills      go to skills"),
          t("  cv          télécharger mon CV", "  cv          download my resume"),
          t("  contact     me contacter", "  contact     get in touch"),
          t("  tour        lancer la visite guidée", "  tour        start the guided tour"),
          t("  clear       effacer l'écran", "  clear       clear the screen"),
          t("  exit        fermer le terminal", "  exit        close the terminal"),
        ]);
        break;
      case "whoami":
        print([
          "Sir William NGOMA — Data & AI Engineer",
          t(
            "ESIR Rennes · alternant Data & IA · dispo CDI oct. 2026",
            "ESIR Rennes · Data & AI apprentice · open to full-time roles Oct. 2026",
          ),
        ]);
        break;
      case "projects":
      case "projets":
        print([t("→ redirection vers /projets", "→ redirecting to /projets")]);
        setOpen(false);
        navigate("/projets");
        break;
      case "skills":
      case "competences":
        print([t("→ redirection vers /competences", "→ redirecting to /competences")]);
        setOpen(false);
        navigate("/competences");
        break;
      case "cv":
        print([t("→ téléchargement du CV...", "→ downloading resume...")]);
        window.open("/cv.pdf", "_blank");
        break;
      case "contact":
        print([t("→ redirection vers /contact", "→ redirecting to /contact")]);
        setOpen(false);
        navigate("/contact");
        break;
      case "tour":
        setOpen(false);
        tour.start();
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
        setOpen(false);
        break;
      case "sudo":
      case "sudo rm -rf /":
        print([t("Bien tenté. 😏", "Nice try. 😏")]);
        break;
      default:
        print([
          t(
            `${cmd} : commande introuvable. Tape 'help'.`,
            `${cmd}: command not found. Type 'help'.`,
          ),
        ]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-slate-950 border border-emerald-400/30 rounded-2xl shadow-2xl shadow-emerald-900/30 overflow-hidden"
          >
            {/* Barre de titre */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span
                className="text-slate-500 text-xs"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                sir@portfolio:~
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={t("Fermer le terminal", "Close terminal")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sortie */}
            <div
              ref={scrollRef}
              className="h-72 overflow-y-auto px-4 py-3 text-sm space-y-0.5"
              style={{ fontFamily: "var(--font-mono)" }}
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) =>
                line.type === "cmd" ? (
                  <p key={i} className="text-white">
                    <span className="text-emerald-400">❯</span> {line.text}
                  </p>
                ) : (
                  <p key={i} className="text-slate-400 whitespace-pre-wrap">
                    {line.text}
                  </p>
                ),
              )}
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <span className="text-emerald-400">❯</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-white outline-none caret-emerald-400"
                  spellCheck={false}
                  autoComplete="off"
                  aria-label={t("Ligne de commande", "Command line")}
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
