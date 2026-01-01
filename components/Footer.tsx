import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const sectors = [
    { href: "/secteurs#dark-food", label: "Dark Food" },
    { href: "/secteurs#dbh-academy", label: "DBH Academy" },
    { href: "/secteurs#agriconnect", label: "AgriConnectDRC" },
    { href: "/secteurs#dark-sale", label: "Dark Sale Batteries" },
    { href: "/secteurs#dbh-ai-lab", label: "DBH AI Lab" },
];

const socialLinks = [
    { href: "https://facebook.com/darkbusinesshitech", icon: FaFacebookF, label: "Facebook" },
    { href: "https://linkedin.com/company/darkbusinesshitech", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://instagram.com/darkbusinesshitech", icon: FaInstagram, label: "Instagram" },
    { href: "https://youtube.com/@darkbusinesshitech", icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0B0C10] border-t border-[#03C9A9]/10">
            {/* Quote Section */}
            <div className="bg-gradient-to-r from-[#0F2540] to-[#0B0C10] py-12">
                <div className="container mx-auto px-6 text-center">
                    <blockquote className="text-xl md:text-2xl font-['Poppins'] italic text-gray-300 max-w-3xl mx-auto">
                        &ldquo;L&apos;Afrique pense, crée et code son avenir.&rdquo;
                    </blockquote>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#03C9A9] to-[#04E7C4] flex items-center justify-center font-bold text-[#0B0C10] text-xl">
                                DBH
                            </div>
                            <div>
                                <span className="font-['Poppins'] font-bold text-white text-lg block">
                                    Dark Business
                                </span>
                                <span className="font-['Poppins'] font-bold text-[#03C9A9] text-lg">
                                    Hi-Tech
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Réinventons le quotidien congolais grâce à l&apos;intelligence artificielle.
                        </p>
                        <div className="flex gap-4">
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

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-['Poppins'] font-semibold text-white text-lg mb-6">
                            Liens Rapides
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#03C9A9] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div>
                        <h4 className="font-['Poppins'] font-semibold text-white text-lg mb-6">
                            Nos Secteurs
                        </h4>
                        <ul className="space-y-3">
                            {sectors.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#03C9A9] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-['Poppins'] font-semibold text-white text-lg mb-6">
                            Contact
                        </h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p>
                                <span className="block text-[#03C9A9] font-medium">Email</span>
                                <a href="mailto:contact@darkbusinesshitech.com" className="hover:text-white transition-colors">
                                    contact@darkbusinesshitech.com
                                </a>
                            </p>
                            <p>
                                <span className="block text-[#03C9A9] font-medium">Téléphone</span>
                                <a href="tel:+243000000000" className="hover:text-white transition-colors">
                                    +243 000 000 000
                                </a>
                            </p>
                            <p>
                                <span className="block text-[#03C9A9] font-medium">Adresse</span>
                                Gombe, Av. de la Justice<br />
                                (Réf. Petit Pont), Kinshasa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#03C9A9]/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>
                            © {new Date().getFullYear()} Dark Business Hi-Tech. Tous droits réservés.
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#03C9A9] animate-pulse" />
                            Powered by AI – Dark Business Hi-Tech
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
