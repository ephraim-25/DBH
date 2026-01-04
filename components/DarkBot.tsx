"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BsRobot, BsSend, BsX, BsMic, BsTrash } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { useDarkBot } from "../hooks/useDarkBot";
import { useEffect, useRef } from "react";

// Simple message parser for bold text and newlines
const parseMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
        <p key={i} className="mb-1 last:mb-0">
            {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="text-[#03C9A9]">{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </p>
    ));
};

export default function DarkBot() {
    const {
        isOpen,
        setIsOpen,
        messages,
        inputValue,
        setInputValue,
        isTyping,
        processMessage,
        clearHistory
    } = useDarkBot();

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        processMessage(inputValue.trim());
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
                                <button
                                    onClick={clearHistory}
                                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                    title="Effacer la conversation"
                                >
                                    <BsTrash />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <BsX className="text-2xl" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 && (
                                <div className="text-center text-gray-500 text-sm mt-10">
                                    <BsRobot className="text-4xl mx-auto mb-3 opacity-20" />
                                    <p>Posez-moi une question sur<br />Dark Business Hi-Tech !</p>
                                </div>
                            )}

                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${message.sender === "user"
                                                ? "bg-gradient-to-r from-[#03C9A9] to-[#04E7C4] text-[#0B0C10] rounded-br-sm"
                                                : "bg-[#0F2540] text-gray-200 rounded-bl-sm"
                                            }`}
                                    >
                                        {parseMessage(message.text)}
                                    </div>

                                    {/* Related Actions (Quick Replies) */}
                                    {message.relatedActions && (
                                        <div className="flex flex-wrap gap-2 mt-2 max-w-[85%]">
                                            {message.relatedActions.map((action, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => processMessage(action.text)}
                                                    className="px-3 py-1.5 text-xs bg-[#0F2540] text-[#03C9A9] rounded-full border border-[#03C9A9]/20 hover:bg-[#03C9A9]/10 transition-colors"
                                                >
                                                    {action.text}
                                                </button>
                                            ))}
                                        </div>
                                    )}
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

                        {/* Input */}
                        <div className="p-4 border-t border-[#03C9A9]/10">
                            <div className="flex items-center gap-2 bg-[#0F2540] rounded-full px-4 py-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Posez votre question..."
                                    className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
                                />
                                <button
                                    className="p-2 text-gray-400 hover:text-[#03C9A9] transition-colors"
                                >
                                    <BsMic className="text-lg" />
                                </button>
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="p-2 text-[#03C9A9] hover:text-[#04E7C4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
