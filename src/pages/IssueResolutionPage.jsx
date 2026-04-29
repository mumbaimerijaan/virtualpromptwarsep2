import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin, 
  UserCircle, 
  Fingerprint, 
  ArrowRight,
  Send,
  Star,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import feedbackHeroImg from '../assets/feedback-hero.png';

const FEEDBACK_CATEGORIES = [
  { id: 'booth', label: 'Polling Booth', icon: MapPin, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'registration', label: 'Registration', icon: UserCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'voting', label: 'Voting Machine', icon: Fingerprint, color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'staff', label: 'Staff Behavior', icon: UserCircle, color: 'text-orange-600', bg: 'bg-orange-50' }
];

export const IssueResolutionPage = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState(null);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, track this event in GA4
    // trackEvent('Feedback', 'Submit', selectedCat || 'General');
  };

  if (isSubmitted) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center bg-white px-8 text-center pb-20 h-screen">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-[28px] font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
          Thank you for <br/> helping democracy!
        </h1>
        <p className="text-[15px] text-slate-500 font-medium mb-10 leading-relaxed">
          Your feedback has been recorded and will be used to improve the election process for everyone.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
        >
          Back to Home
        </button>
      </main>
    );
  }

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Header */}
      <div className="px-5 pt-8 pb-10 relative overflow-hidden bg-white">
        <div className="w-[65%] relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 mb-6 bg-white shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-[32px] font-extrabold text-[#1A237E] leading-[1.1] tracking-tight">
            Process Evaluation
          </h1>
          <p className="text-[14px] text-slate-500 mt-3 max-w-[240px] leading-relaxed font-medium">
            Evaluate your electoral journey and report friction points.
          </p>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-[-10px] w-[45%] h-[120%] pointer-events-none z-0">
          <img 
            src={feedbackHeroImg} 
            alt="Feedback Illustration" 
            className="w-full h-full object-contain object-right-top" 
          />
        </div>
      </div>

      <div className="px-5 mt-6 flex flex-col gap-8">
        
        {/* Section 1: Categories */}
        <section>
          <h3 className="text-[17px] font-bold text-slate-800 mb-4 tracking-tight">1. What would you like to evaluate?</h3>
          <div className="grid grid-cols-2 gap-3">
            {FEEDBACK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`flex flex-col items-center gap-3 p-5 rounded-[24px] border transition-all ${
                  selectedCat === cat.id 
                  ? `bg-white border-indigo-200 ring-4 ring-indigo-50 shadow-md` 
                  : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center shadow-sm border border-white`}>
                  <cat.icon size={22} />
                </div>
                <span className={`text-[13px] font-bold ${selectedCat === cat.id ? 'text-indigo-600' : 'text-slate-600'}`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section 2: Rating */}
        <section className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
          <h3 className="text-[17px] font-bold text-slate-800 mb-2 tracking-tight">2. Overall Experience</h3>
          <p className="text-[12px] text-slate-400 font-bold mb-6">How smooth was your voting journey?</p>
          
          <div className="flex justify-between px-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-2 transition-transform active:scale-90 ${rating >= star ? 'text-amber-400 scale-110' : 'text-slate-200'}`}
              >
                <Star size={32} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={2.5} />
              </button>
            ))}
          </div>
        </section>

        {/* Section 3: Detailed Feedback */}
        <section>
          <h3 className="text-[17px] font-bold text-slate-800 mb-4 tracking-tight">3. Describe the friction (Optional)</h3>
          <textarea
            placeholder="Tell us about any difficulties or suggestions..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 p-4 bg-white border border-slate-200 rounded-[24px] text-[15px] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-50 shadow-sm transition-all resize-none"
          />
        </section>

        {/* Info Card */}
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-[20px] flex items-start gap-3">
          <AlertCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
          <p className="text-[12px] text-orange-800 font-bold leading-relaxed">
            This information is for evaluation and feedback purposes only. For official complaints, please use the NGRS portal or contact 1950.
          </p>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          disabled={!rating && !comment}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-[16px] shadow-lg flex items-center justify-center gap-3 disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-[0.98] mb-10"
        >
          Submit Evaluation <Send size={18} />
        </button>
      </div>
    </main>
  );
};
