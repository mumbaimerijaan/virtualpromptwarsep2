import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Smartphone, 
  Camera, 
  IdCard, 
  Globe, 
  CreditCard, 
  ShieldCheck, 
  AlertCircle, 
  X, 
  ExternalLink, 
  HelpCircle, 
  Clock,
  Car,
  Sun,
  ShieldCheck as Shield,
  Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import votingHeroImg from '../assets/voting-hero.png';
import step1Img from '../assets/step1-img.png';
import step2Img from '../assets/step2-img.png';
import step3Img from '../assets/step3-img.png';

export const VotingProcessPage = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(null); // 'emergency-help' | null

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="pt-6 pb-10 relative">
        <div className="w-[55%] relative z-10">
          <h2 className="text-[36px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
            How to <span className="text-[#1A237E]">Vote</span>
          </h2>
          <p className="text-[15px] text-slate-500 mt-4 max-w-[240px] leading-relaxed font-medium">
            Everything you need to know for voting day.
          </p>
          
          <div className="mt-8 flex flex-col gap-3 max-w-[340px]">
            <a 
              href="https://electoralsearch.eci.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <User size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-slate-800">Check My Name</p>
                  <p className="text-[11px] text-slate-400 font-bold">Check your name in voter list</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://electoralsearch.eci.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-slate-100 p-3.5 rounded-[20px] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-slate-800">Find Polling Booth</p>
                  <p className="text-[11px] text-slate-400 font-bold">Know your polling booth location</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-[-10px] w-[50%] h-[110%] pointer-events-none z-0 flex items-center justify-end">
          <img 
            src={votingHeroImg} 
            alt="Voting Process Illustration" 
            className="h-full w-full object-contain object-right" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        
        {/* Section 1: The 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#146A4A] text-white flex items-center justify-center text-[14px] font-bold">1</div>
              <h3 className="font-bold text-[17px] text-emerald-900">Before You Go</h3>
            </div>
            
            <div className="flex justify-center py-6 bg-slate-50/50 rounded-2xl border border-slate-100/30 overflow-hidden h-[160px]">
              <img src={step1Img} alt="Checklist" className="h-full object-contain" />
            </div>

            <ul className="flex flex-col gap-3">
              {['Check your name in voter list', 'Know your polling booth location', 'Carry a valid ID'].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-[13px] text-slate-600 font-bold leading-tight">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-slate-50 text-center">
              <span className="text-[11px] font-extrabold text-emerald-600 px-4 py-2 bg-emerald-50 rounded-full inline-block uppercase tracking-wider">Be prepared, save time!</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[14px] font-bold">2</div>
              <h3 className="font-bold text-[17px] text-indigo-900">At the Polling Booth</h3>
            </div>
            
            <div className="flex justify-center py-6 bg-slate-50/50 rounded-2xl border border-slate-100/30 overflow-hidden h-[160px]">
               <img src={step2Img} alt="Polling Station" className="h-full object-contain" />
            </div>

            <ol className="flex flex-col gap-3">
              {[
                "Show your ID",
                "Your finger will be marked with ink",
                "Go to voting machine (EVM)",
                "Press button for your candidate"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i+1}</div>
                  <span className="text-[13px] text-slate-600 font-bold leading-tight">{text}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-100 p-6 rounded-[28px] shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[14px] font-bold">3</div>
              <h3 className="font-bold text-[17px] text-blue-900">After Voting</h3>
            </div>
            
            <div className="flex justify-center py-6 bg-slate-50/50 rounded-2xl border border-slate-100/30 overflow-hidden h-[160px]">
               <img src={step3Img} alt="VVPAT Machine" className="h-full object-contain" />
            </div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <span className="text-[13px] text-slate-600 font-bold leading-tight">Check VVPAT slip<br/><span className="text-slate-400 text-[11px] font-medium">(confirmation window)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <span className="text-[13px] text-slate-600 font-bold leading-tight">Exit polling station</span>
              </li>
            </ul>

            <div className="mt-auto pt-4 border-t border-slate-50">
               <div className="flex items-center justify-center gap-2 text-blue-600 bg-blue-50 py-2 rounded-full border border-blue-100 shadow-sm">
                 <span className="text-[10px] font-extrabold uppercase tracking-widest">Your vote is secret and secure</span>
                 <Shield size={14} />
               </div>
            </div>
          </div>
        </div>

        {/* Section 2: What ID Can You Carry? */}
        <div className="bg-white border border-slate-100 p-8 rounded-[36px] shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-[20px] text-slate-800 mb-2">What ID Can You Carry?</h3>
              <p className="text-[14px] text-slate-400 font-bold mb-8">You can carry any <span className="text-[#1C51E3]">ONE</span> of these:</p>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                {[
                  { icon: IdCard, label: "Voter ID (EPIC)", color: "text-emerald-500", bg: "bg-emerald-50" },
                  { icon: Sun, label: "Aadhaar", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: Globe, label: "Passport", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Car, label: "Driving License", color: "text-amber-500", bg: "bg-amber-50" },
                  { icon: CreditCard, label: "PAN Card", color: "text-purple-500", bg: "bg-purple-50" }
                ].map((id, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className={`w-14 h-14 rounded-full ${id.bg} ${id.color} flex items-center justify-center shadow-sm border border-slate-100/50`}>
                      <id.icon size={26} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 text-center leading-tight">{id.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50/50 border border-orange-100 rounded-[28px] p-6 md:w-[320px] flex items-start gap-4 shadow-sm relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <p className="text-[14px] text-slate-700 font-bold leading-relaxed">
                You can vote even <span className="text-orange-600 underline underline-offset-4">without voter ID card</span> if your name is in voter list.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Important Rules */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">Important Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 border border-red-100 relative overflow-hidden">
                 <Smartphone size={20} />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-[140%] h-[2.5px] bg-red-500/80 rotate-[35deg]" />
                 </div>
              </div>
              <span className="text-[14px] text-slate-600 font-bold">No mobile phones inside booth</span>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 border border-red-100 relative overflow-hidden">
                 <Camera size={20} />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-[140%] h-[2.5px] bg-red-500/80 rotate-[35deg]" />
                 </div>
              </div>
              <span className="text-[14px] text-slate-600 font-bold">No photography or recording</span>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 border border-blue-100">
                 <Users size={20} />
              </div>
              <span className="text-[14px] text-slate-600 font-bold">Follow polling staff instructions</span>
            </div>
          </div>
        </div>

        {/* Section 4: Quick Help */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">Quick Help (Voting Day Issues)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X size={20} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">My name not found at booth?</h4>
                  <p className="text-[12px] text-slate-400 font-bold leading-relaxed">Re-check voter list and details.</p>
                </div>
             </div>

             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <IdCard size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">I forgot my voter ID?</h4>
                  <p className="text-[12px] text-slate-400 font-bold leading-relaxed">Use any other valid ID from the list.</p>
                </div>
             </div>

             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">Long queue?</h4>
                  <p className="text-[12px] text-slate-400 font-bold leading-relaxed">You can still vote if in line before closing.</p>
                </div>
             </div>

             <button 
                onClick={() => navigate(ROUTES.EMERGENCY)}
                className="bg-blue-50/50 border border-blue-100 rounded-[24px] p-5 flex flex-col gap-4 shadow-sm hover:bg-blue-100/50 transition-all text-left group"
             >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[14px] text-slate-800 mb-1 leading-tight">More issues?</h4>
                    <ChevronRight size={16} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[12px] text-blue-600 font-extrabold uppercase tracking-wider mt-1">View All Issues</p>
                </div>
             </button>
          </div>
        </div>

        {/* Section 5: Final Outcome */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-[40px] p-10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
           <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 opacity-5 text-emerald-900 pointer-events-none">
             <CheckCircle2 size={256} strokeWidth={0.5} />
           </div>
           <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_12px_24px_rgba(16,185,129,0.3)] flex-shrink-0 z-10 scale-110">
             <CheckCircle2 size={40} strokeWidth={2.5} />
           </div>
           <div className="z-10 text-center md:text-left">
             <h3 className="text-emerald-900 font-extrabold text-[22px] mb-2 tracking-tight">You successfully cast your vote.</h3>
             <p className="text-emerald-700 font-bold text-[15px] leading-relaxed">Your vote is counted securely. You participated in democracy.</p>
           </div>
        </div>

        {/* Trust Note Footer */}
        <div className="bg-[#EEF2FF] border border-blue-100 rounded-[24px] p-5 flex flex-col md:flex-row gap-4 items-center justify-center shadow-sm">
           <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-[15px]">
             <Shield size={20} />
             <span>Voting is your right.</span>
           </div>
           <div className="hidden md:block w-px h-6 bg-blue-200 mx-2" />
           <p className="text-[14px] text-slate-500 font-bold">
             Every vote is confidential and secure.
           </p>
        </div>

      </div>
    </main>
  );
};
