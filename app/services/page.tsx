"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { BsRobot, BsGear, BsGraphUp, BsBuilding, BsLightbulb, BsCode, BsPeople, BsBriefcase } from "react-icons/bs";

const services = [
    {
        icon: BsRobot,
        title: "Conseil & Intégration IA",
        description: "Accompagnement stratégique pour intégrer l'intelligence artificielle dans votre organisation. Audit, roadmap et implémentation.",
        features: ["Audit IA", "Stratégie digitale", "Change management", "Formation équipes"]
    },
    {
        icon: BsPeople,
        title: "Assistants IA Personnalisés",
        description: "Développement d'assistants conversationnels sur mesure avec Masolo. Chatbots multilingues pour service client, vente et support.",
        features: ["Chatbots WhatsApp", "Voice assistants", "Multilingue (FR, LN, SW)", "Intégration CRM"]
    },
    {
        icon: BsGear,
        title: "Automatisation des Processus",
        description: "Automatisez vos workflows avec SOMA. RH, comptabilité, gestion de stock - transformez vos opérations avec l'IA.",
        features: ["RPA intelligent", "Workflows", "Intégrations API", "Reporting automatisé"]
    },
    {
        icon: BsGraphUp,
        title: "Data Science & Analytics",
        description: "Exploitez la puissance de vos données. Analyse prédictive, visualisation et insights actionnables pour votre business.",
        features: ["Tableaux de bord", "Prédiction", "Machine Learning", "Big Data"]
    },
    {
        icon: BsBuilding,
        title: "IA pour Gouvernement & ONG",
        description: "Solutions sur mesure pour le secteur public. E-Classroom pour l'éducation, AgriConnect pour l'agriculture.",
        features: ["E-gouvernance", "EdTech", "AgriTech", "Gestion de projets"]
    },
    {
        icon: BsLightbulb,
        title: "Formation & DBH Academy",
        description: "Développez les compétences IA de vos équipes. Formations certifiantes, bootcamps et programmes sur mesure.",
        features: ["Formations IA", "Bootcamps", "Certifications", "Corporate training"]
    },
    {
        icon: HiOutlineSparkles,
        title: "Incubation & Accompagnement",
        description: "Via FayilaDigitalHub, nous transformons les idées en startups viables. Coaching, ressources techniques et accès au financement.",
        features: ["Incubation", "Accélération", "Mentoring", "Funding access"]
    },
    {
        icon: BsCode,
        title: "Développement Logiciel",
        description: "Conception et développement d'applications web et mobiles modernes. Du MVP au produit mature.",
        features: ["Applications web", "Apps mobiles", "APIs", "Cloud native"]
    },
    {
        icon: BsBriefcase,
        title: "Innovation Stratégique",
        description: "Accompagnement dans votre transformation digitale. De l'idée au produit, nous vous guidons vers l'innovation.",
        features: ["Design thinking", "Prototypage", "Go-to-market", "Scale-up"]
    }
];

export default function Services() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F2540]/50 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F2540]/50 rounded-full border border-[#03C9A9]/20 mb-8"
                        >
                            <HiOutlineSparkles className="text-[#03C9A9]" />
                            <span className="text-sm text-gray-300">Solutions IA Complètes</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Services & <span className="text-gradient">Solutions IA</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Des solutions technologiques innovantes pour transformer votre entreprise
                            et accélérer votre croissance grâce à l&apos;intelligence artificielle.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="card group h-full"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03C9A9]/20 to-[#03C9A9]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <service.icon className="text-2xl text-[#03C9A9]" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-['Poppins'] text-xl font-bold text-white mb-3 group-hover:text-[#03C9A9] transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F2540]/50 text-gray-300 border border-[#03C9A9]/10"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Notre <span className="text-gradient">Processus</span>
                        </h2>
                        <p className="section-subtitle">
                            Une approche structurée pour garantir le succès de votre projet
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "Découverte", description: "Analyse de vos besoins et objectifs" },
                            { step: "02", title: "Conception", description: "Design de la solution sur mesure" },
                            { step: "03", title: "Développement", description: "Implémentation agile et itérative" },
                            { step: "04", title: "Déploiement", description: "Mise en production et support" }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] flex items-center justify-center mx-auto mb-4">
                                    <span className="font-['Poppins'] font-bold text-[#0B0C10] text-xl">{item.step}</span>
                                </div>
                                <h4 className="font-['Poppins'] font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card p-10 md:p-16 text-center bg-gradient-to-br from-[#0F2540]/60 to-[#0B0C10]/60">
                            <h2 className="font-['Poppins'] text-3xl md:text-4xl font-bold text-white mb-6">
                                Parlons de votre transformation IA
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Discutez avec nos experts pour découvrir comment l&apos;IA peut
                                révolutionner votre entreprise.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact" className="btn-primary">
                                    Demander une consultation
                                    <HiArrowRight className="ml-2" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const event = new CustomEvent("openDarkBot");
                                        window.dispatchEvent(event);
                                    }}
                                    className="btn-secondary"
                                >
                                    <BsRobot className="mr-2" />
                                    Parler à DarkBot
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
