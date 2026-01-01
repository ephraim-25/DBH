"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiArrowRight
} from "react-icons/hi";
import { BsRobot, BsLightning, BsGear, BsCpu } from "react-icons/bs";
import { GiFarmTractor, GiSolarPower } from "react-icons/gi";

const sectors = [
  {
    icon: GiFarmTractor,
    title: "AgriTech",
    description: "Agriculture intelligente avec AgriConnectDRC et Dark Food",
    color: "#03C9A9"
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Éducation",
    description: "Formation et EdTech via DBH Academy et E-Classroom",
    color: "#04E7C4"
  },
  {
    icon: BsCpu,
    title: "Intelligence Artificielle",
    description: "Solutions IA avec Masolo, Makita et DBH AI Lab",
    color: "#03C9A9"
  },
  {
    icon: HiOutlineAcademicCap,
    title: "FayilaDigitalHub",
    description: "Hub d'innovation, incubation et accélération de startups tech",
    color: "#03C9A9"
  },
  {
    icon: GiSolarPower,
    title: "Énergie",
    description: "Énergie verte avec Dark Sale Batteries",
    color: "#04E7C4"
  }
];

const metrics = [
  { value: "200+", label: "Jeunes formés", icon: HiOutlineUsers },
  { value: "50+", label: "Entreprises digitalisées", icon: HiOutlineOfficeBuilding },
  { value: "10+", label: "Solutions IA", icon: BsRobot },
  { value: "5+", label: "Secteurs d'activités", icon: HiOutlineChartBar }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Neural Network Animation */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#03C9A9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#03C9A9" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Neural Nodes */}
              {[
                { cx: 20, cy: 30 }, { cx: 80, cy: 25 }, { cx: 50, cy: 50 },
                { cx: 15, cy: 70 }, { cx: 85, cy: 75 }, { cx: 35, cy: 20 },
                { cx: 65, cy: 80 }, { cx: 10, cy: 50 }, { cx: 90, cy: 50 }
              ].map((node, i) => (
                <circle
                  key={i}
                  cx={node.cx}
                  cy={node.cy}
                  r="0.5"
                  fill="url(#nodeGradient)"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
              {/* Connection Lines */}
              <g stroke="#03C9A9" strokeWidth="0.1" opacity="0.3">
                <line x1="20" y1="30" x2="50" y2="50" />
                <line x1="80" y1="25" x2="50" y2="50" />
                <line x1="15" y1="70" x2="50" y2="50" />
                <line x1="85" y1="75" x2="50" y2="50" />
                <line x1="35" y1="20" x2="20" y2="30" />
                <line x1="35" y1="20" x2="80" y2="25" />
                <line x1="65" y1="80" x2="85" y2="75" />
                <line x1="65" y1="80" x2="15" y2="70" />
              </g>
            </svg>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-transparent to-[#0B0C10]" />

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#03C9A9]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0F2540]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F2540]/50 rounded-full border border-[#03C9A9]/20 mb-8"
            >
              <HiOutlineSparkles className="text-[#03C9A9]" />
              <span className="text-sm text-gray-300">Pionnier de l&apos;IA en RDC</span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Réinventons le quotidien congolais grâce à{" "}
              <span className="text-gradient">l&apos;intelligence artificielle</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Dark Business Hi-Tech transforme l&apos;Afrique à travers des solutions innovantes
              en IA, AgriTech, Énergie, Éducation et Incubation de startups.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="btn-primary group"
              >
                Découvrir nos solutions
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/equipe"
                className="btn-secondary"
              >
                Rejoindre DBH
              </Link>
              <button
                onClick={() => {
                  const event = new CustomEvent("openDarkBot");
                  window.dispatchEvent(event);
                }}
                className="flex items-center gap-2 px-6 py-3.5 text-[#03C9A9] hover:text-white transition-colors"
              >
                <BsRobot className="text-xl" />
                Parler à DarkBot
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#03C9A9]/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#03C9A9] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-gradient-to-b from-[#0B0C10] to-[#0F2540]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">
              Nos <span className="text-gradient">Secteurs</span> d&apos;Excellence
            </h2>
            <p className="section-subtitle">
              Découvrez comment DBH révolutionne les industries clés du Congo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${sector.color}20, ${sector.color}10)` }}
                >
                  <sector.icon className="text-2xl" style={{ color: sector.color }} />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/secteurs" className="btn-secondary inline-flex">
              Voir tous les secteurs
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03C9A9]/5 via-transparent to-[#03C9A9]/5" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">
              Notre <span className="text-gradient">Impact</span>
            </h2>
            <p className="section-subtitle">
              Des résultats concrets pour le développement du Congo
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-[#0F2540]/30 border border-[#03C9A9]/10 hover:border-[#03C9A9]/30 transition-all"
              >
                <metric.icon className="text-3xl text-[#03C9A9] mx-auto mb-4" />
                <div className="font-['Poppins'] text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA Section */}
      <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] mb-8">
              <HiOutlineLightBulb className="text-3xl text-[#0B0C10]" />
            </div>

            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-white mb-6">
              Découvrez comment DBH transforme le Congo
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              De l&apos;agriculture intelligente à l&apos;éducation numérique, nous construisons
              l&apos;avenir technologique de l&apos;Afrique.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/a-propos" className="btn-primary">
                Notre Vision
                <HiArrowRight className="ml-2" />
              </Link>
              <Link href="/partenariats" className="btn-secondary">
                Devenir Partenaire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[#0F2540]/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-['Poppins'] text-xl md:text-2xl italic text-gray-300 leading-relaxed">
              &ldquo;L&apos;intelligence artificielle n&apos;est pas une menace, mais une opportunité
              de souveraineté pour l&apos;Afrique.&rdquo;
            </p>
            <footer className="mt-6 text-[#03C9A9] font-medium">
              — Ephraim YABA MBUKU, Fondateur & CEO
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
