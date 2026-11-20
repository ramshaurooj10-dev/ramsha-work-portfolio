import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
  const [bottomOffset, setBottomOffset] = useState(24);
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

  // Dynamically lift the floating pill above the footer so it never overlaps footer text or links
  useEffect(() => {
    const updatePosition = () => {
      const footer = document.getElementById('site-footer');
      if (!footer) {
        setBottomOffset(24);
        return;
      }
      const rect = footer.getBoundingClientRect();
      const visibleFooterHeight = Math.max(0, window.innerHeight - rect.top);
      setBottomOffset(24 + visibleFooterHeight);
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

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
    }, 350);
  };

  const generateBotResponse = (query: string): {
    text: string;
    actionButtons?: ChatMessage['actionButtons'];
    showLeadCta?: boolean;
  } => {
    const q = query.toLowerCase();

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

    if (q.includes("voice-over services") || q.includes("voice over") || q.includes("vo services") || q.includes("voice services")) {
      return {
        text: "Ramsha offers pristine studio voice-over in Urdu, English, and American English accent. Her voice services cover commercial advertisements, corporate e-learning, documentary narration, IVR telephone systems, character voices, and educational content.",
        actionButtons: [
          { label: "Listen to Voice Samples", actionType: "navigate", target: "portfolio", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("american english") || q.includes("american accent") || q.includes("american")) {
      return {
        text: "Yes! Ramsha provides fluent English voice-over in a natural American English accent. You can listen to her American English documentary narration sample in the Voice Portfolio.",
        actionButtons: [
          { label: "Listen to American Accent Demo", actionType: "navigate", target: "portfolio", icon: "volume" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("dubbing") || q.includes("sync dubbing") || q.includes("lip sync")) {
      return {
        text: "Yes. Ramsha personally performs dubbing and can also coordinate professional multi-character and multilingual dubbing through her team. Her services include synchronized/lip-sync dubbing, movie/film dubbing, animation dubbing, and voice matching.",
        actionButtons: [
          { label: "Explore Dubbing Work", actionType: "navigate", target: "services", icon: "layers" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("multilingual") || q.includes("team") || q.includes("multiple languages") || q.includes("languages")) {
      return {
        text: "Ramsha leads a professional dubbing team capable of producing audio and video projects requiring multiple characters, accents, and languages while maintaining strict quality control.",
        actionButtons: [
          { label: "View Team Production Details", actionType: "navigate", target: "services", icon: "layers" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("ai content") || q.includes("ai video") || q.includes("ai creation") || q.includes("ai movies")) {
      return {
        text: "Ramsha has 3+ years of AI content creation experience. Her work includes UGC, brand advertisements, 3D product animation, claymation commercials, cartoons, children's content, nursery rhymes, ASMR, food/viral content, AI influencer videos, 2D animation and more.",
        actionButtons: [
          { label: "Explore AI Portfolio", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("ugc") || q.includes("ads") || q.includes("advertisement") || q.includes("brand")) {
      return {
        text: "Yes. Ramsha creates AI-powered UGC-style and branded content for products, beauty brands, automotive commercials, and social media ad reels designed for high conversion.",
        actionButtons: [
          { label: "View UGC & Ads Work", actionType: "navigate", target: "ai-portfolio", icon: "megaphone" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("kids") || q.includes("children") || q.includes("preschool") || q.includes("nursery") || q.includes("education") || q.includes("ece")) {
      return {
        text: "Yes! Ramsha has a background in Early Childhood Education (ECE) and creates children's and preschool content including nursery rhymes, educational stories, cartoons, learning videos, and character-based content in Urdu and English.",
        actionButtons: [
          { label: "View Kids & Education Work", actionType: "navigate", target: "kids-education", icon: "smile" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("voice-over samples") || q.includes("voice samples") || q.includes("listen") || q.includes("audio samples")) {
      return {
        text: "You can listen to Ramsha's official studio samples directly in the Voice Portfolio, including United Nations Urdu VO, American English Documentary, Urdu Explainer, and Commercial spots.",
        actionButtons: [
          { label: "View Voice Portfolio", actionType: "navigate", target: "portfolio", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("ai samples") || q.includes("ai video samples") || q.includes("ai portfolio")) {
      return {
        text: "Ramsha's AI Video Portfolio includes dozens of categorized video projects covering UGC, 3D Product Animations, Claymation Commercials, Children's Animation, ASMR, and Food Ads.",
        actionButtons: [
          { label: "Browse Full AI Portfolio", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("who has she worked with") || q.includes("clients") || q.includes("un") || q.includes("unicef") || q.includes("experience") || q.includes("international")) {
      return {
        text: "Her voice-over and project experience includes work associated with organizations and clients such as the United Nations, UNICEF, Ministry of Defence Pakistan, Sunjok Organization Bangladesh, Voice of Australians Australia, Magna Vox UK, Big Mouth New Zealand, R&M Riyadh Saudi Arabia, MMG Global Vietnam and Pakistani government projects.",
        actionButtons: [
          { label: "View Trusted Across Borders", actionType: "navigate", target: "experience", icon: "external" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("studio") || q.includes("recording") || q.includes("mic") || q.includes("quality") || q.includes("hardware")) {
      return {
        text: "Ramsha records in a professional, acoustically treated studio setup equipped with high-grade condenser microphones, pop filters, and 24-bit 48kHz audio chains to deliver broadcast-ready audio files.",
        actionButtons: [
          { label: "View Studio Details", actionType: "navigate", target: "services", icon: "mic" }
        ],
        showLeadCta: true
      };
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("linkedin")) {
      return {
        text: `You can contact Ramsha directly by email at ${PERSONAL_INFO.email} or connect with her professionally on LinkedIn.`,
        actionButtons: [
          { label: "Email Ramsha", actionType: "email", target: PERSONAL_INFO.email, icon: "mail" },
          { label: "LinkedIn Profile", actionType: "link", target: PERSONAL_INFO.linkedin, icon: "linkedin" }
        ],
        showLeadCta: false
      };
    }

    if (q.includes("3d") || q.includes("animation") || q.includes("asmr") || q.includes("movie") || q.includes("cinematic")) {
      return {
        text: "Ramsha creates 3D product animations, claymation commercials, ASMR audio-visual tracks, and 2D animations.",
        actionButtons: [
          { label: "View AI Portfolio", actionType: "navigate", target: "ai-portfolio", icon: "sparkles" }
        ],
        showLeadCta: true
      };
    }

    return {
      text: "I don't have that exact detail in Ramsha's portfolio yet. You can contact her directly to ask about your specific project requirements!",
      actionButtons: [
        { label: "Email Ramsha Directly", actionType: "email", target: PERSONAL_INFO.email, icon: "mail" },
        { label: "Connect on LinkedIn", actionType: "link", target: PERSONAL_INFO.linkedin, icon: "linkedin" }
      ],
      showLeadCta: true
    };
  };

  const handleActionButtonClick = (btn: { actionType: string; target: string }) => {
    if (btn.actionType === 'navigate') {
      onNavigateToSection(btn.target);
    } else if (btn.actionType === 'email') {
      window.location.href = `mailto:${btn.target}`;
    } else if (btn.actionType === 'link') {
      window.open(btn.target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Floating Chat Trigger — Dynamically lifts above footer so it never overlaps */}
      {!isOpen && (
        <div
          className="fixed right-5 z-40 transition-[bottom] duration-150 ease-out"
          style={{ bottom: `${bottomOffset}px` }}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-[#161616] hover:bg-[#1E1E1E] text-[#FFFFFF] shadow-2xl shadow-black/70 border border-[#D4AF37]/60 hover:border-[#D4AF37] transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
            title="Open Ramsha's Portfolio Assistant"
          >
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
            </div>

            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-xs font-bold leading-tight text-[#FFFFFF]">Portfolio Assistant</span>
              <span className="text-[11px] text-[#D4AF37] font-semibold">Ask & explore</span>
            </div>
          </button>
        </div>
      )}

      {/* Floating Chat Box Panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] max-h-[82vh] h-[560px] rounded-2xl bg-[#161616] border border-[#D4AF37]/45 shadow-2xl shadow-black/80 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="p-4 bg-[#111111] border-b border-[#2A2A2A] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-[#111111] flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#FFFFFF] tracking-wide">
                  Ramsha's Portfolio Assistant
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">
                  Ask about services, experience or samples
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors border border-[#333333] cursor-pointer"
              title="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#121212]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#D4AF37] text-[#111111] font-semibold rounded-br-sm'
                      : 'bg-[#1B1B1B] border border-[#2E2E2E] text-[#F0F0F0] rounded-bl-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#2E2E2E] flex flex-col space-y-1.5">
                      {msg.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionButtonClick(btn)}
                          className="w-full px-3 py-2 rounded-xl bg-[#222222] hover:bg-[#2C2C2C] border border-[#D4AF37]/35 text-[#F5F5F5] text-xs font-semibold transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span>{btn.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.showLeadCta && (
                    <div className="mt-3 pt-2.5 border-t border-[#2E2E2E]">
                      <p className="text-xs font-semibold text-[#D4AF37] mb-2">
                        Would you like to discuss a project with Ramsha?
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => (window.location.href = `mailto:${PERSONAL_INFO.email}`)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#D4AF37] text-[#111111] hover:bg-[#C9A227] text-[11px] font-extrabold transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          <Mail className="w-3 h-3 text-[#111111]" />
                          <span>Email Ramsha</span>
                        </button>
                        <button
                          onClick={() => window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer')}
                          className="px-2.5 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2E2E2E] border border-[#3A3A3A] text-[#F5F5F5] text-[11px] font-bold transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          <Linkedin className="w-3 h-3 text-[#D4AF37]" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => onNavigateToSection('portfolio')}
                          className="px-2.5 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2E2E2E] border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-[#9A9A9A] font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Questions Bar */}
          <div className="p-2.5 bg-[#161616] border-t border-[#2A2A2A] overflow-x-auto scrollbar-none flex space-x-2">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider shrink-0 self-center pl-1 font-mono">
              Quick:
            </span>
            {QUICK_QUESTIONS.map((qText, idx) => (
              <button
                key={idx}
                onClick={() => handleSendQuery(qText)}
                className="px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#2B2B2B] border border-[#333333] hover:border-[#D4AF37]/50 text-[#F0F0F0] text-xs whitespace-nowrap transition-colors shrink-0 font-medium cursor-pointer"
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
            className="p-3 bg-[#111111] border-t border-[#2A2A2A] flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#333333] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="p-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] disabled:opacity-40 text-[#111111] transition-colors cursor-pointer"
              title="Send question"
            >
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
