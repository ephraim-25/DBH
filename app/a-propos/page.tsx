"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineHeart, HiOutlineGlobeAlt, HiOutlineUsers } from "react-icons/hi";
import { BsRocket, BsTrophy } from "react-icons/bs";

const values = [
    {
        icon: HiOutlineLightBulb,
        title: "Innovation",
        description: "Nous repoussons les limites de la technologie pour créer des solutions avant-gardistes."
    },
    {
        icon: HiOutlineHeart,
        title: "Impact Social",
        description: "Chaque projet vise à améliorer concrètement la vie des Congolais."
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Vision Pan-Africaine",
        description: "Nous construisons des solutions conçues pour l'Afrique, par l'Afrique."
    },
    {
        icon: HiOutlineUsers,
        title: "Collaboration",
        description: "Le partenariat est au cœur de notre approche pour un impact durable."
    }
];

const projects = [
    { name: "Dark Food SARLU", description: "Solutions AgroTech pour la chaîne alimentaire", category: "AgriTech" },
    { name: "DBH Academy", description: "Formation en IA et technologies numériques", category: "Éducation" },
    { name: "E-Classroom", description: "Plateforme EdTech avec IA intégrée", category: "EdTech" },
    { name: "AgriConnectDRC", description: "Agriculture intelligente et connectée", category: "AgriTech" },
    { name: "SOMA", description: "Automatisation des processus d'entreprise", category: "Automation" },
    { name: "Dark Sale Batteries", description: "Solutions d'énergie verte", category: "Énergie" },
    { name: "LocavehiclesDRC", description: "Mobilité intelligente", category: "Mobilité" },
    { name: "Masolo", description: "Assistants IA conversationnels", category: "IA" },
    { name: "Makita", description: "Réunions intelligentes augmentées par l'IA", category: "IA" },
    { name: "DBH AI Lab", description: "Recherche et développement en IA", category: "R&D" }
];

const awards = [
    { title: "Pionnier Tech RDC", year: "2024", description: "Reconnaissance pour l'innovation en IA" },
    { title: "Impact Jeunesse", year: "2023", description: "Formation de 200+ jeunes en technologies" },
    { title: "Innovation AgriTech", year: "2023", description: "Solutions agricoles intelligentes" }
];

export default function APropos() {
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
                            <span className="text-sm text-gray-300">Notre Histoire</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Nous ne rêvons pas du futur.{" "}
                            <span className="text-gradient">Nous le construisons.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Dark Business Hi-Tech est né d&apos;une vision audacieuse : faire de la RDC
                            un leader de l&apos;innovation technologique en Afrique.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03C9A9]/20 to-[#03C9A9]/10 flex items-center justify-center mb-6">
                                <BsRocket className="text-2xl text-[#03C9A9]" />
                            </div>
                            <h3 className="font-['Poppins'] text-2xl font-bold text-white mb-4">Notre Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Faire de la République Démocratique du Congo un hub technologique africain,
                                où l&apos;intelligence artificielle et l&apos;innovation numérique transforment
                                positivement tous les aspects de la vie quotidienne.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#04E7C4]/20 to-[#04E7C4]/10 flex items-center justify-center mb-6">
                                <HiOutlineGlobeAlt className="text-2xl text-[#04E7C4]" />
                            </div>
                            <h3 className="font-['Poppins'] text-2xl font-bold text-white mb-4">Notre Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Développer et déployer des solutions technologiques innovantes qui répondent
                                aux défis uniques du Congo, tout en formant la prochaine génération de
                                leaders technologiques africains.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos <span className="text-gradient">Valeurs</span>
                        </h2>
                        <p className="section-subtitle">
                            Les principes qui guident chacune de nos actions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#03C9A9]/20 to-transparent flex items-center justify-center mx-auto mb-5">
                                    <value.icon className="text-2xl text-[#03C9A9]" />
                                </div>
                                <h3 className="font-['Poppins'] font-semibold text-lg text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section bg-gradient-to-b from-[#0F2540]/20 to-transparent">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] flex items-center justify-center flex-shrink-0">
                                    <span className="text-4xl font-bold text-[#0B0C10]">EYM</span>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="font-['Poppins'] text-2xl font-bold text-white mb-2">
                                        Ephraim YABA MBUKU
                                    </h3>
                                    <p className="text-[#03C9A9] font-medium mb-4">Fondateur & CEO</p>
                                    <p className="text-gray-400 leading-relaxed">
                                        Visionnaire et entrepreneur passionné, Ephraim YABA MBUKU a fondé Dark Business Hi-Tech
                                        avec la conviction que l&apos;Afrique peut et doit être à l&apos;avant-garde de la révolution
                                        de l&apos;intelligence artificielle. Son parcours professionnel l&apos;a mené à développer
                                        des solutions innovantes qui transforment aujourd&apos;hui des secteurs clés de l&apos;économie congolaise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ecosystem Strategy */}
            <section className="section bg-[#0F2540]/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="section-title text-white mb-8">
                            Notre <span className="text-gradient">Écosystème</span> Intégré
                        </h2>
                        <div className="bg-[#0B0C10] border border-[#03C9A9]/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#03C9A9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 space-y-6 text-left">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Chez Dark Business Hi-Tech, nous ne créons pas seulement des entreprises, nous bâtissons un <span className="text-[#03C9A9] font-semibold">cycle vertueux d&apos;innovation</span>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#03C9A9]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#03C9A9] font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Formation de l&apos;Élite</h4>
                                            <p className="text-gray-400 text-sm">Via <span className="text-white">DBH Academy</span>, nous formons les talents locaux aux technologies de pointe (IA, Cloud, Dév).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#03C9A9]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#03C9A9] font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Incubation & Création</h4>
                                            <p className="text-gray-400 text-sm">Ces talents alimentent notre incubateur <span className="text-white">FayilaDigitalHub</span> et rejoignent nos startups (Dark Food, Dark Sale, etc.).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#03C9A9]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#03C9A9] font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Impact Réel</h4>
                                            <p className="text-gray-400 text-sm">Nos solutions résolvent des problèmes concrets (Agriculture, Énergie) et génèrent des ressources pour former la prochaine génération.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos <span className="text-gradient">Projets</span>
                        </h2>
                        <p className="section-subtitle">
                            10 initiatives qui façonnent l&apos;avenir du Congo
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group p-6 rounded-xl bg-[#0F2540]/30 border border-[#03C9A9]/10 hover:border-[#03C9A9]/30 transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="font-['Poppins'] font-semibold text-white group-hover:text-[#03C9A9] transition-colors">
                                        {project.name}
                                    </h4>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#03C9A9]/10 text-[#03C9A9]">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            <span className="text-gradient">Reconnaissances</span> & Prix
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {awards.map((award, index) => (
                            <motion.div
                                key={award.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <BsTrophy className="text-3xl text-[#03C9A9] mx-auto mb-4" />
                                <h4 className="font-['Poppins'] font-semibold text-white mb-1">{award.title}</h4>
                                <p className="text-[#03C9A9] text-sm mb-2">{award.year}</p>
                                <p className="text-gray-400 text-sm">{award.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote */}
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
                            — Ephraim YABA MBUKU
                        </footer>
                    </motion.blockquote>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                            Rejoignez l&apos;aventure DBH
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Ensemble, construisons l&apos;avenir technologique du Congo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Nous Contacter
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="/partenariats" className="btn-secondary">
                                Devenir Partenaire
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
