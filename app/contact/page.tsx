"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { BsRobot, BsFacebook, BsLinkedin, BsInstagram, BsYoutube, BsSend, BsUpload } from "react-icons/bs";

const contactInfo = [
    {
        icon: HiOutlineMail,
        title: "Email",
        value: "contact@darkbusinesshitech.com",
        href: "mailto:contact@darkbusinesshitech.com"
    },
    {
        icon: HiOutlinePhone,
        title: "Téléphone",
        value: "+243 000 000 000",
        href: "tel:+243000000000"
    },
    {
        icon: HiOutlineLocationMarker,
        title: "Adresse",
        value: "Gombe, Av. de la Justice (Réf. Petit Pont), Kinshasa",
        href: "#map"
    }
];

const socialLinks = [
    { icon: BsFacebook, label: "Facebook", href: "https://facebook.com/darkbusinesshitech" },
    { icon: BsLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/darkbusinesshitech" },
    { icon: BsInstagram, label: "Instagram", href: "https://instagram.com/darkbusinesshitech" },
    { icon: BsYoutube, label: "YouTube", href: "https://youtube.com/@darkbusinesshitech" }
];

const subjects = [
    "Demande d'information",
    "Partenariat",
    "Investissement",
    "Rejoindre DBH Academy",
    "Support technique",
    "Autre"
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        file: null as File | null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, file: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", organization: "", subject: "", message: "", file: null });
    };

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
                            <span className="text-sm text-gray-300">Parlons de votre projet</span>
                        </motion.div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Contact & <span className="text-gradient">Support</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Une question, un projet, une idée ? Notre équipe est là pour vous accompagner.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card p-8">
                                <h2 className="font-['Poppins'] text-2xl font-bold text-white mb-6">
                                    Envoyez-nous un message
                                </h2>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] flex items-center justify-center mx-auto mb-4">
                                            <BsSend className="text-2xl text-[#0B0C10]" />
                                        </div>
                                        <h3 className="font-['Poppins'] text-xl font-semibold text-white mb-2">
                                            Message envoyé !
                                        </h3>
                                        <p className="text-gray-400">
                                            Nous vous répondrons dans les meilleurs délais.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-secondary mt-6"
                                        >
                                            Envoyer un autre message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-2">Nom complet *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-[#03C9A9]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#03C9A9] transition-colors"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-[#03C9A9]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#03C9A9] transition-colors"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Organisation</label>
                                            <input
                                                type="text"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-[#03C9A9]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#03C9A9] transition-colors"
                                                placeholder="Votre entreprise ou organisation"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Sujet *</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-[#03C9A9]/20 text-white focus:outline-none focus:border-[#03C9A9] transition-colors"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                {subjects.map(subject => (
                                                    <option key={subject} value={subject}>{subject}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-[#03C9A9]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#03C9A9] transition-colors resize-none"
                                                placeholder="Décrivez votre projet ou question..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Pièce jointe (optionnel)</label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    id="file-upload"
                                                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                                />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#0F2540] border border-dashed border-[#03C9A9]/30 text-gray-400 hover:border-[#03C9A9]/50 cursor-pointer transition-colors"
                                                >
                                                    <BsUpload />
                                                    {formData.file ? formData.file.name : "Cliquez pour uploader un fichier"}
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-[#0B0C10]/30 border-t-[#0B0C10] rounded-full animate-spin" />
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    Envoyer le message
                                                    <BsSend className="ml-2" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info & DarkBot */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* DarkBot Card */}
                            <div className="card p-8 bg-gradient-to-br from-[#0F2540]/60 to-[#0B0C10]/60">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] flex items-center justify-center flex-shrink-0">
                                        <BsRobot className="text-2xl text-[#0B0C10]" />
                                    </div>
                                    <div>
                                        <h3 className="font-['Poppins'] text-xl font-bold text-white mb-2">
                                            Parlez à DarkBot
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            Notre assistant IA est disponible 24/7 pour répondre à vos questions en français, lingala, swahili et tshiluba.
                                        </p>
                                        <button
                                            onClick={() => {
                                                const event = new CustomEvent("openDarkBot");
                                                window.dispatchEvent(event);
                                            }}
                                            className="btn-primary text-sm py-2.5"
                                        >
                                            <BsRobot className="mr-2" />
                                            Démarrer la conversation
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="card p-8">
                                <h3 className="font-['Poppins'] text-xl font-bold text-white mb-6">
                                    Informations de contact
                                </h3>

                                <div className="space-y-5">
                                    {contactInfo.map((info) => (
                                        <a
                                            key={info.title}
                                            href={info.href}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-[#0F2540] flex items-center justify-center flex-shrink-0 group-hover:bg-[#03C9A9]/10 transition-colors">
                                                <info.icon className="text-xl text-[#03C9A9]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                                                <p className="text-white group-hover:text-[#03C9A9] transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-6 border-t border-[#03C9A9]/10">
                                    <p className="text-sm text-gray-400 mb-4">Suivez-nous</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-[#0F2540] flex items-center justify-center text-gray-400 hover:bg-[#03C9A9] hover:text-[#0B0C10] transition-all"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="text-lg" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div id="map" className="card p-0 overflow-hidden h-64">
                                <div className="w-full h-full bg-gradient-to-br from-[#0F2540] to-[#0B0C10] flex items-center justify-center">
                                    <div className="text-center">
                                        <HiOutlineLocationMarker className="text-4xl text-[#03C9A9]/30 mx-auto mb-2" />
                                        <p className="text-gray-500 text-sm">Gombe, Kinshasa</p>
                                        <p className="text-gray-600 text-xs">Av. de la Justice</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
                            &ldquo;La meilleure façon de prédire l&apos;avenir, c&apos;est de le construire ensemble.&rdquo;
                        </p>
                    </motion.blockquote>
                </div>
            </section>
        </div>
    );
}
