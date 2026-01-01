"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const leadership = [
    {
        name: "Ephraim YABA MBUKU",
        role: "Fondateur & CEO",
        initials: "EYM",
        bio: "Visionnaire et entrepreneur passionné, Ephraim a fondé DBH avec la conviction que l'Afrique peut être à l'avant-garde de la révolution IA.",
        linkedin: "#",
        featured: true
    },
    {
        name: "Jorah Potongo",
        role: "CTO",
        initials: "JP",
        bio: "Expert en architecture logicielle et intelligence artificielle, Jorah dirige toutes les initiatives technologiques de DBH.",
        linkedin: "#",
        featured: true
    },
    {
        name: "À définir",
        role: "COO",
        initials: "COO",
        bio: "Responsable des opérations et de l'optimisation des processus à travers toutes les divisions de DBH.",
        linkedin: "#",
        featured: false
    },
    {
        name: "À définir",
        role: "CFO",
        initials: "CFO",
        bio: "Direction financière et stratégie d'investissement pour soutenir la croissance de l'entreprise.",
        linkedin: "#",
        featured: false
    },
    {
        name: "À définir",
        role: "Directeur Communication",
        initials: "DC",
        bio: "Stratégie de communication et relations publiques pour promouvoir la vision de DBH.",
        linkedin: "#",
        featured: false
    }
];

const divisions = [
    { name: "DBH Academy", lead: "À confirmer", focus: "Formation & Éducation" },
    { name: "Dark Food", lead: "À confirmer", focus: "AgroTech & Distribution" },
    { name: "DBH AI Lab", lead: "À confirmer", focus: "R&D Intelligence Artificielle" },
    { name: "Dark Sale Batteries", lead: "À confirmer", focus: "Énergie Verte" }
];

export default function Equipe() {
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
                            <span className="text-sm text-gray-300">Les Visionnaires</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Notre <span className="text-gradient">Équipe</span> & Leadership
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Découvrez les talents qui construisent l&apos;avenir technologique du Congo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Spotlight */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card p-8 md:p-12 bg-gradient-to-br from-[#0F2540]/60 to-[#0B0C10]/60">
                            <div className="flex flex-col lg:flex-row items-center gap-10">
                                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(3,201,169,0.3)]">
                                    <span className="text-5xl font-bold text-[#0B0C10]">EYM</span>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-2">
                                        Ephraim YABA MBUKU
                                    </h2>
                                    <p className="text-[#03C9A9] font-medium text-lg mb-6">Fondateur & CEO</p>

                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        Visionnaire et entrepreneur passionné, Ephraim YABA MBUKU a fondé Dark Business Hi-Tech
                                        avec la conviction profonde que l&apos;Afrique peut et doit être à l&apos;avant-garde de la révolution
                                        de l&apos;intelligence artificielle. Son parcours professionnel exceptionnel l&apos;a mené à développer
                                        des solutions innovantes qui transforment aujourd&apos;hui des secteurs clés de l&apos;économie congolaise.
                                        Sa vision pan-africaine inspire une équipe dédiée à construire un avenir technologique souverain.
                                    </p>

                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-[#0F2540] flex items-center justify-center text-gray-400 hover:bg-[#03C9A9] hover:text-[#0B0C10] transition-all"
                                            aria-label="LinkedIn"
                                        >
                                            <BsLinkedin className="text-lg" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-[#0F2540] flex items-center justify-center text-gray-400 hover:bg-[#03C9A9] hover:text-[#0B0C10] transition-all"
                                            aria-label="Twitter"
                                        >
                                            <BsTwitter className="text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Équipe <span className="text-gradient">Dirigeante</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {leadership.slice(1).map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card group text-center hover:border-[#03C9A9]/40 transition-all"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#03C9A9]/20 to-[#04E7C4]/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                                    <span className="text-xl font-bold text-[#03C9A9]">{member.initials}</span>
                                </div>

                                <h3 className="font-['Poppins'] font-semibold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#03C9A9] text-sm mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {member.bio}
                                </p>

                                {member.linkedin && member.name !== "À définir" && (
                                    <a
                                        href={member.linkedin}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0F2540] text-gray-400 hover:bg-[#03C9A9] hover:text-[#0B0C10] transition-all mt-4"
                                        aria-label="LinkedIn"
                                    >
                                        <BsLinkedin className="text-sm" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divisions */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos <span className="text-gradient">Divisions</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {divisions.map((division, index) => (
                            <motion.div
                                key={division.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-[#0F2540]/30 border border-[#03C9A9]/10 hover:border-[#03C9A9]/30 transition-all text-center"
                            >
                                <h4 className="font-['Poppins'] font-semibold text-white mb-2">
                                    {division.name}
                                </h4>
                                <p className="text-[#03C9A9] text-sm mb-2">{division.lead}</p>
                                <p className="text-gray-400 text-xs">{division.focus}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                            Rejoignez notre équipe
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Vous êtes passionné par l&apos;IA et l&apos;innovation ? Rejoignez DBH et
                            participez à la transformation technologique du Congo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Postuler
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="/a-propos" className="btn-secondary">
                                En savoir plus
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
