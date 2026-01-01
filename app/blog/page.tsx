"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles, HiOutlineNewspaper, HiOutlinePlay } from "react-icons/hi";
import { BsCalendar, BsTag, BsYoutube } from "react-icons/bs";

const categories = ["Tous", "Actualités", "Innovation", "FayilaDigitalHub", "Éducation", "IA", "Économie"];

const articles = [
    {
        id: 1,
        title: "DBH Academy forme 50 nouveaux talents en IA",
        excerpt: "Notre dernière cohorte de formation en intelligence artificielle a été couronnée de succès avec 50 diplômés prêts à transformer le marché congolais.",
        category: "Éducation",
        date: "2024-12-15",
        image: null,
        featured: true
    },
    {
        id: 2,
        title: "AgriConnectDRC s'étend à 3 nouvelles provinces",
        excerpt: "Notre plateforme d'agriculture intelligente est maintenant disponible au Kasaï, au Katanga et au Sud-Kivu, connectant des milliers de nouveaux agriculteurs.",
        category: "Innovation",
        date: "2024-12-10",
        image: null,
        featured: true
    },
    {
        id: 3,
        title: "Masolo : l'IA conversationnelle en lingala",
        excerpt: "Une première en RDC : notre assistant IA peut maintenant converser en lingala, rendant la technologie accessible à des millions de Congolais.",
        category: "IA",
        date: "2024-12-05",
        image: null,
        featured: true
    },
    {
        id: 4,
        title: "Partenariat stratégique avec le Ministère de l'Éducation",
        excerpt: "DBH signe un accord majeur pour déployer E-Classroom dans les écoles publiques de Kinshasa.",
        category: "Actualités",
        date: "2024-11-28",
        image: null,
        featured: false
    },
    {
        id: 5,
        title: "Dark Sale Batteries : vers une énergie 100% verte",
        excerpt: "Notre division énergie annonce une nouvelle gamme de batteries solaires conçues spécialement pour le marché congolais.",
        category: "Innovation",
        date: "2024-11-20",
        image: null,
        featured: false
    },
    {
        id: 6,
        title: "L'impact économique de l'IA au Congo",
        excerpt: "Analyse approfondie de comment l'intelligence artificielle transforme l'économie congolaise et crée de nouvelles opportunités.",
        category: "Économie",
        date: "2024-11-15",
        image: null,
        featured: false
    }
];

const videos = [
    { id: 1, title: "DBH Academy - Témoignages des diplômés", thumbnail: null },
    { id: 2, title: "Comment l'IA transforme l'agriculture au Congo", thumbnail: null },
    { id: 3, title: "Interview du CEO - Vision 2030", thumbnail: null }
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredArticles = activeCategory === "Tous"
        ? articles
        : articles.filter(article => article.category === activeCategory);

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
                            <span className="text-sm text-gray-300">Nos Dernières Nouvelles</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Blog & <span className="text-gradient">Actualités</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Restez informé des dernières innovations et actualités
                            de Dark Business Hi-Tech.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-[#03C9A9]/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10]"
                                    : "bg-[#0F2540]/50 text-gray-400 hover:text-white hover:bg-[#0F2540]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title text-white">
                            Articles <span className="text-gradient">Récents</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="card group cursor-pointer overflow-hidden"
                            >
                                {/* Placeholder Image */}
                                <div className="h-48 bg-gradient-to-br from-[#0F2540] to-[#0B0C10] rounded-xl mb-5 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                                    <HiOutlineNewspaper className="text-4xl text-[#03C9A9]/30" />
                                </div>

                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-xs px-3 py-1 rounded-full bg-[#03C9A9]/10 text-[#03C9A9]">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <BsCalendar className="text-xs" />
                                        {new Date(article.date).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <h3 className="font-['Poppins'] text-lg font-semibold text-white mb-3 group-hover:text-[#03C9A9] transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                    {article.excerpt}
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-[#03C9A9] hover:text-[#04E7C4] transition-colors text-sm font-medium"
                                >
                                    Lire la suite
                                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="section bg-gradient-to-b from-transparent to-[#0F2540]/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title text-white">
                            <span className="text-gradient">DBH TV</span>
                        </h2>
                        <p className="section-subtitle">
                            Découvrez nos vidéos et reportages
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card group cursor-pointer"
                            >
                                <div className="relative h-40 bg-gradient-to-br from-[#0F2540] to-[#0B0C10] rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                    <BsYoutube className="text-4xl text-[#03C9A9]/30 group-hover:text-[#03C9A9] transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B0C10]/50">
                                        <div className="w-12 h-12 rounded-full bg-[#03C9A9] flex items-center justify-center">
                                            <HiOutlinePlay className="text-xl text-[#0B0C10] ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-['Poppins'] font-semibold text-white text-sm group-hover:text-[#03C9A9] transition-colors">
                                    {video.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="card p-8 md:p-12 text-center">
                            <h2 className="font-['Poppins'] text-2xl md:text-3xl font-bold text-white mb-4">
                                Newsletter <span className="text-gradient">DBH Inside</span>
                            </h2>

                            <p className="text-gray-400 mb-8">
                                Recevez les dernières actualités et innovations de DBH directement dans votre boîte mail.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="flex-1 px-5 py-3 rounded-full bg-[#0F2540] border border-[#03C9A9]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#03C9A9] transition-colors"
                                />
                                <button type="submit" className="btn-primary whitespace-nowrap">
                                    S&apos;abonner
                                </button>
                            </form>
                        </div>
                    </motion.div>
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
                            &ldquo;L&apos;Afrique n&apos;a pas besoin d&apos;attendre la révolution technologique.
                            Elle est déjà en train de la créer.&rdquo;
                        </p>
                    </motion.blockquote>
                </div>
            </section>
        </div>
    );
}
