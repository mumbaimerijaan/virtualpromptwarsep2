import React, { useState } from 'react';
import { 
  CheckCircle2, 
  IdCard, 
  Home, 
  Calendar, 
  FileText, 
  CloudUpload, 
  Send, 
  User, 
  Search, 
  Edit3, 
  HelpCircle, 
  X, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import heroImg from '../assets/register-hero.png';

// Reusable Modal Component
const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-[24px] w-[80%] md:w-[48%] shadow-2xl overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-800 text-[16px]">{title}</h3>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export const RegisterVoterPage = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(null); // 'not-sure' | 'need-help' | 'apply-offline' | null

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Top Header */}
      <header className="px-5 py-4 flex items-center justify-center sticky top-0 bg-[#F9FAFB]/90 backdrop-blur-md z-30">
        <h1 className="font-bold text-[16px] text-slate-800 text-center w-full">
          Register as a New Voter
        </h1>
      </header>

      {/* Hero Section */}
      <div className="px-5 pt-2 pb-6 relative overflow-hidden">
        <div className="w-[60%] relative z-10 pt-4">
          <h2 className="text-[28px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
            Become a voter.<br/>
            Make your <span className="text-[#E85D04]">voice</span> count.
          </h2>
          <p className="text-[13px] text-slate-500 mt-3 max-w-[200px] leading-relaxed font-medium">
            We'll guide you step by step to register as a new voter.
          </p>
          <a 
            href="https://voters.eci.gov.in/guidelines/Form-6_en.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-[#146A4A] text-white px-5 py-3 rounded-full text-[14px] font-bold shadow-lg shadow-green-900/20 hover:bg-[#0f543a] transition-colors"
          >
            New Voter form guidelines <ExternalLink size={16} />
          </a>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-[-30px] w-[55%] h-[120%] pointer-events-none z-0">
          <img 
            src={heroImg} 
            alt="Registration Illustration" 
            className="w-full h-full object-contain object-right-top" 
          />
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 relative z-10 pb-10">
        
        {/* Card 1: Eligibility */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100/50 flex-shrink-0">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[16px] text-slate-800">1. Are you eligible?</h3>
            </div>
            <button 
              onClick={() => setModalState('not-sure')}
              className="text-blue-600 text-[12px] font-bold mt-1 hover:underline whitespace-nowrap"
            >
              Not sure?
            </button>
          </div>
          
          <div className="pl-1">
            <p className="text-[13px] text-slate-600 font-medium mb-3">You can register if:</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "You are 18 years or older (or turning 18 soon)",
                "You are a citizen of India",
                "You live in the constituency where you are applying"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[13px] text-slate-700 leading-snug font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Documents */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[16px] text-slate-800">2. Documents you need</h3>
            <button 
              onClick={() => setModalState('need-help')}
              className="text-blue-600 text-[12px] font-bold flex items-center hover:underline"
            >
              Need help? <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Identity Proof */}
            <div className="bg-purple-50/50 border border-purple-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <IdCard size={24} className="text-purple-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-purple-700 mb-1 relative z-10">Identity Proof</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">Aadhaar / PAN / Passport / Driving License</p>
              <span className="text-[9px] font-bold text-purple-600 border border-purple-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">Any one</span>
            </div>
            {/* Address Proof */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <Home size={24} className="text-blue-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-blue-700 mb-1 relative z-10">Address Proof</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">Aadhaar / Rent Agreement / Electricity Bill</p>
              <span className="text-[9px] font-bold text-blue-600 border border-blue-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">Any one</span>
            </div>
            {/* Age Proof */}
            <div className="bg-orange-50/50 border border-orange-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <Calendar size={24} className="text-orange-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-orange-700 mb-1 relative z-10">Age Proof</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">Birth Certificate / 10th Marksheet / Passport</p>
              <span className="text-[9px] font-bold text-orange-600 border border-orange-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">Any one</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 font-medium text-center mt-3 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
            <span className="font-bold text-slate-700">Note:</span> Aadhaar is optional (not mandatory)
          </p>
        </div>

        {/* Card 3: How to Apply */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[16px] text-slate-800">3. How to Apply</h3>
            <button 
              onClick={() => setModalState('apply-offline')}
              className="text-blue-600 text-[12px] font-bold flex items-center hover:underline"
            >
              Offline process
            </button>
          </div>

          <div className="relative flex justify-between items-start px-2">
            {/* Connecting Dashed Line */}
            <div className="absolute top-5 left-8 right-8 h-0 border-t-2 border-dashed border-slate-200 z-0"></div>
            
            {/* Steps */}
            {[
              { num: 1, icon: FileText, color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'Fill Form 6', desc: 'Online or Offline' },
              { num: 2, icon: CloudUpload, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Upload documents', desc: 'Self attested copies' },
              { num: 3, icon: Send, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Submit application', desc: 'Get reference number' },
              { num: 4, icon: User, color: 'text-orange-500', bg: 'bg-orange-50', title: 'BLO Verification', desc: 'Verification at your address' },
            ].map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className={`w-12 h-12 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white outline outline-4 outline-white`}>
                  <step.icon size={20} />
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="w-4 h-4 rounded-full bg-slate-800 text-white text-[9px] font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight">
                    {step.title}
                  </span>
                </div>
                <span className="text-[9px] text-slate-500 font-medium leading-tight px-1">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: What's Next? */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-bold text-[16px] text-slate-800 mb-5">Whats Next?</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            {[
              { icon: Search, color: 'text-emerald-500', bg: 'bg-emerald-50', text: 'Application is verified' },
              { icon: User, color: 'text-blue-500', bg: 'bg-blue-50', text: 'Name added to voter list' },
              { icon: IdCard, color: 'text-purple-500', bg: 'bg-purple-50', text: 'EPIC number generated' },
              { icon: CheckCircle2, color: 'text-orange-500', bg: 'bg-orange-50', text: 'Voter ID card will be delivered' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100/50`}>
                  <item.icon size={18} />
                </div>
                <span className="text-[11px] font-bold text-slate-700 leading-tight">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50/80 border border-orange-100 rounded-xl p-3 flex gap-3 items-start">
            <div className="text-orange-500 mt-0.5"><HelpCircle size={18} className="fill-orange-100" /></div>
            <p className="text-[12px] text-slate-700 font-medium leading-snug">
              You can vote even if you haven't received your Voter ID card, if your name is in the voter list.
            </p>
          </div>

          <div className="mt-5 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm"><Clock size={20} /></div>
              <p className="text-[14px] font-bold text-indigo-900 leading-tight">Already applied?</p>
            </div>
            <button 
              onClick={() => navigate(ROUTES.STATUS)}
              className="w-full py-3 bg-[#1A237E] text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 hover:bg-[#151b60] transition-all shadow-md shadow-indigo-900/10"
            >
              Track Application Status <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 5: Facing an issue? */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-bold text-[16px] text-slate-800 mb-4">Facing an issue?</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <a href="https://voters.eci.gov.in/home/track" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100">
              <Clock size={18} className="text-red-500" />
              <span className="text-[12px] font-bold text-slate-700 leading-tight">Track Application Status</span>
            </a>
            <a href="https://voters.eci.gov.in/form8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100">
              <Edit3 size={18} className="text-amber-500" />
              <span className="text-[12px] font-bold text-slate-700 leading-tight">Made a mistake?</span>
            </a>
            <a href="https://voters.eci.gov.in/form8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100">
              <IdCard size={18} className="text-blue-500" />
              <span className="text-[12px] font-bold text-slate-700 leading-tight">Update/Correct details</span>
            </a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
              className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100 text-left w-full"
            >
              <HelpCircle size={18} className="text-purple-500" />
              <span className="text-[12px] font-bold text-slate-700 leading-tight">More Help Options</span>
            </button>
          </div>
        </div>

      </div>



      {/* Modals */}
      <InfoModal isOpen={modalState === 'not-sure'} onClose={() => setModalState(null)} title="Not Sure?">
        <div className="flex flex-col gap-3">
          <a href="https://voters.eci.gov.in/form6" target="_blank" rel="noopener noreferrer" className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors flex justify-between items-center group">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-[13px] font-medium text-emerald-900">Just turned 18? <span className="font-bold block mt-1 text-emerald-700">→ You can apply now</span></span>
            </div>
            <ExternalLink size={14} className="text-emerald-500 opacity-50 group-hover:opacity-100" />
          </a>
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-2">
            <Home size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-[13px] font-medium text-blue-900">Living away from hometown? <span className="font-bold text-blue-700 block mt-1">→ Apply where you currently stay</span></span>
          </div>
          <a href="https://voters.eci.gov.in/form8" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-50 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors flex justify-between items-center group">
            <div className="flex items-start gap-2">
              <AlertCircle size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-[13px] font-medium text-purple-900">Already registered elsewhere? <span className="font-bold block mt-1 text-purple-700">→ Use Update Details (Form 8)</span></span>
            </div>
            <ExternalLink size={14} className="text-purple-500 opacity-50 group-hover:opacity-100" />
          </a>
        </div>
      </InfoModal>

      <InfoModal isOpen={modalState === 'need-help'} onClose={() => setModalState(null)} title="Common Problems">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-red-500 font-bold text-[14px]">❌</span>
              <span className="text-[13px] font-bold text-slate-800">I don’t have all documents</span>
            </div>
            <p className="text-[13px] text-amber-700 ml-6 bg-amber-50 p-2.5 rounded-lg border border-amber-100 font-medium">→ You can apply with available valid documents</p>
          </div>
          
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-red-500 font-bold text-[14px]">❌</span>
              <span className="text-[13px] font-bold text-slate-800">Details don’t match documents</span>
            </div>
            <p className="text-[13px] text-amber-700 ml-6 bg-amber-50 p-2.5 rounded-lg border border-amber-100 font-medium">→ Correct details first or update later</p>
          </div>

          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-red-500 font-bold text-[14px]">❌</span>
              <span className="text-[13px] font-bold text-slate-800">I don’t know my constituency</span>
            </div>
            <a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-indigo-700 font-bold ml-6 bg-indigo-50 p-2.5 rounded-lg border border-indigo-200 flex items-center gap-1 hover:bg-indigo-100 transition-colors inline-flex shadow-sm">
              → Use voter search <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </InfoModal>

      <InfoModal isOpen={modalState === 'apply-offline'} onClose={() => setModalState(null)} title="Offline process">
        <p className="text-[14px] text-slate-600 mb-4 font-medium">You can submit your offline application (Form 6) by visiting:</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
            <div className="p-2 bg-white rounded-full text-emerald-600 shadow-sm"><User size={18} /></div>
            <span className="text-[14px] font-bold text-emerald-800">Electoral Registration Officer (ERO)</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
            <div className="p-2 bg-white rounded-full text-blue-600 shadow-sm"><User size={18} /></div>
            <span className="text-[14px] font-bold text-blue-800">Booth Level Officer (BLO)</span>
          </div>
        </div>
      </InfoModal>

    </main>
  );
};
