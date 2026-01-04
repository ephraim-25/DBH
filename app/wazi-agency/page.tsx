"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineLightBulb, HiOutlineSparkles, HiOutlineUserGroup } from "react-icons/hi";
import { BsBrush, BsGlobe2, BsLightningCharge, BsMegaphone } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";

const services = [
    {
        icon: BsBrush,
        title: "Branding & Identité Visuelle",
        description: "Création de logos, chartes graphiques et systèmes visuels qui capturent l'essence unique de votre marque."
    },
    {
        icon: BsMegaphone,
        title: "Storytelling Stratégique",
        description: "Nous racontons votre histoire avec des mots qui résonnent et convertissent vos audiences."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Direction Créative (DA)",
        description: "Supervision artistique globale pour assurer la cohérence et l'impact de toutes vos communications."
    },
    {
        icon: BsGlobe2,
        title: "Design Panafricain",
        description: "Une esthétique moderne ancrée dans les codes culturels africains pour une résonance locale et globale."
    }
];

export default function WaziAgency() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section relative overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0F2540] to-[#0B0C10]" />

                {/* Abstract Background Shapes */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#03C9A9]/10 rounded-full blur-[80px]" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F2540]/50 rounded-full border border-[#FFD700]/20 mb-8"
                        >
                            <HiOutlineSparkles className="text-[#FFD700]" />
                            <span className="text-sm text-gray-300 font-medium">L'Agence de Branding de DBH</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                            Donner de la clarté aux <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#E6A600]">marques africaines.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Wazi signifie "Clarté" en Swahili. Nous fusionnons créativité stratégique et héritage culturel pour propulser les startups et institutions innovantes.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="#contact" className="btn-primary bg-gradient-to-r from-[#FFD700] to-[#E6A600] text-[#0B0C10] hover:text-white border-none">
                                Démarrer votre projet
                                <HiArrowRight className="ml-2" />
                            </Link>
                            <Link href="#portfolio" className="btn-secondary hover:border-[#FFD700] hover:text-[#FFD700]">
                                Voir nos réalisations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our History */}
            <section className="section bg-[#0B0C10]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title text-white mb-6">
                                Notre <span className="text-[#FFD700]">Histoire</span>
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Née au cœur de l'écosystème Dark Business Hi-Tech, Wazi Agency a émergé d'un constat simple : l'innovation technologique africaine a besoin d'une narration puissante pour s'imposer mondialement.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Nous ne sommes pas juste des designers. Nous sommes des architectes de sens, déterminés à traduire la complexité de vos projets tech en identités visuelles claires, mémorables et profondément africaines.
                            </p>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden border border-[#FFD700]/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F2540] to-[#0B0C10] flex items-center justify-center">
                                <FaFingerprint className="text-9xl text-[#FFD700]/10" />
                                <div className="absolute inset-0 bg-[url('/pattern-africa.png')] opacity-5 mix-blend-overlay"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section bg-[#0F2540]/30 relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-white">
                            Mission & <span className="text-[#03C9A9]">Valeurs</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BsLightningCharge,
                                title: "Force Culturelle",
                                desc: "Nous croyons que l'identité africaine est un levier de différenciation stratégique, pas juste un folklore."
                            },
                            {
                                icon: HiOutlineLightBulb,
                                title: "Clarté Radicale",
                                desc: "Simplifier le complexe. Rendre l'innovation accessible et désirable pour tous."
                            },
                            {
                                icon: HiOutlineUserGroup,
                                title: "Excellence Panafricaine",
                                desc: "Aligner nos standards de qualité sur les meilleurs niveaux internationaux."
                            }
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#0B0C10] p-8 rounded-2xl border border-gray-800 hover:border-[#FFD700]/30 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD700]/20 transition-colors">
                                    <val.icon className="text-2xl text-[#FFD700]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-gray-400">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos <span className="text-gradient">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Une approche 360° pour bâtir des marques qui durent.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card group hover:bg-[#0F2540]/60 p-8 flex gap-6 items-start"
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#03C9A9]/20 to-transparent flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <service.icon className="text-3xl text-[#03C9A9]" />
                                </div>
                                <div>
                                    <h3 className="font-['Poppins'] text-xl font-bold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wazi in DBH Ecosystem */}
            <section className="section bg-gradient-to-b from-[#0F2540]/20 to-transparent">
                <div className="container mx-auto px-6">
                    <div className="card bg-[#0B0C10]/80 backdrop-blur-sm border-[#03C9A9]/20 p-8 md:p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Au cœur de l'écosystème <span className="text-[#03C9A9]">Dark Business Hi-Tech</span>
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Wazi Agency joue un rôle transversal crucial. Nous ne servons pas seulement les clients externes ; nous façonnons l'image de toutes les filiales de DBH (Academy, AI Lab, Fayila). Cette position privilégiée nous donne une expertise unique dans le branding technologique et institutionnel.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 bg-[#0F2540] rounded-full text-[#03C9A9] text-sm border border-[#03C9A9]/20">Partenaire de FayilaDigitalHub</span>
                            <span className="px-4 py-2 bg-[#0F2540] rounded-full text-[#03C9A9] text-sm border border-[#03C9A9]/20">Studio Créatif de DBH Academy</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Simplified) */}
            <section className="section">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="section-title text-white mb-12">
                        Notre <span className="text-[#FFD700]">Équipe</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Placeholder for team members */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group">
                                <div className="w-48 h-48 mx-auto rounded-full bg-[#1A1C23] border border-gray-800 mb-6 flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <BsGlobe2 className="text-4xl text-gray-600 group-hover:text-[#FFD700] transition-colors" />
                                </div>
                                <h3 className="text-white font-bold text-lg">Membre de l'équipe</h3>
                                <p className="text-[#FFD700] text-sm">Poste Créatif</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="section" id="contact">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="card p-12 text-center bg-gradient-to-r from-[#0F2540] to-[#0B0C10] border border-[#FFD700]/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                                Construisons ensemble une marque qui compte.
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                                Votre vision mérite d'être vue et comprise. Discutons de la manière dont nous pouvons la révéler au monde.
                            </p>
                            <Link href="/contact?subject=Devis Wazi Agency" className="btn-primary bg-[#FFD700] text-[#0B0C10] hover:bg-[#E6A600] inline-flex border-none">
                                Contacter l'équipe Wazi
                                <HiArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
