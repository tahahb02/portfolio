import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

export default function Certifications() {
  const { t, content } = useLanguage();
  const certifications = content.certifications;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
          <FaAward className="text-amber-400" />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.certifications.title}
          </span>
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group backdrop-blur-sm rounded-xl p-4 transition-all duration-300 cursor-default relative overflow-hidden"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(245,158,11,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-all duration-500" />
              <div className="flex items-start gap-3 relative">
                <div className="relative shrink-0">
                  <motion.div
                    className="p-2 rounded-lg bg-amber-500/10 text-amber-500/60 group-hover:text-amber-400 group-hover:bg-amber-500/20 transition-all duration-300"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <FaCertificate />
                  </motion.div>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-amber-500/60 group-hover:text-amber-400 transition-colors">
                    CERT-{String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed group-hover:text-slate-200 transition-colors mt-0.5" style={{ color: "var(--text-secondary)" }}>{cert}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
