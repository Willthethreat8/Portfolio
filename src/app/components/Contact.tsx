import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Veuillez réessayer ou m'écrire directement par email.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "w-full px-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-green-400/60 focus:outline-none focus:ring-1 focus:ring-green-400/30 transition-all";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Contactez-moi
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          N'hésitez pas à me contacter pour discuter d'opportunités
          professionnelles, de projets ou simplement pour échanger
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
          className="lg:col-span-1 space-y-5"
        >
          <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-2xl p-7 border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />

            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Informations de contact
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
                  <a
                    href="mailto:nsirwilliam@gmail.com"
                    className="text-slate-300 hover:text-green-400 transition-colors text-sm"
                  >
                    nsirwilliam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Téléphone</div>
                  <a
                    href="tel:+33766197025"
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    +33 7 66 19 70 25
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-purple-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Localisation</div>
                  <div className="text-slate-300 text-sm">Rennes, France</div>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-500 mb-3">Retrouvez-moi sur</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sir-william-ngoma-3ab907173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-blue-400/40 hover:bg-blue-500/10 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </a>
                <a
                  href="https://github.com/Willthethreat8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-slate-400/40 hover:bg-white/10 transition-all"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                </a>
                <a
                  href="mailto:nsirwilliam@gmail.com"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:border-green-400/40 hover:bg-green-500/10 transition-all"
                >
                  <Mail className="w-5 h-5 text-slate-300" />
                </a>
              </div>
            </div>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-white/10 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500" />

            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Envoyez-moi un message
            </h2>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-400/30 rounded-xl p-10 text-center"
              >
                <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-300 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Message envoyé !
                </h3>
                <p className="text-slate-400 text-sm">
                  Merci pour votre message. Je vous répondrai dans les plus
                  brefs délais.
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500/10 border border-red-400/30 rounded-xl p-10 text-center"
              >
                <AlertCircle className="w-14 h-14 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-300 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Erreur d'envoi
                </h3>
                <p className="text-slate-400 text-sm">
                  {errorMsg}
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="jean.dupont@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Opportunité professionnelle"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-900/30 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>


        </motion.div>
      </div>
    </div>
  );
}
