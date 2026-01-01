"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { GiFarmTractor, GiSolarPower, GiTeacher, GiArtificialIntelligence } from "react-icons/gi";
import { BsRobot, BsCpu, BsGear, BsCarFront, BsChatDots, BsPeople, BsLightbulb } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";

const sectors = [
    {
        id: "dark-food",
        icon: GiFarmTractor,
        title: "Dark Food",
        subtitle: "AgroTech",
        description: "Solutions innovantes pour la chaîne alimentaire congolaise. De la production à la distribution, nous optimisons chaque étape grâce à l'intelligence artificielle.",
        features: ["Traçabilité alimentaire", "Optimisation logistique", "Prédiction des récoltes"],
        color: "#03C9A9"
    },
    {
        id: "dbh-academy",
        icon: HiOutlineAcademicCap,
        title: "DBH Academy",
        subtitle: "Éducation & IA",
        description: "Formation de la nouvelle génération de talents en intelligence artificielle et technologies numériques. Plus de 200 jeunes formés à ce jour.",
        features: ["Formations certifiantes", "Bootcamps intensifs", "Mentorat personnalisé"],
        color: "#04E7C4"
    },
    {
        id: "agriconnect",
        icon: GiFarmTractor,
        title: "AgriConnectDRC",
        subtitle: "Smart Agriculture",
        description: "Plateforme connectant les agriculteurs aux marchés, fournisseurs et experts. L'agriculture intelligente pour un Congo nourri.",
        features: ["Marketplace agricole", "Conseils IA", "Météo prédictive"],
        color: "#03C9A9"
    },
    {
        id: "dark-sale",
        icon: GiSolarPower,
        title: "Dark Sale Batteries",
        subtitle: "Énergie Verte",
        description: "Solutions d'énergie renouvelable et batteries de stockage pour un Congo électrifié et durable.",
        features: ["Batteries solaires", "Stockage intelligent", "Micro-réseaux"],
        color: "#04E7C4"
    },
    {
        id: "soma",
        icon: BsGear,
        title: "SOMA",
        subtitle: "Automation",
        description: "Automatisation des processus d'entreprise grâce à l'IA. RH, comptabilité, gestion de stock - tout devient intelligent.",
        features: ["RPA intelligent", "Workflows automatisés", "Analytics temps réel"],
        color: "#03C9A9"
    },
    {
        id: "e-classroom",
        icon: GiTeacher,
        title: "E-Classroom",
        subtitle: "EdTech",
        description: "Plateforme d'apprentissage en ligne avec IA intégrée. L'éducation de qualité accessible à tous les Congolais.",
        features: ["Cours adaptatifs", "Tuteur IA", "Certifications"],
        color: "#04E7C4"
    },
    {
        id: "locavehicles",
        icon: BsCarFront,
        title: "LocavehiclesDRC",
        subtitle: "Smart Mobility",
        description: "Solutions de mobilité intelligente pour les villes congolaises. Location, partage et gestion de flotte optimisés.",
        features: ["Location de véhicules", "Tracking GPS", "Maintenance prédictive"],
        color: "#03C9A9"
    },
    {
        id: "masolo",
        icon: BsChatDots,
        title: "Masolo",
        subtitle: "Conversational AI",
        description: "Assistants conversationnels IA multilingues. Service client, support et vente automatisés en français, lingala, swahili.",
        features: ["Chatbots multilingues", "Voice assistants", "Intégration WhatsApp"],
        color: "#04E7C4"
    },
    {
        id: "makita",
        icon: BsPeople,
        title: "Makita",
        subtitle: "Smart Meetings",
        description: "Réunions intelligentes augmentées par l'IA. Transcription, résumés automatiques et suivi des actions.",
        features: ["Transcription temps réel", "Résumés IA", "Action items auto"],
        color: "#03C9A9"
    },
    {
        id: "dbh-ai-lab",
        icon: BsLightbulb,
        title: "DBH AI Lab",
        subtitle: "Research & Development",
        description: "Centre de recherche et développement en intelligence artificielle. Innovation continue pour l'Afrique.",
        features: ["Recherche appliquée", "Prototypage rapide", "Open innovation"],
        color: "#04E7C4"
    }
];

export default function Secteurs() {
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
                            <span className="text-sm text-gray-300">10 Secteurs d&apos;Innovation</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Nos <span className="text-gradient">Secteurs</span> d&apos;Activités
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Découvrez comment DBH transforme les industries clés du Congo
                            à travers l&apos;innovation technologique et l&apos;intelligence artificielle.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={sector.id}
                                id={sector.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="card h-full p-8 hover:border-[#03C9A9]/40 transition-all">
                                    <div className="flex items-start gap-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                            style={{ background: `linear-gradient(135deg, ${sector.color}20, ${sector.color}10)` }}
                                        >
                                            <sector.icon className="text-3xl" style={{ color: sector.color }} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-['Poppins'] text-2xl font-bold text-white group-hover:text-[#03C9A9] transition-colors">
                                                    {sector.title}
                                                </h3>
                                                <span
                                                    className="text-xs px-3 py-1 rounded-full"
                                                    style={{ background: `${sector.color}20`, color: sector.color }}
                                                >
                                                    {sector.subtitle}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 leading-relaxed mb-5">
                                                {sector.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {sector.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="text-xs px-3 py-1.5 rounded-lg bg-[#0F2540]/50 text-gray-300 border border-[#03C9A9]/10"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/services`}
                                                className="inline-flex items-center gap-2 text-[#03C9A9] hover:text-[#04E7C4] transition-colors text-sm font-medium"
                                            >
                                                En savoir plus
                                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                            Un projet en tête ?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Discutons de comment DBH peut transformer votre secteur.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Nous Contacter
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                Voir nos Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
