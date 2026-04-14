import { Outlet, NavLink } from "react-router";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { BackgroundPattern } from "./BackgroundPattern";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load Google Fonts at runtime to avoid build-time CSS processing issues
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(fontLink);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/competences", label: "Compétences" },
    { path: "/projets", label: "Projets" },
    { path: "/experience", label: "Expérience" },
    { path: "/hobbies", label: "Hobbies" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      <BackgroundPattern />

      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-green-900/40 transition-shadow">
                <span className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>DE</span>
              </div>
              <span className="font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Portfolio
              </span>
            </NavLink>

            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all text-sm ${
                      isActive
                        ? "bg-green-500/20 text-green-300 font-semibold border border-green-400/30"
                        : "text-slate-400 hover:bg-white/10 hover:text-white"
                    }`
                  }
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            </div>
          )}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-900/95 backdrop-blur-sm text-slate-400 py-10 mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <p className="text-xs text-center md:text-right">
              © {new Date().getFullYear()} Sir William NGOMA · Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}