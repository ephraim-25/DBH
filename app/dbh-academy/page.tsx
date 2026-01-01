"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineAcademicCap } from "react-icons/hi";
import { BsRocketTakeoff, BsCodeSlash, BsLaptop, BsGraphUp, BsTools, BsCheckCircleFill } from "react-icons/bs";

const programs = [
    {
        icon: BsCodeSlash,
        title: "Développement Full-Stack orienté IA",
        description: "Maîtrisez les technologies modernes (React, Node.js, Python) et intégrez l'IA générative dans vos applications web.",
        tags: ["Web", "API", "LLM Integration"]
    },
    {
        icon: HiOutlineSparkles,
        title: "Intelligence Artificielle & Data",
        description: "Devenez expert en Machine Learning, Deep Learning et analyse de données pour créer des modèles prédictifs.",
        tags: ["Python", "TensorFlow", "Data Science"]
    },
    {
        icon: BsTools,
        title: "Automatisation et solutions intelligentes (SOMA)",
        description: "Apprenez à optimiser les processus d'entreprise grâce à l'automatisation, aux bots et aux agents IA.",
        tags: ["RPA", "Agents IA", "Workflow"]
    },
    {
        icon: BsLaptop,
        title: "UX/UI & Produits Numériques",
        description: "Concevez des interfaces intuitives et des expériences utilisateurs exceptionnelles centrées sur le besoin client.",
        tags: ["Figma", "Design System", "Prototypage"]
    },
    {
        icon: BsRocketTakeoff,
        title: "Entrepreneuriat Tech & Innovation",
        description: "De l'idéation au MVP : acquérez les compétences business pour transformer votre code en startup viable.",
        tags: ["Lean Startup", "Business Model", "Pitch"]
    }
];

const pedagogy = [
    { text: "70% Pratique / 30% Théorie" },
    { text: "Projets réels DBH" },
    { text: "Coaching & Mentorat" },
    { text: "Travail en équipe" }
];

export default function DBHAcademy() {
    const [activeField, setActiveField] = useState("");

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0F2540] to-[#0B0C10]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F2540]/50 rounded-full border border-[#03C9A9]/20 mb-8"
                        >
                            <HiOutlineAcademicCap className="text-[#03C9A9] text-xl" />
                            <span className="text-sm text-gray-300 font-medium">Plus qu'une école, une forge de fondateurs</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                            Former des <span className="text-gradient">entrepreneurs technologiques</span>,<br className="hidden md:block" /> pas seulement des employés.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            DBH Academy prépare une nouvelle génération de bâtisseurs numériques capables de créer des entreprises, des solutions et des innovations adaptées aux réalités africaines.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#candidature" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                                Postuler à DBH Academy
                            </a>
                            <Link href="/fayila-digital-hub" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                                Lancer mon projet tech
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Notre Différence */}
            <section className="section bg-[#0B0C10]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <h2 className="section-title text-white text-left mb-6">
                                Là où d’autres forment pour l’emploi, <span className="text-gradient">DBH Academy forme pour l’entrepreneuriat.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Nous croyons que le code est un levier de création de richesse. Notre curriculum est conçu pour vous donner les outils techniques et business pour bâtir votre propre avenir.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Création de startups dès la formation",
                                    "Projets réels développés au sein de DBH",
                                    "Mentorat par des entrepreneurs actifs",
                                    "Incubation directe via FayilaDigitalHub",
                                    "Accès financement et réseau"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <BsCheckCircleFill className="text-[#03C9A9] flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#03C9A9] to-[#04E7C4]">
                                <div className="bg-[#0F2540] rounded-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-[#03C9A9]/20 flex items-center justify-center">
                                            <HiOutlineLightBulb className="text-[#03C9A9] text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl">Mindset Builder</h4>
                                            <p className="text-gray-400 text-sm">Philosophie DBH</p>
                                        </div>
                                    </div>
                                    <blockquote className="text-xl text-gray-300 italic mb-6">
                                        &ldquo;Si ton objectif est seulement un emploi, DBH Academy n’est peut-être pas pour toi. Si tu veux créer, impacter et bâtir, tu es au bon endroit.&rdquo;
                                    </blockquote>
                                    <div className="w-full h-1 bg-gradient-to-r from-[#03C9A9] to-transparent rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programmes et Pédagogie */}
            <section className="section bg-gradient-to-b from-[#0B0C10] to-[#0F2540]/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title text-white">
                            Nos Programmes <span className="text-gradient">Business & IA</span>
                        </h2>
                        <p className="section-subtitle">
                            Des formations conçues comme des outils pour créer, non comme de simples diplômes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Programs Grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card group hover:border-[#03C9A9] transition-all"
                                >
                                    <program.icon className="text-4xl text-[#03C9A9] mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-['Poppins'] text-xl font-bold text-white mb-3">{program.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{program.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {program.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-[#0F2540] text-[#03C9A9] rounded border border-[#03C9A9]/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pedagogy Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card bg-[#0F2540]/50 h-full border-[#03C9A9]/30"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <HiOutlineUserGroup className="text-3xl text-white" />
                                    <h3 className="font-['Poppins'] text-2xl font-bold text-white">Approche <span className="text-gradient">Pédagogique</span></h3>
                                </div>
                                <div className="space-y-6">
                                    {pedagogy.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0C10]/50 border border-[#03C9A9]/10">
                                            <div className="w-2 h-10 bg-gradient-to-b from-[#03C9A9] to-[#04E7C4] rounded-full" />
                                            <span className="text-lg font-medium text-gray-200">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#03C9A9]/10 to-transparent border border-[#03C9A9]/20 text-center">
                                    <p className="text-sm text-gray-300 italic">
                                        "L'apprentissage se fait par l'action. Ici, on code, on échoue, on itère et on réussit."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Experience & Incubation */}
            <section className="section bg-[#0B0C10]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-['Poppins'] text-3xl font-bold text-white mb-6">
                                Apprendre en construisant des <span className="text-gradient">entreprises réelles</span>
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Les apprenants DBH Academy ne font pas que des exercices. Ils participent activement aux projets majeurs de Dark Business Hi-Tech : <strong>SOMA, AgriConnectDRC, Masolo, et E-Classroom.</strong>
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                L'objectif est de comprendre concrètement comment une entreprise tech se construit, se déploie et se monétise sur le marché africain.
                            </p>
                            <div className="p-6 rounded-xl bg-[#0F2540] border-l-4 border-[#03C9A9]">
                                <h4 className="text-white font-bold mb-2">De l'idée à la startup</h4>
                                <p className="text-sm text-gray-400 mb-4">
                                    Les meilleurs talents intègrent <strong>FayilaDigitalHub</strong> pour structurer leur propre startup, accéder aux investisseurs et scaler.
                                </p>
                                <Link href="/fayila-digital-hub" className="text-[#03C9A9] font-semibold hover:underline flex items-center gap-2">
                                    Découvrir FayilaDigitalHub <HiArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Abstract Visualization of Ecosystem */}
                            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-[#0F2540] to-[#03C9A9]/20 animate-pulse-slow flex items-center justify-center">
                                <div className="absolute inset-4 rounded-full border border-[#03C9A9]/20" />
                                <div className="absolute inset-12 rounded-full border border-[#03C9A9]/10" />
                                <div className="text-center p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">DBH Ecosystem</h3>
                                    <p className="text-[#03C9A9]">Academy • Hub • Ventures</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="candidature" className="section bg-gradient-to-b from-[#0F2540]/30 to-[#0B0C10]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="section-title text-white">
                                Postuler à <span className="text-gradient">DBH Academy</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Nous sélectionnons des profils engagés, ambitieux et prêts à créer de la valeur.
                            </p>
                        </div>

                        <div className="card p-8 md:p-12">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Nom & Prénom</label>
                                        <input type="text" className="input-field" placeholder="Votre nom complet" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Email</label>
                                        <input type="email" className="input-field" placeholder="votre@email.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Téléphone</label>
                                        <input type="tel" className="input-field" placeholder="+243..." required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Ville / Pays</label>
                                        <input type="text" className="input-field" placeholder="Kinshasa, RDC" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Niveau d'études</label>
                                        <input type="text" className="input-field" placeholder="Ex: Licence, Diplôme d'état..." required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-medium ml-1">Domaine d'intérêt</label>
                                        <select className="input-field bg-[#0F2540]" required>
                                            <option value="">Sélectionnez un programme</option>
                                            {programs.map(p => (
                                                <option key={p.title} value={p.title}>{p.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-1">Avez-vous un projet ?</label>
                                    <div className="flex gap-6 pt-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="has_project" value="yes" className="accent-[#03C9A9] w-5 h-5" />
                                            <span className="text-gray-300">Oui, j'ai une idée/startup</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="has_project" value="no" className="accent-[#03C9A9] w-5 h-5" />
                                            <span className="text-gray-300">Non, je cherche l'inspiration</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-1">Motivation</label>
                                    <textarea
                                        className="input-field min-h-[120px]"
                                        placeholder="Décrivez votre ambition, votre projet ou pourquoi vous voulez rejoindre DBH Academy..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-medium ml-1">CV ou Portfolio (Optionnel)</label>
                                    <input type="file" className="input-field file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#03C9A9] file:text-[#0B0C10] hover:file:bg-[#04E7C4]" />
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 text-lg font-bold mt-8">
                                    Envoyer ma candidature
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-[#0B0C10] text-center">
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-white mb-6">
                        L'avenir du Congo ne se cherche pas. <span className="text-gradient">Il se construit.</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8">
                        DBH Academy est le point de départ.
                    </p>
                </div>
            </section>
        </div>
    );
}
