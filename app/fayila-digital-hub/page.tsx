"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineAcademicCap } from "react-icons/hi";
import { BsRocket, BsCpu, BsBriefcase, BsGlobe2 } from "react-icons/bs";

const features = [
    {
        icon: HiOutlineAcademicCap,
        title: "Formation & Montée en Compétences",
        description: "Programmes intensifs en développement web, IA, data science et entrepreneuriat numérique."
    },
    {
        icon: BsRocket,
        title: "Incubation & Accélération",
        description: "Accompagnement de bout en bout pour les startups : du prototypage à la levée de fonds."
    },
    {
        icon: BsCpu,
        title: "Co-développement avec DBH AI Lab",
        description: "Accès privilégié aux ressources R&D de Dark Business Hi-Tech pour booster votre innovation."
    },
    {
        icon: BsBriefcase,
        title: "Mise en Relation Investisseurs",
        description: "Connexion directe avec notre réseau de Business Angels et de fonds de capital-risque."
    }
];

export default function FayilaDigitalHub() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F2540]/50 to-transparent" />
                {/* Animated Background Elements */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#03C9A9]/10 rounded-full blur-3xl animate-pulse-glow" />

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
                            <span className="text-sm text-gray-300">Le Hub d&apos;Innovation de DBH</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Transformer les idées congolaises en <span className="text-gradient">startups durables</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            FayilaDigitalHub est l&apos;incubateur et accélérateur tech de Dark Business Hi-Tech.
                            Nous propulsons la prochaine génération d&apos;entrepreneurs africains.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact?subject=Je veux rejoindre FayilaDigitalHub" className="btn-primary">
                                Rejoindre le Hub
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="/partenariats" className="btn-secondary">
                                Devenir Mentor
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0F2540] to-[#0B0C10] border border-[#03C9A9]/20 p-8 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#03C9A9]/5 group-hover:bg-[#03C9A9]/10 transition-colors" />
                                <HiOutlineLightBulb className="text-9xl text-[#03C9A9] opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="card bg-[#0B0C10]/80 backdrop-blur-sm border-[#03C9A9]/30 p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#03C9A9]/20 flex items-center justify-center">
                                                <BsRocket className="text-[#03C9A9]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold">Incubation</p>
                                                <p className="text-xs text-gray-400">De l&apos;idée au MVP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title text-white mb-6">
                                Un écosystème complet pour <span className="text-gradient">réussir</span>
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                FayilaDigitalHub n&apos;est pas juste un espace de co-working. C&apos;est un creuset d&apos;innovation où
                                technologie, expertise business et financement se rencontrent. Nous connectons les talents locaux
                                aux opportunités globales.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Accès aux API exclusives de DBH (SOMA, Masolo)",
                                    "Mentorat par des experts internationaux",
                                    "Préparation aux concours tech (SMART CONGO, We Act)",
                                    "Espaces de travail équipés à Kinshasa"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="w-2 h-2 rounded-full bg-[#03C9A9]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs/Features Grid */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos <span className="text-gradient">Programmes</span>
                        </h2>
                        <p className="section-subtitle">
                            Des parcours adaptés à chaque stade de maturité de votre projet
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card group hover:bg-[#0F2540]/60"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03C9A9]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="text-2xl text-[#03C9A9]" />
                                </div>
                                <h3 className="font-['Poppins'] text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="section bg-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: HiOutlineUserGroup,
                                title: "Jeunes Entrepreneurs",
                                desc: "Vous avez une idée innovante mais besoin de structure ? Nous vous aidons à bâtir des bases solides.",
                                cta: "Postuler"
                            },
                            {
                                icon: HiOutlineAcademicCap,
                                title: "Étudiants & Chercheurs",
                                desc: "Transformez vos projets académiques en véritables startups grâce à notre accompagnement R&D.",
                                cta: "Rejoindre"
                            },
                            {
                                icon: BsGlobe2,
                                title: "Diaspora & Investisseurs",
                                desc: "Soutenez l'innovation en RDC. Devenez mentor ou investissez dans les pépites de demain.",
                                cta: "S'impliquer"
                            }
                        ].map((audience, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6 border border-[#03C9A9]/10 rounded-2xl hover:border-[#03C9A9]/30 transition-colors"
                            >
                                <audience.icon className="text-4xl text-[#04E7C4] mx-auto mb-4" />
                                <h4 className="text-white font-bold text-lg mb-2">{audience.title}</h4>
                                <p className="text-sm text-gray-400 mb-6">{audience.desc}</p>
                                <Link href="/contact" className="text-[#03C9A9] font-medium hover:underline">
                                    {audience.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="card p-12 text-center bg-gradient-to-r from-[#0F2540] to-[#0B0C10] border border-[#03C9A9]/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#03C9A9]/10 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                                Prêt à changer la donne ?
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                                Le prochain unicorn africain pourrait être le vôtre. Rejoignez FayilaDigitalHub et donnez vie à votre vision.
                            </p>
                            <Link href="/contact?subject=Je veux rejoindre FayilaDigitalHub" className="btn-primary inline-flex">
                                Rejoindre la cohorte
                                <HiArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
