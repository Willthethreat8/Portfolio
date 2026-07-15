import { motion } from "motion/react";
import {
  Camera,
  Book,
  Plane,
  Code,
  Gamepad2,
  Dumbbell,
} from "lucide-react";
import { useLang } from "../i18n";

export function Hobbies() {
  const { t } = useLang();

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
        t("Passion pour le sport collectif et l'esprit d'équipe", "Passion for team sports and team spirit"),
      ],
    },
    {
      title: t("Vélo", "Cycling"),
      icon: Plane,
      accent: "text-green-500",
      iconBg: "bg-green-500/15",
      border: "border-green-400/20 hover:border-green-400/50",
      bar: "from-green-500 to-emerald-500",
      glow: "hover:shadow-green-500/10",
      items: [
        t("Balades et exploration de nouveaux horizons", "Rides and exploring new horizons"),
      ],
    },
    {
      title: t("Jeux Vidéos", "Video Games"),
      icon: Gamepad2,
      accent: "text-purple-500",
      iconBg: "bg-purple-500/15",
      border: "border-purple-400/20 hover:border-purple-400/50",
      bar: "from-purple-500 to-violet-500",
      glow: "hover:shadow-purple-500/10",
      items: [
        t("Gaming et découverte de mondes virtuels", "Gaming and exploring virtual worlds"),
      ],
    },
    {
      title: t("Dessins", "Drawing"),
      icon: Camera,
      accent: "text-pink-500",
      iconBg: "bg-pink-500/15",
      border: "border-pink-400/20 hover:border-pink-400/50",
      bar: "from-pink-500 to-rose-500",
      glow: "hover:shadow-pink-500/10",
      items: [
        t("Expression artistique et créativité", "Artistic expression and creativity"),
      ],
    },
    {
      title: t("Marche", "Hiking"),
      icon: Plane,
      accent: "text-cyan-500",
      iconBg: "bg-cyan-500/15",
      border: "border-cyan-400/20 hover:border-cyan-400/50",
      bar: "from-cyan-500 to-sky-500",
      glow: "hover:shadow-cyan-500/10",
      items: [
        t("Randonnées et connexion avec la nature", "Hikes and connecting with nature"),
      ],
    },
    {
      title: t("Musique & Danse", "Music & Dance"),
      icon: Book,
      accent: "text-purple-500",
      iconBg: "bg-purple-500/15",
      border: "border-purple-400/20 hover:border-purple-400/50",
      bar: "from-purple-500 to-violet-500",
      glow: "hover:shadow-purple-500/10",
      items: [
        t("Rythmes et mouvements, passion pour la culture", "Rhythm and movement, a passion for culture"),
      ],
    },
    {
      title: t("Cuisine du Monde", "World Cuisine"),
      icon: Dumbbell,
      accent: "text-orange-500",
      iconBg: "bg-orange-500/15",
      border: "border-orange-400/20 hover:border-orange-400/50",
      bar: "from-orange-500 to-amber-500",
      glow: "hover:shadow-orange-500/10",
      items: [
        t("Exploration culinaire et saveurs internationales", "Culinary exploration and international flavors"),
      ],
    },
    {
      title: t("Photographie", "Photography"),
      icon: Camera,
      accent: "text-sky-400",
      iconBg: "bg-sky-500/15",
      border: "border-sky-400/20 hover:border-sky-400/50",
      bar: "from-sky-400 to-blue-500",
      glow: "hover:shadow-sky-500/10",
      items: [
        t("Capturer les moments et la beauté du quotidien", "Capturing moments and everyday beauty"),
      ],
    },
  ];

  const interests = [
    {
      emoji: "🤖",
      accent: "border-blue-400/20 hover:border-blue-400/40",
      title: t("Intelligence Artificielle", "Artificial Intelligence"),
      description: t(
        "Passionné par les avancées en IA générative, vision par ordinateur et NLP",
        "Passionate about advances in generative AI, computer vision and NLP",
      ),
    },
    {
      emoji: "🌱",
      accent: "border-green-400/20 hover:border-green-400/40",
      title: t("Écologie & Tech", "Ecology & Tech"),
      description: t(
        "Intéressé par les technologies vertes et l'informatique durable (Green IT)",
        "Interested in green technologies and sustainable computing (Green IT)",
      ),
    },
    {
      emoji: "🏦",
      accent: "border-yellow-400/20 hover:border-yellow-400/40",
      title: t("Banque & Finance", "Banking & Finance"),
      description: t(
        "Curiosité pour la fintech, les marchés financiers et l'application de la data dans le secteur bancaire",
        "Curious about fintech, financial markets and applying data in the banking sector",
      ),
    },
    {
      emoji: "✈️",
      accent: "border-orange-400/20 hover:border-orange-400/40",
      title: t("Aéronautique", "Aeronautics"),
      description: t(
        "Passionné par l'aviation, la maintenance prédictive et les systèmes embarqués aéronautiques",
        "Passionate about aviation, predictive maintenance and aeronautical embedded systems",
      ),
    },
    {
      emoji: "🌍",
      accent: "border-cyan-400/20 hover:border-cyan-400/40",
      title: t("Impact Social", "Social Impact"),
      description: t(
        "Utilisation de la tech pour résoudre des problèmes sociaux et environnementaux",
        "Using tech to solve social and environmental problems",
      ),
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          {t("Hobbies & Passions", "Hobbies & Passions")}
        </h1>
        <p className="text-base text-slate-400 max-w-3xl mx-auto">
          {t(
            "Au-delà de la technique, découvrez mes centres d'intérêt et ce qui me passionne au quotidien",
            "Beyond the technical side, discover my interests and what drives me every day",
          )}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.05 }}
              className={`relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 border ${hobby.border} hover:shadow-lg ${hobby.glow} transition-all duration-300 group overflow-hidden`}
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
            </motion.div>
          );
        })}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          {t("Centres d'intérêt", "Interests")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.05 }}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 border ${interest.accent} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-3xl mb-2">{interest.emoji}</div>
              <h3 className="font-bold text-white mb-1.5 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                {interest.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
