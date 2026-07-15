import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X, Github, Linkedin, Mail, Sparkles, Languages } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundPattern } from "./BackgroundPattern";
import { WelcomeTour, OPEN_TOUR_EVENT } from "./WelcomeTour";
import { TourProvider, useTour, tourSteps } from "./TourGuide";
import { Terminal } from "./Terminal";
import { LanguageProvider, useLang } from "../i18n";

export function Layout() {
  return (
    <LanguageProvider>
      <TourProvider>
        <LayoutInner />
      </TourProvider>
    </LanguageProvider>
  );
}

function LayoutInner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { active: tourActive, stepIndex, exit: exitTour } = useTour();
  const { lang, toggle, t } = useLang();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("Accueil", "Home") },
    { path: "/competences", label: t("Compétences", "Skills") },
    { path: "/projets", label: t("Projets", "Projects") },
    { path: "/experience", label: t("Expérience", "Experience") },
    { path: "/hobbies", label: t("Hobbies", "Hobbies") },
    { path: "/contact", label: t("Contact", "Contact") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundPattern />
      <WelcomeTour />
      <Terminal />

      {tourActive ? (
        <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-emerald-400/25 h-14 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span
              className="text-white text-sm font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("Visite guidée", "Guided tour")}
            </span>
            <span
              className="text-emerald-400 text-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {stepIndex + 1}/{tourSteps.length} · {tourSteps[stepIndex].label[lang]}
            </span>
          </div>
          <button
            onClick={exitTour}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 border border-white/15 hover:bg-white/10 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <X className="w-3.5 h-3.5" />
            {t("Quitter la visite", "Exit tour")}
          </button>
        </div>
      ) : (
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-green-900/40 transition-shadow">
                <span className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>DE</span>
              </div>
              <span className="font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Portfolio
              </span>
            </NavLink>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="relative px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-emerald-500/20 border border-emerald-400/30"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors ${
                          isActive
                            ? "text-emerald-300 font-semibold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
              <button
                onClick={() => window.dispatchEvent(new Event(OPEN_TOUR_EVENT))}
                className="ml-2 px-3 py-2 rounded-lg text-sm flex items-center gap-1.5 text-emerald-300 border border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
                title={t("Revoir la visite guidée", "Replay the guided tour")}
              >
                <Sparkles className="w-4 h-4" />
                {t("Visite", "Tour")}
              </button>
              <button
                onClick={toggle}
                className="ml-1 px-3 py-2 rounded-lg text-sm flex items-center gap-1.5 text-slate-300 border border-white/15 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
                title={t("Switch to English", "Passer en français")}
              >
                <Languages className="w-4 h-4" />
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-300" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1 border-t border-white/10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg transition-colors text-sm ${
                      isActive
                        ? "bg-green-500/20 text-green-300 font-semibold"
                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                    }`
                  }
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new Event(OPEN_TOUR_EVENT));
                }}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Sparkles className="w-4 h-4" />
                {t("Visite guidée", "Guided tour")}
              </button>
              <button
                onClick={toggle}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 text-slate-300 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Languages className="w-4 h-4" />
                {lang === "fr" ? "English" : "Français"}
              </button>
            </div>
          )}
        </div>
      </nav>
      )}

      <main className={`flex-1 ${tourActive ? "pb-40" : ""}`}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-slate-900/95 backdrop-blur-sm text-slate-400 py-10 mt-16 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-heading)" }}>DE</span>
              </div>
              <span className="text-slate-300 font-medium text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                Sir William NGOMA
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Willthethreat8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sir-william-ngoma-3ab907173/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nsirwilliam@gmail.com"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs">
                © {new Date().getFullYear()} Sir William NGOMA · {t("Tous droits réservés", "All rights reserved")}
              </p>
              <p
                className="text-[11px] text-slate-600 mt-1"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t("psst... appuie sur", "psst... press")} <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-slate-500">²</kbd> {t("ou", "or")} <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-slate-500">`</kbd>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}