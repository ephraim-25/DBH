"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { BsBuilding, BsGlobe, BsBook, BsGraphUp, BsHeartFill } from "react-icons/bs";

const partnershipTypes = [
    {
        icon: BsBuilding,
        title: "Partenariats Institutionnels",
        description: "Collaboration avec les ministères et agences gouvernementales pour des projets d'envergure nationale.",
        examples: ["Ministère de l'Éducation", "Ministère de l'Agriculture", "Agences de développement"]
    },
    {
        icon: BsGraphUp,
        title: "Partenariats Innovation",
        description: "Collaboration avec startups et incubateurs via FayilaDigitalHub pour co-créer les solutions de demain.",
        examples: ["Startups tech", "Incubateurs", "Fonds VC"]
    },
    {
        icon: BsBook,
        title: "Partenariats Académiques",
        description: "Recherche et formation en partenariat avec les universités et centres de formation.",
        examples: ["Universités congolaises", "Centres de recherche", "Écoles techniques"]
    },
    {
        icon: BsGlobe,
        title: "Partenariats Internationaux",
        description: "Coopération Sud-Sud et Nord-Sud pour l'échange de connaissances et technologies.",
        examples: ["ONG internationales", "Bailleurs de fonds", "Tech companies globales"]
    }
];

const investmentOpportunities = [
    { project: "Dark Food", sector: "AgroTech", objective: "Expansion logistique", amount: "À définir" },
    { project: "Dark Sale Batteries", sector: "Énergie verte", objective: "Production locale", amount: "À définir" },
    { project: "AgriConnectDRC", sector: "AgriTech", objective: "Déploiement national", amount: "À définir" },
    { project: "E-Classroom", sector: "EdTech", objective: "IA éducative intégrée", amount: "À définir" },
    { project: "SOMA", sector: "Automation", objective: "Module RH & gestion IA", amount: "À définir" }
];

export default function Partenariats() {
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
                            <span className="text-sm text-gray-300">Collaborons Ensemble</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            <span className="text-gradient">Partenariats</span> & Opportunités
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Rejoignez l&apos;écosystème DBH et participez à la transformation
                            technologique du Congo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Types */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Types de <span className="text-gradient">Partenariats</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {partnershipTypes.map((type, index) => (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card group"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03C9A9]/20 to-[#03C9A9]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <type.icon className="text-2xl text-[#03C9A9]" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-['Poppins'] text-xl font-bold text-white mb-3">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {type.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {type.examples.map((example) => (
                                                <span
                                                    key={example}
                                                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F2540]/50 text-gray-300 border border-[#03C9A9]/10"
                                                >
                                                    {example}
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

            {/* Investment Opportunities */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Opportunités d&apos;<span className="text-gradient">Investissement</span>
                        </h2>
                        <p className="section-subtitle">
                            Investissez dans les projets qui façonnent l&apos;avenir du Congo
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#03C9A9]/20">
                                            <th className="text-left py-4 px-6 font-['Poppins'] font-semibold text-white">Projet</th>
                                            <th className="text-left py-4 px-6 font-['Poppins'] font-semibold text-white">Secteur</th>
                                            <th className="text-left py-4 px-6 font-['Poppins'] font-semibold text-white">Objectif</th>
                                            <th className="text-left py-4 px-6 font-['Poppins'] font-semibold text-white">Financement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {investmentOpportunities.map((opp, index) => (
                                            <tr
                                                key={opp.project}
                                                className="border-b border-[#03C9A9]/10 hover:bg-[#03C9A9]/5 transition-colors"
                                            >
                                                <td className="py-4 px-6">
                                                    <span className="font-medium text-[#03C9A9]">{opp.project}</span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="text-xs px-3 py-1 rounded-full bg-[#0F2540] text-gray-300">
                                                        {opp.sector}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-gray-400">{opp.objective}</td>
                                                <td className="py-4 px-6 text-gray-400">{opp.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Responsibility */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card p-8 md:p-12 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] flex items-center justify-center mx-auto mb-6">
                                <BsHeartFill className="text-2xl text-[#0B0C10]" />
                            </div>

                            <h2 className="font-['Poppins'] text-2xl md:text-3xl font-bold text-white mb-4">
                                Responsabilité Sociale
                            </h2>

                            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
                                Chez DBH, nous croyons que la technologie doit servir le bien commun.
                                Notre engagement envers la jeunesse congolaise et l&apos;éducation numérique
                                est au cœur de notre mission. À travers DBH Academy, nous formons les
                                leaders technologiques de demain et créons des opportunités pour tous.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">200+</div>
                                    <div className="text-xs text-gray-400">Jeunes formés</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">50%</div>
                                    <div className="text-xs text-gray-400">Bourses accordées</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">10+</div>
                                    <div className="text-xs text-gray-400">Programmes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">5</div>
                                    <div className="text-xs text-gray-400">Provinces</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            Devenez partenaire de DBH
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Ensemble, construisons l&apos;avenir technologique du Congo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Nous Contacter
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="/a-propos" className="btn-secondary">
                                Découvrir DBH
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
