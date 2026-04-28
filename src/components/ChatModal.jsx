import React, { useState, useEffect, useRef } from 'react';
import { X, Send, UserPlus, Search, Edit3, CheckSquare, BookOpen, CheckCircle2, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import botImg from '../assets/bot.png';
import botBgImg from '../assets/bot-bg.png';
import { classifyIntent } from '../lib/gemini';

const INITIAL_MESSAGES = [
  {
    id: 1,
    type: 'bot',
    isWelcome: true,
    content: "Hi there! 👋\n\nI'm Saathi, your election assistant. How can I help you today?",
  }
];

export const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleRoute = (intentOrPath) => {
    const routeMap = {
      'REGISTER_VOTER': '/register',
      'CHECK_NAME': '/check',
      'UPDATE_DETAILS': '/update',
      'VOTING_PROCESS': '/vote-process',
      'LEARN_ELECTIONS': '/learn',
      // Direct paths for quick actions
      '/register': '/register',
      '/check': '/check',
      '/update': '/update',
      '/vote-process': '/vote-process',
      '/learn': '/learn',
    };

    const targetRoute = routeMap[intentOrPath] || null;
    
    if (targetRoute) {
      onClose();
      navigate(targetRoute);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setHasInteracted(true);
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await classifyIntent(userMessage);
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: response.message,
        intent: response.intent,
        suggestions: response.suggestions
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: "Sorry, I'm having trouble connecting right now. Please try again or use the popular topics above.",
        intent: "ERROR",
        suggestions: ["Register as a voter", "Check voter list", "How to vote"]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/40 backdrop-blur-sm sm:p-4 transition-opacity">
      <div 
        className="w-full max-w-[420px] bg-[#F4F6FF] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col h-[85vh] sm:h-[80vh] overflow-hidden animate-slide-up"
      >
        {/* Header */}
        <div className="bg-white px-5 py-4 rounded-t-3xl sm:rounded-t-3xl relative z-10 flex items-center justify-between shadow-sm">
          {/* Top pill for mobile dragging hint */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-200 rounded-full sm:hidden"></div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center p-1.5 border-2 border-indigo-50">
                <img src={botImg} alt="Saathi Avatar" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-[17px] leading-tight flex items-center gap-1.5">
                Saathi Assistant 
                <CheckCircle2 size={14} className="text-blue-500" />
              </h2>
              <p className="text-slate-500 text-[12px] mt-0.5">Your smart guide for elections</p>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium mt-1">
                <ShieldCheck size={12} /> Trusted • Secure • Always Here
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            {hasInteracted && (
              <button 
                onClick={() => {
                  setMessages(INITIAL_MESSAGES);
                  setHasInteracted(false);
                }}
                className="p-2 bg-slate-50 text-slate-500 rounded-full hover:bg-slate-100 hover:text-slate-700 transition-colors border border-slate-100 flex items-center gap-1 px-3"
                aria-label="Back to topics"
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
                <span className="text-[12px] font-bold">Back</span>
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-2 -mr-2 bg-slate-50 text-slate-400 rounded-full hover:bg-slate-100 hover:text-slate-600 transition-colors border border-slate-100"
              aria-label="Close Assistant"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#F4F6FF] p-5 pb-8 relative">
          <div className="flex flex-col gap-4">
            {/* Special Welcome State with Image Background containing the Input Box */}
            {!hasInteracted && (
              <div className="w-full relative mb-4 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden bg-white min-h-[340px]">
                 <img src={botBgImg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none block" />
                 
                 {/* Top Left Text area overlaid on image bubble */}
                 <div className="absolute top-0 left-0 w-[55%] h-[55%] z-10 p-5 flex flex-col justify-center">
                    <p className="text-[14.5px] text-slate-700 leading-snug whitespace-pre-wrap font-medium">{INITIAL_MESSAGES[0].content}</p>
                 </div>
                 
                 {/* Bottom Input Area overlaid exactly on the bottom white box of the image */}
                 <div className="absolute bottom-0 left-0 w-full h-[45%] z-10 p-4 flex flex-col justify-end">
                    <div className="relative flex items-center bg-slate-50/80 backdrop-blur-sm rounded-full border border-slate-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white transition-all shadow-sm">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your question here..."
                        className="w-full bg-transparent border-none py-3.5 pl-5 pr-14 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none rounded-full"
                        disabled={isLoading}
                      />
                      <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-1.5 p-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 transition-colors shadow-sm"
                        aria-label="Send message"
                      >
                        <Send size={16} className={input.trim() ? "translate-x-[-1px] translate-y-[1px]" : ""} />
                      </button>
                    </div>
                    
                    {/* Quick chips positioned just below the input field inside the white image box */}
                    <div className="flex items-center gap-2 mt-3 px-1 overflow-x-auto pb-1 no-scrollbar">
                      <span className="flex-shrink-0 px-3 py-1.5 border border-slate-200/60 rounded-full text-[11px] font-medium text-slate-600 bg-white shadow-sm">Election date</span>
                      <span className="flex-shrink-0 px-3 py-1.5 border border-slate-200/60 rounded-full text-[11px] font-medium text-slate-600 bg-white shadow-sm">ID documents</span>
                      <span className="flex-shrink-0 px-3 py-1.5 border border-slate-200/60 rounded-full text-[11px] font-medium text-slate-600 bg-white shadow-sm">Polling station</span>
                      <span className="flex-shrink-0 px-3 py-1.5 border border-slate-200/60 rounded-full text-[11px] font-medium text-slate-600 bg-white shadow-sm">EVM</span>
                    </div>
                 </div>
              </div>
            )}

            {/* Normal Chat History (rendered only after interaction starts) */}
            {hasInteracted && messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Normal Messages */}
                <div 
                  className={`max-w-[85%] rounded-[20px] px-4 py-3 text-[14.5px] leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-sm' 
                      : 'bg-white text-slate-700 rounded-bl-sm border border-slate-100'
                  }`}
                >
                  {msg.content}
                </div>

                {/* Bot Suggestions rendering */}
                {msg.type === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                   <div className="flex flex-col gap-2 mt-3 w-full pl-2">
                     {msg.suggestions.map((suggestion, idx) => (
                       <button
                         key={idx}
                         onClick={() => {
                           const route = msg.intent !== "UNKNOWN" && msg.intent !== "ERROR" ? msg.intent : suggestion;
                           handleRoute(route);
                         }}
                         className="self-start text-left bg-white text-indigo-600 text-[13.5px] font-medium px-4 py-2.5 rounded-full border border-indigo-100 shadow-sm hover:bg-indigo-50 transition-colors flex items-center justify-between min-w-[200px]"
                       >
                         {suggestion}
                         <ChevronRight size={14} className="text-indigo-400 opacity-60" />
                       </button>
                     ))}
                   </div>
                )}
              </div>
            ))}

            {/* Popular Topics Grid */}
            {!hasInteracted && (
              <div className="mt-1 animate-fade-in">
                <h3 className="text-[13px] font-bold text-slate-800 mb-3 ml-1">Popular topics</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <TopicCard icon={UserPlus} title="How do I register as a voter?" color="text-emerald-500" bg="bg-emerald-50" onClick={() => handleRoute('/register')} />
                  <TopicCard icon={Search} title="Check my name in voter list" color="text-blue-500" bg="bg-blue-50" onClick={() => handleRoute('/check')} />
                  <TopicCard icon={Edit3} title="Update or correct my details" color="text-orange-500" bg="bg-orange-50" onClick={() => handleRoute('/update')} />
                  <TopicCard icon={CheckSquare} title="How do I vote? (Voting process)" color="text-indigo-500" bg="bg-indigo-50" onClick={() => handleRoute('/vote-process')} />
                </div>
                <button 
                  onClick={() => handleRoute('/learn')}
                  className="w-full mt-2.5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                   <div className="flex items-center gap-3">
                     <div className="p-2 rounded-full bg-red-50 text-red-500"><BookOpen size={18} /></div>
                     <span className="font-semibold text-[13px] text-slate-800">I want to understand elections</span>
                   </div>
                   <ChevronRight size={16} className="text-slate-400" />
                </button>
              </div>
            )}

            {isLoading && (
              <div className="flex items-start">
                <div className="bg-white rounded-[20px] rounded-bl-sm px-4 py-3 border border-slate-100 shadow-sm">
                  <div className="flex gap-1.5 items-center h-5">
                    <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area when interacting (Moves out of the banner) */}
        {hasInteracted && (
          <div className="bg-white p-4 border-t border-slate-100/50 pb-6 sm:pb-4 rounded-b-3xl">
            <div className="relative flex items-center bg-slate-50 rounded-full border border-slate-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:bg-white transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your question here..."
                className="w-full bg-transparent border-none py-3.5 pl-5 pr-14 text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none rounded-full"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 p-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 transition-colors shadow-sm"
                aria-label="Send message"
              >
                <Send size={16} className={input.trim() ? "translate-x-[-1px] translate-y-[1px]" : ""} />
              </button>
            </div>
          </div>
        )}

        {/* Footer inside modal - Always visible */}
        <div className="bg-white py-3 border-t border-slate-50 rounded-b-3xl mt-auto">
          <div className="flex items-center justify-center gap-1.5 opacity-60">
             <div className="w-4 h-4 flex items-center justify-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem of India" className="w-full h-full object-contain" onError={(e) => e.target.style.display='none'} />
             </div>
             <span className="text-[10px] font-medium text-slate-500">An initiative of Election Commission of India</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// Subcomponent for the 2x2 grid of popular topics
const TopicCard = ({ icon: Icon, title, color, bg, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 items-start hover:bg-slate-50 transition-colors text-left"
  >
    <div className={`p-2 rounded-full ${bg} ${color}`}>
      <Icon size={18} />
    </div>
    <div className="flex w-full items-center justify-between">
      <span className="font-semibold text-[12px] leading-tight text-slate-800 pr-2">{title}</span>
      <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
    </div>
  </button>
);

// We need ChevronRight locally for the modal as well, so import it up top if not already. 
// Adding it here since it was missing from the import list in the previous snippet
