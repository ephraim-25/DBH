export interface Intent {
    id: string;
    keywords: string[];
    response: (context?: any) => string;
    relatedActions?: { text: string; action: string }[];
    priority?: number; // 0-10, higher overrides lower match scores
}

const companyName = "Dark Business Hi-Tech";

export const botKnowledge: Intent[] = [
    // --- GREETINGS & BASICS ---
    {
        id: "greeting",
        keywords: ["bonjour", "salut", "hello", "hi", "coucou", "holla", "mbote", "jambo"],
        response: () => "Bonjour ! Je suis DarkBot, votre assistant virtuel. Je peux répondre à vos questions sur **Dark Business Hi-Tech**, nos solutions (AgriTech, IA), **DBH Academy**, ou **Wazi Agency**. Comment puis-je vous aider ?",
        relatedActions: [
            { text: "Nos Solutions", action: "solutions" },
            { text: "Formation (Academy)", action: "academy" },
            { text: "Agence Branding", action: "wazi" }
        ],
        priority: 10
    },
    {
        id: "who_are_you",
        keywords: ["qui es tu", "t'es qui", "ton nom", "c'est quoi darkbot", "présente toi"],
        response: () => "Je suis **DarkBot**, une intelligence artificielle conçue pour vous guider dans l'écosystème Dark Business Hi-Tech. Je suis là pour vous informer sur nos services, nos formations et notre vision.",
        priority: 9
    },
    {
        id: "company_overview",
        keywords: ["entreprise", "société", "c'est quoi dbh", "dark business", "mission", "vision", "propos", "faites quoi"],
        response: () => `**${companyName}** est une entreprise technologique panafricaine visionnaire. Nous développons des solutions innovantes dans l'AgriTech, l'Éducation (EdTech), l'Intelligence Artificielle et le Marketing Digital. Notre mission est de propulser l'Afrique vers le futur grâce à la tech.`,
        relatedActions: [
            { text: "Voir les secteurs", action: "solutions" },
            { text: "Contacter l'équipe", action: "contact" }
        ]
    },

    // --- SUBSIDIARIES ---
    {
        id: "academy",
        keywords: ["academy", "école", "formation", "apprendre", "cours", "étudier", "programmation", "code", "développement", "data"],
        response: (context) => {
            if (context?.path?.includes("academy")) {
                return "Vous êtes déjà sur la section **DBH Academy** ! Nous formons l'élite tech de demain. Vous cherchez des infos sur les *inscriptions*, le *programme* ou les *prix* ?";
            }
            return "**DBH Academy** est notre pôle de formation d'élite. Nous offrons des cursus intensifs en :\n- Développement Web & Mobile\n- Data Science & IA\n- Marketing Digital\n\nNos étudiants travaillent sur des projets réels dès le premier jour.";
        },
        relatedActions: [
            { text: "Les Programmes", action: "academy_programs" },
            { text: "S'inscrire", action: "contact" }
        ],
        priority: 8
    },
    {
        id: "wazi",
        keywords: ["wazi", "agence", "marketing", "pub", "logo", "branding", "design", "communication", "visuel"],
        response: () => "**Wazi Agency** est notre agence de branding stratégique. Nous aidons les marques à construire une identité forte et mémorable. \n\nNos services :\n- Identité Visuelle & Logos\n- Stratégie de Marque\n- Design UI/UX\n- Social Media Management",
        relatedActions: [
            { text: "Voir le portfolio", action: "wazi_portfolio" }, // Intention future link
            { text: "Demander un devis", action: "contact" }
        ]
    },
    {
        id: "fayila",
        keywords: ["fayila", "hub", "incubateur", "startup", "accélérateur", "coworking", "bureau"],
        response: () => "**Fayila Digital Hub** est notre incubateur de startups. C'est un espace d'innovation où nous accompagnons les entrepreneurs tech avec du mentorat, des ressources techniques et un accès au financement.",
    },

    // --- SOLUTIONS & PROJECTS ---
    {
        id: "solutions",
        keywords: ["solutions", "projets", "agriconnect", "soma", "e-classroom", "masolo", "produits"],
        response: () => "Nous avons plusieurs produits phares :\n1. **AgriConnectDRC** : Plateforme pour moderniser l'agriculture.\n2. **E-Classroom & SOMA** : Solutions pour la digitalisation de l'éducation.\n3. **Masolo** : Plateforme de communication sécurisée.\n\nLequel vous intéresse ?",
    },

    // --- CONTACT & PRACTICAL ---
    {
        id: "contact",
        keywords: ["contact", "email", "mail", "téléphone", "numéro", "appeler", "joindre", "parler", "humain"],
        response: () => "Vous pouvez nous joindre directement :\n\n📧 Email : contact@darkbusinesshitech.com\n📞 Tél : +243 82 858 43 83\n📍 Adresse : 23, Avenue de la Justice, Commune de la Gombe, Kinshasa.\n\nNotre équipe est disponible du Lundi au Samedi.",
        relatedActions: [
            { text: "Ouvrir WhatsApp", action: "whatsapp" } // Could trigger a link
        ],
        priority: 8
    },
    {
        id: "job",
        keywords: ["recrutement", "embauche", "job", "travail", "stage", "carrière", "postuler"],
        response: () => "Nous sommes toujours à la recherche de talents passionnés ! Envoyez votre CV et portfolio à **jobs@darkbusinesshitech.com**. Précisez le poste visé dans l'objet.",
    },

    // --- FALLBACK / OTHERS ---
    {
        id: "thanks",
        keywords: ["merci", "cimer", "top", "super", "cool", "génial"],
        response: () => "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 🚀",
    },
    {
        id: "bye",
        keywords: ["au revoir", "bye", "a plus", "ciao"],
        response: () => "Au revoir ! À très bientôt chez Dark Business Hi-Tech. 👋",
    }
];

export const defaultResponse = "Je ne suis pas sûr d'avoir bien compris. 🤔 Pouvez-vous reformuler ? Vous pouvez me demander des infos sur l'**Académie**, nos **Services**, ou comment nous **contacter**.";
