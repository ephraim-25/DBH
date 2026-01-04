import { useState, useEffect, useRef } from "react";
import { botKnowledge, defaultResponse, Intent } from "../data/bot-knowledge";

export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
    relatedActions?: { text: string; action: string }[];
}

export function useDarkBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // Load history on mount
    useEffect(() => {
        const saved = localStorage.getItem("darkbot_history");
        if (saved) {
            try {
                // Rehydrate dates
                const parsed = JSON.parse(saved).map((m: any) => ({
                    ...m,
                    timestamp: new Date(m.timestamp)
                }));
                setMessages(parsed);
            } catch (e) {
                console.error("Failed to load chat history", e);
            }
        }
    }, []);

    // Save history on change
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("darkbot_history", JSON.stringify(messages.slice(-20))); // Keep last 20
        }
    }, [messages]);

    const calculateScore = (text: string, intent: Intent): number => {
        const lowerText = text.toLowerCase();
        let score = 0;

        // Exact match boost
        if (intent.keywords.some(k => lowerText === k)) return 100;

        intent.keywords.forEach(keyword => {
            if (lowerText.includes(keyword)) {
                score += keyword.length * 2; // Longer keywords weigh more
            }
        });

        // Priority boost
        if (intent.priority) score += intent.priority * 5;

        return score;
    };

    const processMessage = async (text: string) => {
        // User message
        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Artificial delay for "thinking"
        setTimeout(() => {
            // Find best intent
            let bestIntent: Intent | null = null;
            let maxScore = 0;

            const currentContext = {
                path: window.location.pathname
            };

            botKnowledge.forEach((intent: Intent) => {
                const score = calculateScore(text, intent);
                if (score > maxScore) {
                    maxScore = score;
                    bestIntent = intent;
                }
            });

            const botResponseText = (maxScore > 5 && bestIntent)
                ? bestIntent.response(currentContext)
                : defaultResponse;

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: "bot",
                timestamp: new Date(),
                relatedActions: bestIntent ? bestIntent.relatedActions : undefined
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000 + Math.random() * 500);
    };

    const clearHistory = () => {
        setMessages([]);
        localStorage.removeItem("darkbot_history");
    };

    return {
        isOpen,
        setIsOpen,
        messages,
        inputValue,
        setInputValue,
        isTyping,
        processMessage,
        clearHistory
    };
}
