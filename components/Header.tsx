"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/secteurs", label: "Secteurs" },
    { href: "/dbh-academy", label: "DBH Academy" },
    { href: "/wazi-agency", label: "Wazi Agency" },
    { href: "/services", label: "Services" },
    { href: "/partenariats", label: "Partenariats" },
    { href: "/blog", label: "Blog" },
    { href: "/equipe", label: "Équipe" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0B0C10]/95 backdrop-blur-lg shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <img
                                src="/dbh-logo.png"
                                alt="DBH Logo"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-['Poppins'] font-bold text-white text-lg">
                                Dark Business
                            </span>
                            <span className="font-['Poppins'] font-bold text-[#03C9A9] text-lg ml-1">
                                Hi-Tech
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-[#03C9A9] transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#03C9A9] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => {
                                const event = new CustomEvent("openDarkBot");
                                window.dispatchEvent(event);
                            }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10] font-semibold rounded-full hover:shadow-[0_0_20px_rgba(3,201,169,0.4)] transition-all hover:-translate-y-0.5"
                        >
                            <BsRobot className="text-lg" />
                            Parler à DarkBot
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="text-2xl" />
                        ) : (
                            <HiMenu className="text-2xl" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0B0C10]/98 backdrop-blur-lg border-t border-[#03C9A9]/10"
                    >
                        <div className="container mx-auto px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-300 hover:text-[#03C9A9] transition-colors py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        const event = new CustomEvent("openDarkBot");
                                        window.dispatchEvent(event);
                                    }}
                                    className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10] font-semibold rounded-full mt-4"
                                >
                                    <BsRobot className="text-lg" />
                                    Parler à DarkBot
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
