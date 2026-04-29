import React, { useState } from 'react';
import { 
  ChevronRight, 
  Search, 
  Edit3, 
  HelpCircle, 
  X, 
  ExternalLink, 
  User, 
  Home, 
  Camera, 
  Info, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import updateHeroImg from '../assets/update-hero.png';

// Reusable Modal Component
const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-[28px] w-[80%] md:w-[48%] shadow-2xl overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800 text-[18px]">{title}</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export const UpdateDetailsPage = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(null); // 'all-issues' | null

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="pt-6 pb-10 relative">
        <div className="w-[65%] relative z-10">
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
            Update / Correct<br/>
            Your <span className="text-[#146A4A]">Voter Details</span>
          </h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-[220px] leading-relaxed font-medium">
            Fix mistakes or update your voter information easily.
          </p>
          
          <div className="mt-8 flex flex-col gap-4">
            <a 
              href="https://voters.eci.gov.in/form8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between bg-[#1C51E3] text-white pl-5 pr-4 py-4 rounded-[20px] text-[15px] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 w-full max-w-[300px] whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <Edit3 size={22} strokeWidth={2.5} />
                <span>Update Details (Form 8)</span>
              </div>
              <ChevronRight size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-[12px] text-slate-500 font-bold px-1">
              All updates are done using Form 8 on the official ECI portal.
            </p>

            <a 
              href="https://voters.eci.gov.in/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-800 transition-colors px-1"
            >
              <ExternalLink size={16} />
              <span>Go to Official ECI Portal</span>
            </a>

            <button 
              onClick={() => navigate(ROUTES.STATUS)}
              className="flex items-center gap-2 text-[13px] font-bold text-[#146A4A] hover:text-[#0f543a] transition-colors px-1"
            >
              <Clock size={16} />
              <span>Check update status</span>
            </button>
          </div>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-2 w-[45%] h-[110%] pointer-events-none z-0 flex items-center justify-end">
          <img 
            src={updateHeroImg} 
            alt="Update Details Illustration" 
            className="w-full h-full object-contain object-right" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        
        {/* Section 1: What do you want to update? */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">What do you want to update?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Address Change */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                  <Home size={24} />
               </div>
               <h4 className="font-bold text-emerald-900 text-[15px] mb-2">Address Change</h4>
               <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                 Moved to a new place?<br/>Update your address in voter list.
               </p>
            </div>

            {/* Name Correction */}
            <div className="bg-purple-50/30 border border-purple-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-600 shadow-sm mb-4">
                  <User size={24} />
               </div>
               <h4 className="font-bold text-purple-900 text-[15px] mb-2">Name Correction</h4>
               <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                 Spelling mistake or name change (marriage, etc.)? Correct it easily.
               </p>
            </div>

            {/* Photo Update */}
            <div className="bg-orange-50/30 border border-orange-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-orange-100/80 flex items-center justify-center text-orange-600 shadow-sm mb-4">
                  <Camera size={24} />
               </div>
               <h4 className="font-bold text-orange-900 text-[15px] mb-2">Photo Update</h4>
               <p className="text-[12px] text-slate-600 font-medium leading-relaxed">
                 Want to update your photo in voter records?
               </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-[20px] p-4 flex gap-4 items-center shadow-sm">
           <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
             <Info size={20} />
           </div>
           <p className="text-[13px] text-slate-700 font-bold leading-snug">
             All types of changes (address, name, photo, other details) are done using <span className="text-blue-700">Form 8</span> on the official ECI portal.
           </p>
        </div>

        {/* Section 2: Quick Help */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">Quick Help (Most Common Issues)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {/* Mistake Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X size={20} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">Made a mistake while applying?</h4>
                  <p className="text-[12px] text-slate-500 font-bold leading-relaxed">You can correct any details using Form 8.</p>
                </div>
             </div>

             {/* Shifted Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">Shifted to a new city?</h4>
                  <p className="text-[12px] text-slate-500 font-bold leading-relaxed">You need to update your address using Form 8.</p>
                </div>
             </div>

             {/* Wrong Name Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">Name is wrong in voter list?</h4>
                  <p className="text-[12px] text-slate-500 font-bold leading-relaxed">You can correct name spelling or other details using Form 8.</p>
                </div>
             </div>
          </div>

          <button 
            onClick={() => setModalState('all-issues')}
            className="flex items-center justify-between w-full p-4 bg-blue-50/50 rounded-[20px] border border-blue-100 hover:bg-blue-100/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                <HelpCircle size={20} />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold text-slate-800">More issues or not sure what to do?</p>
                <p className="text-[12px] text-slate-500 font-bold">View all issues and solutions.</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-600 font-bold text-[14px]">
              <span>View All Issues</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Section 3: How it works & What happens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
           {/* How it works */}
           <div>
             <h3 className="font-bold text-[16px] text-slate-800 mb-6">How it works</h3>
             <ul className="flex flex-col gap-5">
               {[
                 { step: 1, title: "Fill Form 8", desc: "Provide correct details in the form." },
                 { step: 2, title: "Upload Documents", desc: "Upload required supporting documents." },
                 { step: 3, title: "Submit Request", desc: "Submit your request on the portal." },
                 { step: 4, title: "Verification by BLO", desc: "Your request will be verified by BLO." }
               ].map((item) => (
                 <li key={item.step} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#146A4A] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1">{item.title}</h4>
                      <p className="text-[12px] text-slate-500 font-bold leading-snug">{item.desc}</p>
                    </div>
                 </li>
               ))}
             </ul>
           </div>

           {/* Divider for mobile */}
           <div className="h-px bg-slate-100 md:hidden"></div>

           {/* What happens after update */}
           <div>
             <h3 className="font-bold text-[16px] text-slate-800 mb-6">What happens after update?</h3>
             <ul className="flex flex-col gap-6">
               {[
                 { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", title: "Request is verified", desc: "Your application is checked and verified." },
                 { icon: FileText, color: "text-purple-500", bg: "bg-purple-50", title: "Details updated in voter list", desc: "Once approved, your details are updated." },
                 { icon: Search, color: "text-blue-500", bg: "bg-blue-50", title: "Check updated info online", desc: "You can check your updated voter details anytime online." }
               ].map((item, i) => (
                 <li key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100/50`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1">{item.title}</h4>
                      <p className="text-[12px] text-slate-500 font-bold leading-snug">{item.desc}</p>
                    </div>
                 </li>
               ))}
             </ul>
           </div>
        </div>

        {/* Time Taken Card */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm">
           <div className="w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
             <Clock size={20} />
           </div>
           <p className="text-[13px] text-slate-700 font-bold leading-snug">
             <span className="text-orange-600">Time Taken:</span> Usually processed within a few weeks (depending on verification)
           </p>
        </div>

      </div>

      {/* Modals */}
      <InfoModal isOpen={modalState === 'all-issues'} onClose={() => setModalState(null)} title="Troubleshooting Guide">
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-slate-600 font-bold mb-1">More common issues with updates:</p>
          
          {[
            { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", title: "Application rejected", desc: "Your documents might be unclear or invalid. Re-apply with proper proof." },
            { icon: Clock, color: "text-amber-600", bg: "bg-amber-50", title: "Update taking too long", desc: "Verification might be delayed in your area. Contact your local ERO/BLO." },
            { icon: Edit3, color: "text-purple-600", bg: "bg-purple-50", title: "Wrong info updated", desc: "If mistake persists, you can file another Form 8 to correct it." },
          ].map((issue, i) => (
            <div key={i} className="p-4 border border-slate-100 rounded-2xl flex items-start gap-4 bg-white shadow-sm">
               <div className="bg-slate-50 p-2 rounded-xl"><issue.icon size={20} className={`${issue.color}`} /></div>
               <div>
                 <strong className="block text-[14px] text-slate-800 mb-1 leading-tight">{issue.title}</strong>
                 <span className="text-[12px] font-bold text-slate-500 leading-relaxed">{issue.desc}</span>
               </div>
            </div>
          ))}
          
          <button 
             onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
             className="w-full mt-4 py-4 bg-slate-900 text-white font-bold text-[15px] rounded-2xl hover:bg-slate-800 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all"
          >
             <HelpCircle size={20} /> Chat with Assistant
          </button>
        </div>
      </InfoModal>

    </main>
  );
};
