import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Bookmark, 
  ChevronRight, 
  Megaphone, 
  FileText, 
  Speech, 
  Fingerprint, 
  BarChart3, 
  Trophy, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  MapPin, 
  IdCard, 
  HelpCircle,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

// Import generated assets
import heroImg from '../assets/hero-understand-elections.png';
import generalImg from '../assets/general-elections.png';
import stateImg from '../assets/state-elections.png';
import localImg from '../assets/local-elections.png';
import evmVotingImg from '../assets/evm-voting.png';
import safetyImg from '../assets/voting-safety.png';
import takeawayImg from '../assets/final-takeaway.png';

export const HowElectionsWorkPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    { icon: Megaphone, title: 'Election dates announced', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: FileText, title: 'Candidates file nominations', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { icon: Speech, title: 'Campaigning happens', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Fingerprint, title: 'Voting day', color: 'text-orange-600', bg: 'bg-orange-50' },
    { icon: BarChart3, title: 'Counting of votes', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Trophy, title: 'Results declared', color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const faqs = [
    {
      question: "Can I vote from anywhere?",
      answer: "No, you must vote at your assigned polling booth. You can find your booth location using the 'Find Polling Booth' feature on the ECI website.",
      icon: MapPin,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50'
    },
    {
      question: "Can I vote without voter ID?",
      answer: "Yes, if your name is in the voter list, you can vote using any other valid ID like Aadhaar, PAN card, Passport, or Driving License.",
      icon: IdCard,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50'
    },
    {
      question: "What if I don’t vote?",
      answer: "You lose your chance to participate in democracy and have a say in who leads your government. Every vote matters for the future of your country.",
      icon: HelpCircle,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50'
    }
  ];

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-[17px] font-bold text-slate-800">Understand Elections</h1>
        <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
          <Bookmark size={20} />
        </button>
      </header>

      <div className="px-5 pt-8 flex flex-col gap-10">
        
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 z-10">
            <h2 className="text-[40px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
              Understand <br/> <span className="text-[#1A237E]">Elections</span>
            </h2>
            <p className="text-[16px] text-slate-500 mt-4 max-w-[280px] leading-relaxed font-medium">
              Learn how elections work in India—simple and clear.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[12px] font-bold border border-blue-100">
              <Shield size={14} />
              ECI Conducted Process
            </div>
          </div>
          <div className="w-full md:w-[45%] aspect-square relative flex items-center justify-center">
            <img 
              src={heroImg} 
              alt="Understand Elections Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        {/* Types of Elections */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[20px] font-bold text-slate-800 tracking-tight">Types of Elections</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* General */}
            <div className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-50/50 p-2 mb-4">
                <img src={generalImg} alt="General Elections" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-[16px] text-slate-800 mb-4">General Elections (Lok Sabha)</h4>
              <ul className="text-left space-y-2.5">
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  Choose Members of Parliament (MPs)
                </li>
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  Decide the central government
                </li>
              </ul>
            </div>

            {/* State */}
            <div className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-50/50 p-2 mb-4">
                <img src={stateImg} alt="State Elections" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-[16px] text-slate-800 mb-4">State Elections (Vidhan Sabha)</h4>
              <ul className="text-left space-y-2.5">
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  Choose Members of Legislative Assembly (MLAs)
                </li>
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  Decide state government
                </li>
              </ul>
            </div>

            {/* Local */}
            <div className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-indigo-50/50 p-2 mb-4">
                <img src={localImg} alt="Local Elections" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-[16px] text-slate-800 mb-4">Local Elections</h4>
              <ul className="text-left space-y-2.5">
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  Municipal Corporation / Panchayat
                </li>
                <li className="flex items-start gap-2 text-[13px] text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  Local governance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Stepper */}
        <section className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm">
          <h3 className="text-[20px] font-bold text-slate-800 mb-8 tracking-tight">How the Election Process Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[1px] border-t-2 border-dashed border-slate-100 z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className={`w-14 h-14 rounded-full ${step.bg} ${step.color} flex items-center justify-center shadow-sm border border-white relative`}>
                  <step.icon size={24} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </div>
                </div>
                <p className="text-[12px] font-bold text-slate-700 leading-tight px-1">{step.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Voting & Safety Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* How Voting Works */}
          <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-[36px] flex flex-col gap-6">
            <h3 className="font-bold text-[18px] text-slate-800">How Voting Works</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-40 h-32 bg-white rounded-2xl p-3 shadow-sm border border-blue-100 flex items-center justify-center">
                <img src={evmVotingImg} alt="Voting Mechanism" className="w-full h-full object-contain" />
              </div>
              <ul className="flex-1 flex flex-col gap-3">
                {[
                  "You vote using an Electronic Voting Machine (EVM)",
                  "Your vote is recorded securely",
                  "VVPAT shows confirmation"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold leading-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Is Voting Safe */}
          <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-[36px] flex flex-col gap-6">
            <h3 className="font-bold text-[18px] text-slate-800">Is Voting Safe?</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-emerald-100 flex items-center justify-center text-emerald-600">
                <img src={safetyImg} alt="Safety" className="w-12 h-12 object-contain" />
              </div>
              <ul className="flex-1 flex flex-col gap-3">
                {[
                  "Secret ballot system",
                  "No one knows who you voted for",
                  "Secure machines and process"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold leading-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section>
          <h3 className="text-[20px] font-bold text-slate-800 mb-6 tracking-tight">Common Questions</h3>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white border ${openFaq === i ? 'border-blue-200 ring-4 ring-blue-50' : 'border-slate-100'} rounded-[24px] overflow-hidden transition-all`}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-full ${faq.iconBg} ${faq.iconColor} flex items-center justify-center flex-shrink-0`}>
                      <faq.icon size={20} />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`} 
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 ml-[60px] animate-in fade-in slide-in-from-top-1 duration-300">
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="bg-blue-600 rounded-[40px] p-8 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          {/* Abstract background effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="w-full md:w-1/3 aspect-video md:aspect-square relative flex items-center justify-center bg-white/10 rounded-3xl backdrop-blur-sm overflow-hidden border border-white/20">
            <img src={takeawayImg} alt="Final Takeaway" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 text-white z-10">
            <h3 className="text-[24px] font-extrabold mb-6 tracking-tight">Final Takeaway</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Elections are how people choose their leaders",
                "Your vote directly impacts governance",
                "Every vote matters"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[16px] font-bold leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
};
