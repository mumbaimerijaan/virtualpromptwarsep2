import React, { useState } from 'react';
import { 
  ChevronRight, 
  IdCard, 
  Search, 
  HelpCircle, 
  X, 
  ExternalLink, 
  User, 
  MapPin, 
  Calendar, 
  FileText, 
  Settings, 
  Edit3, 
  Navigation, 
  ShieldAlert, 
  CheckCircle, 
  FileWarning, 
  Clock 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/check-voter-hero.png';

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
          <button 
            onClick={onClose} 
            autoFocus
            className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Close Modal"
          >
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

export const CheckVoterListPage = () => {
  const [modalState, setModalState] = useState(null); // 'all-issues' | 'search-help' | 'what-you-see' | 'advanced-options' | null

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-32 relative overflow-x-hidden">
      


      {/* Hero Section */}
      <div className="pt-2 pb-8 relative overflow-hidden">
        <div className="w-[60%] relative z-10 pt-4">
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.1] tracking-tight">
            Check Your Name<br/>
            in Voter List
          </h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-[220px] leading-relaxed font-medium">
            Find your voter details in seconds.
          </p>
          
          <div className="mt-7 flex flex-col gap-4">
            <a 
              href="https://electoralsearch.eci.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between bg-[#1C51E3] text-white pl-5 pr-4 py-4 rounded-[20px] text-[15px] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 w-full max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <Search size={22} strokeWidth={2.5} />
                <span>Check Now</span>
              </div>
              <ChevronRight size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://electoralsearch.eci.gov.in/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-800 transition-colors px-1"
            >
              <ExternalLink size={16} />
              <span>Go to Official ECI Search Portal</span>
            </a>
          </div>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-[-40px] w-[60%] h-[120%] pointer-events-none z-0">
          <img 
            src={heroImg} 
            alt="Search Voter List Illustration" 
            className="w-full h-full object-contain object-right-top" 
          />
        </div>
      </div>

      <div className="px-5 flex flex-col gap-6 relative z-10">
        
        {/* Section 1: Search Options */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">1. How do you want to search?</h3>
            <button 
              onClick={() => setModalState('search-help')}
              className="text-blue-600 text-[13px] font-bold flex items-center gap-1.5 hover:underline whitespace-nowrap bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100"
            >
              <HelpCircle size={15} /> Search help
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* By Name Card */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-5 rounded-[24px] flex flex-col shadow-sm">
               <div className="flex items-center gap-3 mb-5">
                 <div className="w-12 h-12 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-600 shadow-sm">
                    <User size={24} />
                 </div>
                 <h4 className="font-bold text-emerald-900 text-[15px]">By Name</h4>
               </div>
               
               <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                 {['Name', 'Date of Birth', 'State'].map((item) => (
                   <li key={item} className="flex items-center gap-3 text-[13px] text-slate-600 font-semibold px-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm"></div>
                     <span className="flex items-center gap-2">
                       {item === 'Name' && <User size={14} className="opacity-60" />}
                       {item === 'Date of Birth' && <Calendar size={14} className="opacity-60" />}
                       {item === 'State' && <MapPin size={14} className="opacity-60" />}
                       {item}
                     </span>
                   </li>
                 ))}
               </ul>

               <a 
                 href="https://electoralsearch.eci.gov.in/" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-full bg-[#146A4A] text-white py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-between px-5 hover:bg-[#0f543a] transition-all shadow-lg shadow-emerald-900/10 active:scale-[0.98]"
               >
                 <span>Search by Name</span>
                 <ChevronRight size={18} className="opacity-70" />
               </a>
            </div>

            {/* By EPIC Card */}
            <div className="bg-purple-50/30 border border-purple-100 p-5 rounded-[24px] flex flex-col shadow-sm">
               <div className="flex items-center gap-3 mb-5">
                 <div className="w-12 h-12 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-600 shadow-sm">
                    <IdCard size={24} />
                 </div>
                 <h4 className="font-bold text-purple-900 text-[15px]">By EPIC (Voter ID)</h4>
               </div>
               
               <div className="mb-8 flex-1">
                 <p className="text-[13px] text-slate-600 font-semibold px-1 leading-relaxed">
                   Enter your EPIC <br/>number
                 </p>
               </div>

               <a 
                 href="https://electoralsearch.eci.gov.in/" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-full bg-[#7C3AED] text-white py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-between px-5 hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/10 active:scale-[0.98]"
               >
                 <span>Search by EPIC</span>
                 <ChevronRight size={18} className="opacity-70" />
               </a>
            </div>
          </div>
        </div>

        {/* Section 2: Quick Help */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">2. Quick Help (Most Common Issues)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1">
             {/* Not in list Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shadow-sm">
                    <X size={16} strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-[13px] text-slate-800">My name is not in the list</h4>
                </div>
                <ul className="flex flex-col gap-2.5 pl-11 mb-6 flex-1">
                  <li className="text-[12px] text-slate-500 font-bold list-disc">Check spelling</li>
                  <li className="text-[12px] text-slate-500 font-bold list-disc">Use EPIC search</li>
                </ul>
                <a 
                  href="https://voters.eci.gov.in/form6" target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white border border-red-100 text-red-600 text-[13px] font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-red-50 transition-colors shadow-sm"
                >
                  Register as New Voter <ExternalLink size={14} />
                </a>
             </div>

             {/* Details incorrect Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm mt-0.5">
                    <Edit3 size={16} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-[13px] text-slate-800">My details are incorrect</h4>
                </div>
                <div className="pl-11 mb-6 flex-1">
                  <p className="text-[12px] text-slate-500 font-bold list-disc list-item ml-1">You can correct them</p>
                </div>
                <a 
                  href="https://voters.eci.gov.in/form8" target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white border border-amber-100 text-amber-600 text-[13px] font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors shadow-sm mt-auto"
                >
                  Update Details (Form 8) <ExternalLink size={14} />
                </a>
             </div>

             {/* More Help Card */}
             <div className="bg-blue-50/50 border border-blue-100 rounded-[24px] p-5 flex flex-col justify-between items-start cursor-pointer hover:bg-blue-100/50 transition-all group shadow-sm" onClick={() => setModalState('all-issues')}>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <HelpCircle size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1">More Help</h4>
                  <p className="text-[11px] text-slate-500 font-bold leading-tight">View all issues and solutions</p>
                </div>
                <div className="self-end text-blue-600 bg-white p-1.5 rounded-full shadow-sm mt-2 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </div>
             </div>
          </div>
        </div>

        {/* Card 3: Polling Booth */}
        <div className="bg-white p-5 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100 shadow-sm">
            <MapPin size={28} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[15px] text-slate-800 mb-1 leading-tight">3. Need help finding your constituency?</h3>
            <p className="text-[12px] text-slate-500 font-bold leading-relaxed max-w-[280px]">Find your polling booth location and constituency details.</p>
          </div>
          <a 
            href="https://electoralsearch.eci.gov.in/pollingstation" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-emerald-100 text-emerald-700 font-bold text-[13px] px-5 py-3 rounded-xl whitespace-nowrap hover:bg-emerald-50 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            Find My Polling Booth <ExternalLink size={14} />
          </a>
        </div>

        {/* Card 4: What you see in results? */}
        <div className="bg-white p-6 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
               <ShieldAlert size={24} />
             </div>
             <h3 className="font-bold text-[16px] text-slate-800 tracking-tight">4. What will you see in results?</h3>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Navigation, title: "Polling booth location", bg: "bg-orange-50", color: "text-orange-500" },
                { icon: MapPin, title: "Assembly & Parliamentary constituency", bg: "bg-emerald-50", color: "text-emerald-500" },
                { icon: FileText, title: "Serial number in roll", bg: "bg-amber-50", color: "text-amber-500" },
                { icon: User, title: "Your voter details", bg: "bg-blue-50", color: "text-blue-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 p-2 group">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0 border border-white shadow-sm transition-transform group-hover:scale-110`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 leading-snug px-1">{item.title}</span>
                </div>
              ))}
           </div>
           
           <div className="flex justify-center border-t border-slate-50 pt-5">
             <button 
               onClick={() => setModalState('what-you-see')}
               className="text-blue-600 text-[13px] font-bold flex items-center gap-1.5 hover:underline"
             >
               View full preview <ChevronRight size={16} />
             </button>
           </div>
        </div>

        {/* Card 5: Advanced Options */}
        <button 
          onClick={() => setModalState('advanced-options')}
          className="bg-white p-5 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-all text-left active:scale-[0.99] group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shadow-sm group-hover:bg-purple-100 transition-colors">
              <Settings size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-slate-800">5. Advanced Options</h3>
              <p className="text-[12px] text-slate-500 font-bold mt-0.5 leading-relaxed">Download voter slip, find BLO, locate polling station and more.</p>
            </div>
          </div>
          <ChevronRight size={24} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
        </button>

      </div>



      {/* Modals */}
      
      {/* 1. Search Help */}
      <InfoModal isOpen={modalState === 'search-help'} onClose={() => setModalState(null)} title="Search Help">
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-lg text-blue-600 shadow-sm"><Search size={18} /></div>
            <span className="text-[14px] font-semibold text-slate-700 leading-relaxed"><strong className="text-blue-900 block mb-1 text-[15px]">Try full name / partial name</strong> Sometimes exact matches fail due to minor typos in official records.</span>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-100 rounded-2xl flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-lg text-purple-600 shadow-sm"><Edit3 size={18} /></div>
            <span className="text-[14px] font-semibold text-slate-700 leading-relaxed"><strong className="text-purple-900 block mb-1 text-[15px]">Try different spellings</strong> If your name is 'Ramesh', try 'Rames' or 'Ramsh'.</span>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-lg text-emerald-600 shadow-sm"><IdCard size={18} /></div>
            <span className="text-[14px] font-semibold text-slate-700 leading-relaxed"><strong className="text-emerald-900 block mb-1 text-[15px]">Use EPIC if available</strong> Searching by Voter ID (EPIC) is the most accurate method.</span>
          </div>
        </div>
      </InfoModal>

      {/* 2. All Issues */}
      <InfoModal isOpen={modalState === 'all-issues'} onClose={() => setModalState(null)} title="Troubleshooting Guide">
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-slate-600 font-bold mb-1">Common reasons your name might not appear:</p>
          
          {[
            { icon: User, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", title: "Family members present but I’m not", desc: "Your application might have been rejected or you were accidentally skipped." },
            { icon: FileWarning, color: "text-red-600", bg: "bg-red-50", border: "border-red-100", title: "Name removed recently", desc: "Names get deleted during revision if BLO finds you absent. You need to re-register (Form 6)." },
            { icon: Clock, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", title: "Application pending", desc: "If you applied recently, it might still be in process. Track your status." },
            { icon: ShieldAlert, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100", title: "Duplicate entries", desc: "Multiple entries might cause suspension. Contact your BLO." },
            { icon: Edit3, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", title: "Data mismatch", desc: "Your name spelling might be vastly different in records. Try partial search." },
          ].map((issue, i) => (
            <div key={i} className={`p-4 border ${issue.border} rounded-2xl flex items-start gap-4 ${issue.bg}`}>
               <div className="bg-white p-2 rounded-xl shadow-sm"><issue.icon size={20} className={`${issue.color}`} /></div>
               <div>
                 <strong className={`block text-[14px] mb-1 leading-tight ${issue.color.replace('text-', 'text-').replace('-600', '-900')}`}>{issue.title}</strong>
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

      {/* 3. What you will see */}
      <InfoModal isOpen={modalState === 'what-you-see'} onClose={() => setModalState(null)} title="Search Results Preview">
        <p className="text-[14px] text-slate-600 font-bold mb-5">When you find your name, you will see:</p>
        <ul className="flex flex-col gap-4">
          {[
            { icon: MapPin, title: "Polling Booth Details", desc: "Exact name and address of where you go to vote.", bg: "bg-emerald-50", color: "text-emerald-600" },
            { icon: Navigation, title: "Constituency Information", desc: "Your Assembly (MLA) and Parliamentary (MP) names.", bg: "bg-blue-50", color: "text-blue-600" },
            { icon: FileText, title: "Part & Serial Number", desc: "Your specific location number in the official voter list.", bg: "bg-amber-50", color: "text-amber-600" },
            { icon: User, title: "Personal Details", desc: "Your registered name, relative's name, age, and gender.", bg: "bg-purple-50", color: "text-purple-600" },
            { icon: CheckCircle, title: "Voter Information Slip", desc: "Option to print your official voter slip directly.", bg: "bg-orange-50", color: "text-orange-600" },
          ].map((item, i) => (
            <li key={i} className={`flex items-start gap-4 p-4 border border-slate-100 rounded-2xl ${item.bg}/30 shadow-sm`}>
               <div className="bg-white p-2 rounded-xl shadow-sm flex-shrink-0"><item.icon size={20} className={item.color} /></div>
               <div>
                 <strong className="block text-[14px] text-slate-800 mb-1 leading-tight">{item.title}</strong>
                 <span className="text-[12px] font-bold text-slate-500 leading-relaxed">{item.desc}</span>
               </div>
            </li>
          ))}
        </ul>
      </InfoModal>

      {/* 4. Advanced Options */}
      <InfoModal isOpen={modalState === 'advanced-options'} onClose={() => setModalState(null)} title="Advanced Options">
        <p className="text-[14px] text-slate-600 font-bold mb-5 leading-relaxed">Quick links to other official ECI services:</p>
        <div className="flex flex-col gap-4">
          <a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border-2 border-slate-50 rounded-2xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group shadow-sm">
            <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-600 transition-all"><FileText size={22} /></div>
            <div className="flex-1">
              <strong className="block text-[15px] text-slate-800 group-hover:text-blue-900 leading-tight mb-1">Download Voter Slip</strong>
              <span className="text-[12px] font-bold text-slate-500">e-EPIC download portal</span>
            </div>
            <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-all" />
          </a>
          
          <a href="https://voters.eci.gov.in/home/bookACallRequest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border-2 border-slate-50 rounded-2xl hover:border-purple-200 hover:bg-purple-50/30 transition-all group shadow-sm">
            <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-purple-100 text-slate-500 group-hover:text-purple-600 transition-all"><User size={22} /></div>
            <div className="flex-1">
              <strong className="block text-[15px] text-slate-800 group-hover:text-purple-900 leading-tight mb-1">Know Your BLO & Officers</strong>
              <span className="text-[12px] font-bold text-slate-500">Find official contact details</span>
            </div>
            <ExternalLink size={18} className="text-slate-300 group-hover:text-purple-500 transition-all" />
          </a>

          <a href="https://electoralsearch.eci.gov.in/pollingstation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border-2 border-slate-50 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group shadow-sm">
            <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-emerald-100 text-slate-500 group-hover:text-emerald-600 transition-all"><MapPin size={22} /></div>
            <div className="flex-1">
              <strong className="block text-[15px] text-slate-800 group-hover:text-emerald-900 leading-tight mb-1">Locate Polling Station</strong>
              <span className="text-[12px] font-bold text-slate-500">Map view of your booth</span>
            </div>
            <ExternalLink size={18} className="text-slate-300 group-hover:text-emerald-500 transition-all" />
          </a>
        </div>
      </InfoModal>

    </main>
  );
};
