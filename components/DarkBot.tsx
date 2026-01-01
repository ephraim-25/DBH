"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsRobot, BsSend, BsX, BsMic, BsGlobe } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const greetings: Record<string, string> = {
    fr: "Bonjour ! Je suis DarkBot, l'assistant virtuel de Dark Business Hi-Tech. Comment puis-je vous aider aujourd'hui ?",
    ln: "Mbote ! Nazali DarkBot, mosungi ya Dark Business Hi-Tech. Nakoki kosalisa yo ndenge nini lelo ?",
    sw: "Jambo! Mimi ni DarkBot, msaidizi wa Dark Business Hi-Tech. Nawezaje kukusaidia leo?",
    ts: "Moyo! Meme ndi DarkBot, wa ku Dark Business Hi-Tech. Ndi nga ku ku thusa bya njani lelo?",
};

const quickReplies = [
    { text: "Découvrir nos solutions", action: "solutions" },
    { text: "Devenir partenaire", action: "partner" },
    { text: "Rejoindre DBH Academy", action: "academy" },
    { text: "Contacter l'équipe", action: "contact" },
];

const botResponses: Record<string, string> = {
    solutions: "Dark Business Hi-Tech propose des solutions innovantes en IA, AgriTech, Énergie, et Éducation. Nos projets phares incluent AgriConnectDRC, DBH Academy, E-Classroom, SOMA, et Masolo. Souhaitez-vous en savoir plus sur un projet spécifique ?",
    partner: "Excellent choix ! DBH collabore avec des institutions, des entreprises privées et des universités. Vous pouvez nous contacter à contact@darkbusinesshitech.com ou visiter notre page Partenariats pour découvrir les opportunités de collaboration.",
    academy: "DBH Academy forme la nouvelle génération de talents en IA et technologies. Nous avons déjà formé plus de 200 jeunes ! Visitez notre page Secteurs pour en savoir plus sur nos programmes de formation.",
    contact: "Vous pouvez nous joindre par email à contact@darkbusinesshitech.com, par téléphone au +243 000 000 000, ou visiter notre bureau à Gombe, Avenue de la Justice, Kinshasa. Préférez-vous que je vous mette en contact directement ?",
    default: "Je vous remercie pour votre message. Pour une assistance personnalisée, je vous invite à contacter notre équipe à contact@darkbusinesshitech.com. Y a-t-il autre chose que je puisse faire pour vous ?",
};

export default function DarkBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [language, setLanguage] = useState<"fr" | "ln" | "sw" | "ts">("fr");
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Listen for external open events
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("openDarkBot", handleOpen);
        return () => window.removeEventListener("openDarkBot", handleOpen);
    }, []);

    // Initialize greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([
                    {
                        id: "greeting",
                        text: greetings[language],
                        sender: "bot",
                        timestamp: new Date(),
                    },
                ]);
                setIsTyping(false);
            }, 800);
        }
    }, [isOpen, messages.length, language]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = (text?: string) => {
        const messageText = text || inputValue.trim();
        if (!messageText) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        // Simulate bot response
        setIsTyping(true);
        setTimeout(() => {
            const responseKey = Object.keys(botResponses).find((key) =>
                messageText.toLowerCase().includes(key)
            );
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponses[responseKey || "default"],
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const handleQuickReply = (action: string) => {
        const reply = quickReplies.find((r) => r.action === action);
        if (reply) {
            handleSend(reply.text);
        }
    };

    const changeLanguage = (lang: "fr" | "ln" | "sw" | "ts") => {
        setLanguage(lang);
        setShowLanguageMenu(false);
        setMessages([
            {
                id: "greeting-new",
                text: greetings[lang],
                sender: "bot",
                timestamp: new Date(),
            },
        ]);
    };

    return (
        <>
            {/* Chat Bubble Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10] shadow-[0_0_30px_rgba(3,201,169,0.4)] flex items-center justify-center z-50 hover:shadow-[0_0_40px_rgba(3,201,169,0.6)] transition-shadow group"
                        aria-label="Ouvrir DarkBot"
                    >
                        <BsRobot className="text-3xl group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <HiSparkles className="text-[#03C9A9] text-xs" />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-[#0B0C10] rounded-2xl shadow-2xl border border-[#03C9A9]/20 flex flex-col overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0F2540] to-[#0B0C10] p-4 flex items-center justify-between border-b border-[#03C9A9]/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] flex items-center justify-center">
                                    <BsRobot className="text-[#0B0C10] text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-['Poppins'] font-semibold text-white">DarkBot</h3>
                                    <p className="text-xs text-[#03C9A9] flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#03C9A9] animate-pulse" />
                                        En ligne
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Language Selector */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                                        className="p-2 text-gray-400 hover:text-[#03C9A9] transition-colors"
                                        aria-label="Changer de langue"
                                    >
                                        <BsGlobe className="text-lg" />
                                    </button>
                                    {showLanguageMenu && (
                                        <div className="absolute right-0 top-full mt-2 bg-[#0F2540] rounded-lg shadow-lg border border-[#03C9A9]/20 overflow-hidden min-w-[120px]">
                                            {[
                                                { code: "fr", label: "Français" },
                                                { code: "ln", label: "Lingala" },
                                                { code: "sw", label: "Swahili" },
                                                { code: "ts", label: "Tshiluba" },
                                            ].map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => changeLanguage(lang.code as "fr" | "ln" | "sw" | "ts")}
                                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-[#03C9A9]/10 transition-colors ${language === lang.code ? "text-[#03C9A9]" : "text-gray-300"
                                                        }`}
                                                >
                                                    {lang.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                    aria-label="Fermer"
                                >
                                    <BsX className="text-2xl" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${message.sender === "user"
                                                ? "bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10] rounded-br-sm"
                                                : "bg-[#0F2540] text-gray-200 rounded-bl-sm"
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[#0F2540] px-4 py-3 rounded-2xl rounded-bl-sm">
                                        <div className="flex gap-1.5">
                                            <span className="w-2 h-2 bg-[#03C9A9] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-[#03C9A9] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-[#03C9A9] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        {messages.length <= 1 && !isTyping && (
                            <div className="px-4 pb-2">
                                <div className="flex flex-wrap gap-2">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply.action}
                                            onClick={() => handleQuickReply(reply.action)}
                                            className="px-3 py-1.5 text-xs bg-[#0F2540] text-[#03C9A9] rounded-full border border-[#03C9A9]/20 hover:bg-[#03C9A9]/10 transition-colors"
                                        >
                                            {reply.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-[#03C9A9]/10">
                            <div className="flex items-center gap-2 bg-[#0F2540] rounded-full px-4 py-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Écrivez votre message..."
                                    className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
                                />
                                <button
                                    className="p-2 text-gray-400 hover:text-[#03C9A9] transition-colors"
                                    aria-label="Microphone"
                                >
                                    <BsMic className="text-lg" />
                                </button>
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!inputValue.trim()}
                                    className="p-2 text-[#03C9A9] hover:text-[#04E7C4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Envoyer"
                                >
                                    <BsSend className="text-lg" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
