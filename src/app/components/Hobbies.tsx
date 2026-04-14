import { motion } from "motion/react";
import {
  Camera,
  Book,
  Plane,
  Code,
  Gamepad2,
  Dumbbell,
} from "lucide-react";

export function Hobbies() {
  const hobbies = [
    {
      title: "Basketball",
      icon: Dumbbell,
      accent: "text-orange-500",
      iconBg: "bg-orange-500/15",
      border: "border-orange-400/20 hover:border-orange-400/50",
      bar: "from-orange-500 to-amber-500",
      glow: "hover:shadow-orange-500/10",
      items: [
        "Passion pour le sport collectif et l'esprit d'équipe",
      ],
    },
    {
      title: "Vélo",
      icon: Plane,
      accent: "text-green-500",
      iconBg: "bg-green-500/15",
      border: "border-green-400/20 hover:border-green-400/50",
      bar: "from-green-500 to-emerald-500",
      glow: "hover:shadow-green-500/10",
      items: [
        "Balades et exploration de nouveaux horizons",
      ],
    },
    {
      title: "Jeux Vidéos",
      icon: Gamepad2,
      accent: "text-purple-500",
      iconBg: "bg-purple-500/15",
      border: "border-purple-400/20 hover:border-purple-400/50",
      bar: "from-purple-500 to-violet-500",
      glow: "hover:shadow-purple-500/10",
      items: [
        "Gaming et découverte de mondes virtuels",
      ],
    },
    {
      title: "Dessins",
      icon: Camera,
      accent: "text-pink-500",
      iconBg: "bg-pink-500/15",
      border: "border-pink-400/20 hover:border-pink-400/50",
      bar: "from-pink-500 to-rose-500",
      glow: "hover:shadow-pink-500/10",
      items: [
        "Expression artistique et créativité",
      ],
    },
    {
      title: "Marche",
      icon: Plane,
      accent: "text-cyan-500",
      iconBg: "bg-cyan-500/15",
      border: "border-cyan-400/20 hover:border-cyan-400/50",
      bar: "from-cyan-500 to-sky-500",
      glow: "hover:shadow-cyan-500/10",
      items: [
        "Randonnées et connexion avec la nature",
      ],
    },
    {
      title: "Musique & Danse",
      icon: Book,
      accent: "text-purple-500",
      iconBg: "bg-purple-500/15",
      border: "border-purple-400/20 hover:border-purple-400/50",
      bar: "from-purple-500 to-violet-500",
      glow: "hover:shadow-purple-500/10",
      items: [
        "Rythmes et mouvements, passion pour la culture",
      ],
    },
    {
      title: "Cuisine du Monde",
      icon: Dumbbell,
      accent: "text-orange-500",
      iconBg: "bg-orange-500/15",
      border: "border-orange-400/20 hover:border-orange-400/50",
      bar: "from-orange-500 to-amber-500",
      glow: "hover:shadow-orange-500/10",
      items: [
        "Exploration culinaire et saveurs internationales",
      ],
    },
    {
      title: "Photographie",
      icon: Camera,
      accent: "text-sky-400",
      iconBg: "bg-sky-500/15",
      border: "border-sky-400/20 hover:border-sky-400/50",
      bar: "from-sky-400 to-blue-500",
      glow: "hover:shadow-sky-500/10",
      items: [
        "Capturer les moments et la beauté du quotidien",
      ],
    },
  ];

  const interests = [
    {
      emoji: "🤖",
      accent: "border-blue-400/20 hover:border-blue-400/40",
      title: "Intelligence Artificielle",
      description:
        "Passionné par les avancées en IA générative, vision par ordinateur et NLP",
    },
    {
      emoji: "🌱",
      accent: "border-green-400/20 hover:border-green-400/40",
      title: "Écologie & Tech",
      description:
        "Intéressé par les technologies vertes et l'informatique durable (Green IT)",
    },
    {
      emoji: "🏦",
      accent: "border-yellow-400/20 hover:border-yellow-400/40",
      title: "Banque & Finance",
      description:
        "Curiosité pour la fintech, les marchés financiers et l'application de la data dans le secteur bancaire",
    },
    {
      emoji: "✈️",
      accent: "border-orange-400/20 hover:border-orange-400/40",
      title: "Aéronautique",
      description:
        "Passionné par l'aviation, la maintenance prédictive et les systèmes embarqués aéronautiques",
    },
    {
      emoji: "🌍",
      accent: "border-cyan-400/20 hover:border-cyan-400/40",
      title: "Impact Social",
      description:
        "Utilisation de la tech pour résoudre des problèmes sociaux et environnementaux",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Hobbies & Passions
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Au-delà de la technique, découvrez mes centres d'intérêt et ce qui me
          passionne au quotidien
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <div
              key={hobby.title}
              className={`relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border ${hobby.border} hover:shadow-lg ${hobby.glow} transition-all duration-300 group overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${hobby.bar} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${hobby.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${hobby.accent}`} />
                </div>
                <h3 className={`font-bold ${hobby.accent}`} style={{ fontFamily: "var(--font-heading)" }}>
                  {hobby.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {hobby.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${hobby.iconBg} ${hobby.accent} flex-shrink-0`}
                      style={{ background: "currentColor", opacity: 0.7 }}
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          Centres d'intérêt
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border ${interest.accent} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-3">{interest.emoji}</div>
              <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {interest.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
