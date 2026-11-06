import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, ArrowRight, ExternalLink, Mail, Linkedin, Volume2, Film, Mic, Megaphone, Smile, Layers } from 'lucide-react';

interface PortfolioAssistantProps {
  onNavigateToSection: (sectionId: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionButtons?: {
    label: string;
    actionType: 'navigate' | 'email' | 'link';
    target: string;
    icon?: string;
  }[];
  showLeadCta?: boolean;
}

const QUICK_QUESTIONS = [
  "What voice-over services does Ramsha offer?",
  "Can Ramsha do American English?",
  "Does she provide dubbing?",
  "Can she handle multilingual projects?",
  "What AI content does she create?",
  "Can she create UGC ads?",
  "Does she create kids' content?",
  "Can I see voice-over samples?",
  "Can I see AI content samples?",
  "How can I contact Ramsha?"
];

export const PortfolioAssistant: React.FC<PortfolioAssistantProps> = ({ onNavigateToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hi! I'm Ramsha's Portfolio Assistant. I can help you explore her voice-over, dubbing and AI content work.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsgId = Date.now().toString();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: queryText,
        timestamp: timeStr
      }
    ];

    setMessages(newMessages);
    setInputQuery('');

    // Generate response after small delay
    setTimeout(() => {
      const responseObj = generateBotResponse(queryText);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: responseObj.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionButtons: responseObj.actionButtons,
          showLeadCta: responseObj.showLeadCta
        }
      ]);
    }, 400);
  };

  const generateBotResponse = (query: string): {
    text: string;
    actionButtons?: ChatMessage['actionButtons'];
    showLeadCta?: boolean;
  } => {
    const q = query.toLowerCase();

    // 1. What does Ramsha do / Services / Intro
    if (q.includes("what does ramsha do") || q.includes("services") || q.includes("overview") || q.includes("about ramsha")) {
      return {
        text: "Ramsha Shaikh is a professional Voice Over Artist, Dubbing Artist and AI Content Creator. She has 8+ years of voice-over experience and 3+ years of AI content creation experience. She works in Urdu, English and American English accent and can also coordinate multilingual dubbing projects through her professional team.",
        actionButtons: [
          { label: "Listen to Voice Portfolio", actionType: "navigate", target: "portfolio", icon: "mic" },
          { label: "Explore AI Portfolio", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    // 2. Voice-over services
    if (q.includes("voice-over services") || q.includes("voice over") || q.includes("vo services") || q.includes("voice services")) {
      return {
        text: "Ramsha offers pristine studio voice-over in Urdu, English, and American English accent. Her voice services cover commercial advertisements, corporate e-learning, documentary narration, IVR telephone systems, character voices, and educational content.",
        actionButtons: [
          { label: "Listen to Voice Samples →", actionType: "navigate", target: "portfolio", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    // 3. American English Accent
    if (q.includes("american english") || q.includes("american accent") || q.includes("american")) {
      return {
        text: "Yes! Ramsha provides fluent English voice-over in a natural American English accent. You can listen to her American English documentary narration sample in the Voice Portfolio.",
        actionButtons: [
          { label: "Listen to American Accent Demo →", actionType: "navigate", target: "portfolio", icon: "volume" }
        ],
        showLeadCta: true
      };
    }

    // 4. Dubbing
    if (q.includes("dubbing") || q.includes("sync dubbing") || q.includes("lip sync")) {
      return {
        text: "Yes. Ramsha personally performs dubbing and can also coordinate professional multi-character and multilingual dubbing through her team. Her services include synchronized/lip-sync dubbing, movie/film dubbing, animation dubbing, and voice matching.",
        actionButtons: [
          { label: "Explore Dubbing Work →", actionType: "navigate", target: "services", icon: "layers" }
        ],
        showLeadCta: true
      };
    }

    // 5. Multilingual projects / team
    if (q.includes("multilingual") || q.includes("team") || q.includes("multiple languages") || q.includes("languages")) {
      return {
        text: "Ramsha leads a professional dubbing team capable of producing audio and video projects requiring multiple characters, accents, and languages while maintaining strict quality control.",
        actionButtons: [
          { label: "View Team Production Details →", actionType: "navigate", target: "services", icon: "layers" }
        ],
        showLeadCta: true
      };
    }

    // 6. AI Content
    if (q.includes("ai content") || q.includes("ai video") || q.includes("ai creation") || q.includes("ai movies") || q.includes("ai creation")) {
      return {
        text: "Ramsha has 3+ years of AI content creation experience. Her work includes UGC, brand advertisements, AI movies, Hollywood-style cinematic videos, 3D product animation, cartoons, children's content, nursery rhymes, ASMR, food/viral content, AI influencer videos, 2D animation and more.",
        actionButtons: [
          { label: "Explore AI Portfolio →", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    // 7. UGC & Ads
    if (q.includes("ugc") || q.includes("ads") || q.includes("advertisement") || q.includes("brand")) {
      return {
        text: "Yes. Ramsha creates AI-powered UGC-style and branded content for products, beauty brands, automotive commercials, and social media ad reels designed for high conversion.",
        actionButtons: [
          { label: "View UGC & Ads Work →", actionType: "navigate", target: "brand-ugc", icon: "megaphone" }
        ],
        showLeadCta: true
      };
    }

    // 8. Kids & Educational Content
    if (q.includes("kids") || q.includes("children") || q.includes("preschool") || q.includes("nursery") || q.includes("education") || q.includes("ece")) {
      return {
        text: "Yes! Ramsha has a background in Early Childhood Education (ECE) and creates children's and preschool content including nursery rhymes, educational stories, cartoons, learning videos, and character-based content in Urdu and English.",
        actionButtons: [
          { label: "View Kids & Education Work →", actionType: "navigate", target: "kids-education", icon: "smile" }
        ],
        showLeadCta: true
      };
    }

    // 9. Voice samples / Voice Portfolio
    if (q.includes("voice-over samples") || q.includes("voice samples") || q.includes("listen") || q.includes("audio samples")) {
      return {
        text: "You can listen to Ramsha's official studio samples directly in the Voice Portfolio, including United Nations Urdu VO, American English Documentary, Urdu Explainer, and Commercial spots.",
        actionButtons: [
          { label: "View Voice Portfolio →", actionType: "navigate", target: "portfolio", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    // 10. AI Content samples
    if (q.includes("ai samples") || q.includes("ai video samples") || q.includes("ai portfolio")) {
      return {
        text: "Ramsha's AI Video Portfolio includes over 28 categorized video projects covering UGC, 3D Product Animations, AI Movies, Children's Animation, ASMR, and Food Reviews.",
        actionButtons: [
          { label: "Browse Full AI Portfolio →", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    // 11. International Experience / Clients
    if (q.includes("who has she worked with") || q.includes("clients") || q.includes("un") || q.includes("unicef") || q.includes("experience") || q.includes("international")) {
      return {
        text: "Her voice-over and project experience includes work associated with organizations and clients such as the United Nations, UNICEF, Ministry of Defence Pakistan, Sunjok Organization Bangladesh, Voice of Australians Australia, Magna Vox UK, Big Mouth New Zealand, R&M Riyadh Saudi Arabia, MMG Global Vietnam and Pakistani government projects.",
        actionButtons: [
          { label: "View Trusted Across Borders →", actionType: "navigate", target: "international", icon: "external" }
        ],
        showLeadCta: true
      };
    }

    // 12. Studio & Equipment
    if (q.includes("studio") || q.includes("recording") || q.includes("mic") || q.includes("quality") || q.includes("hardware")) {
      return {
        text: "Ramsha records in a professional, acoustically treated studio setup equipped with high-grade condenser microphones, pop filters, and 24-bit 96kHz audio interfaces to deliver broadcast-ready audio files.",
        actionButtons: [
          { label: "View Studio Details →", actionType: "navigate", target: "studio", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    // 13. Contact
    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("linkedin")) {
      return {
        text: "You can contact Ramsha directly by email at ramshaurooj10@gmail.com or connect with her professionally on LinkedIn.",
        actionButtons: [
          { label: "Email Ramsha", actionType: "email", target: "ramshaurooj10@gmail.com", icon: "mail" },
          { label: "LinkedIn Profile", actionType: "link", target: "https://www.linkedin.com/in/ramsha-urooj-3400381b2/", icon: "linkedin" }
        ],
        showLeadCta: false
      };
    }

    // 14. 3D Animation / Movies / ASMR specific keywords
    if (q.includes("3d") || q.includes("animation") || q.includes("asmr") || q.includes("movie") || q.includes("cinematic")) {
      return {
        text: "Ramsha creates 3D product animations, cinematic AI movies with atmospheric sound design, ASMR audio-visual tracks, and 2D stick animations.",
        actionButtons: [
          { label: "View AI Portfolio →", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    // Default Fallback (Rule Compliance: never invent info)
    return {
      text: "I don't have that exact detail in Ramsha's portfolio yet. You can contact her directly to ask about your specific project requirements!",
      actionButtons: [
        { label: "Email Ramsha Directly", actionType: "email", target: "ramshaurooj10@gmail.com", icon: "mail" },
        { label: "Connect on LinkedIn", actionType: "link", target: "https://www.linkedin.com/in/ramsha-urooj-3400381b2/", icon: "linkedin" }
      ],
      showLeadCta: true
    };
  };

  const handleActionButtonClick = (btn: { actionType: string; target: string }) => {
    if (btn.actionType === 'navigate') {
      onNavigateToSection(btn.target);
      // On mobile keep panel open or close depending on preference; let's close or keep open
    } else if (btn.actionType === 'email') {
      window.location.href = `mailto:${btn.target}`;
    } else if (btn.actionType === 'link') {
      window.open(btn.target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-2.5 px-4 py-3 rounded-full bg-[#352820] hover:bg-[#271D17] text-white shadow-2xl shadow-[#352820]/40 border border-[#C5A46D]/40 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Open Ramsha's Portfolio Assistant"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A46D] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C5A46D]" />
            </span>

            <div className="p-1.5 rounded-full bg-white/10 border border-[#C5A46D]/30">
              <Bot className="w-5 h-5 text-[#C5A46D]" />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight tracking-wide text-white">Portfolio Assistant</span>
              <span className="text-[10px] text-[#C5A46D] font-medium">Ask questions & explore</span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Box Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[85vh] h-[580px] rounded-3xl bg-white border border-[#E8DED0] shadow-2xl shadow-black/30 flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300">
          
          {/* Header */}
          <div className="p-4 bg-[#352820] border-b border-[#352820] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-2xl bg-white/10 border border-[#C5A46D]/30 text-[#C5A46D]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Ramsha's Portfolio Assistant
                </h3>
                <p className="text-[11px] text-[#C5A46D] font-medium">
                  Ask about my services, experience or portfolio.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors border border-white/10"
              title="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F6F1E8]/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#352820] text-white rounded-br-xs shadow-md'
                      : 'bg-white border border-[#E8DED0] text-[#352820] rounded-bl-xs shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Action Buttons inside Bot message */}
                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#E8DED0] flex flex-col space-y-1.5">
                      {msg.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionButtonClick(btn)}
                          className="w-full px-3 py-2 rounded-xl bg-[#F6F1E8] hover:bg-[#E8DED0] border border-[#E8DED0] text-[#352820] text-[11px] font-semibold transition-all flex items-center justify-between group"
                        >
                          <span>{btn.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Gentle Lead CTA */}
                  {msg.showLeadCta && (
                    <div className="mt-3 pt-2.5 border-t border-[#E8DED0]">
                      <p className="text-[11px] font-semibold text-[#352820] mb-2">
                        Would you like to discuss a project with Ramsha?
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => window.location.href = 'mailto:ramshaurooj10@gmail.com'}
                          className="px-2.5 py-1 rounded-lg bg-[#352820] text-white hover:bg-[#271D17] text-[10px] font-bold transition-colors inline-flex items-center space-x-1"
                        >
                          <Mail className="w-3 h-3 text-[#C5A46D]" />
                          <span>Email Ramsha</span>
                        </button>
                        <button
                          onClick={() => window.open('https://www.linkedin.com/in/ramsha-urooj-3400381b2/', '_blank')}
                          className="px-2.5 py-1 rounded-lg bg-[#F6F1E8] hover:bg-[#E8DED0] border border-[#E8DED0] text-[#352820] text-[10px] font-bold transition-colors inline-flex items-center space-x-1"
                        >
                          <Linkedin className="w-3 h-3 text-[#C5A46D]" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => onNavigateToSection('portfolio')}
                          className="px-2.5 py-1 rounded-lg bg-[#C5A46D] hover:bg-[#b8955c] text-white text-[10px] font-bold transition-colors"
                        >
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-[#352820]/50 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Questions Bar */}
          <div className="p-2.5 bg-[#F6F1E8] border-t border-[#E8DED0] overflow-x-auto scrollbar-none flex space-x-2">
            <span className="text-[10px] font-bold text-[#352820] uppercase tracking-wider flex-shrink-0 self-center pl-1 font-mono">
              Quick Questions:
            </span>
            {QUICK_QUESTIONS.map((qText, idx) => (
              <button
                key={idx}
                onClick={() => handleSendQuery(qText)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#E8DED0] border border-[#E8DED0] text-[#352820] text-[11px] whitespace-nowrap transition-colors flex-shrink-0 font-medium"
              >
                {qText}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputQuery);
            }}
            className="p-3 bg-white border-t border-[#E8DED0] flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] placeholder-[#352820]/40 focus:outline-none focus:border-[#C5A46D]"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="p-2 rounded-xl bg-[#352820] hover:bg-[#271D17] disabled:opacity-40 text-[#C5A46D] transition-colors shadow-sm"
              title="Send question"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
