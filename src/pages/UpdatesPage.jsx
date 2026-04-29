import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, 
  Bell, 
  Megaphone, 
  IdCard, 
  Users, 
  Globe, 
  User, 
  Monitor, 
  MessageSquare, 
  ClipboardCheck, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Building2,
  Box
} from 'lucide-react';
import updatesData from '../assets/updates.json';
import updatesHeroImg from '../assets/updates-hero.png';

const CATEGORIES = ['All', 'Elections', 'Announcements', 'Press Releases', 'Policy'];

const getCategoryInfo = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('election')) {
    return {
      label: 'ELECTIONS',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      dotColor: 'bg-emerald-500',
      icon: lowerTitle.includes('candidates') ? Users : (lowerTitle.includes('bye-election') ? Building2 : (lowerTitle.includes('slips') ? IdCard : Box))
    };
  }
  if (lowerTitle.includes('announce')) {
    return {
      label: 'ANNOUNCEMENTS',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      dotColor: 'bg-orange-500',
      icon: lowerTitle.includes('feedback') ? MessageSquare : Bell
    };
  }
  if (lowerTitle.includes('press') || lowerTitle.includes('notification')) {
    return {
      label: 'PRESS RELEASE',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      dotColor: 'bg-purple-500',
      icon: Megaphone
    };
  }
  if (lowerTitle.includes('platform') || lowerTitle.includes('ecinet')) {
    return {
      label: 'PLATFORM',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      dotColor: 'bg-blue-500',
      icon: Monitor
    };
  }
  if (lowerTitle.includes('rolls') || lowerTitle.includes('revision')) {
    return {
      label: 'ELECTIONS',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      dotColor: 'bg-emerald-500',
      icon: ClipboardCheck
    };
  }
  if (lowerTitle.includes('ievp') || lowerTitle.includes('global')) {
    return {
      label: 'ANNOUNCEMENTS',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      dotColor: 'bg-orange-500',
      icon: Globe
    };
  }
  if (lowerTitle.includes('observers')) {
    return {
      label: 'ANNOUNCEMENTS',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      dotColor: 'bg-orange-500',
      icon: User
    };
  }
  return {
    label: 'ANNOUNCEMENTS',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    dotColor: 'bg-orange-500',
    icon: Bell
  };
};

const UpdateCard = ({ update }) => {
  const info = getCategoryInfo(update.title);
  const Icon = info.icon;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-[20px] p-4 shadow-sm border border-slate-100 mb-4 transition-all hover:shadow-md hover:translate-y-[-2px] group">
      <div className="flex items-start gap-4">
        {/* Left Icon */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${info.bgColor} ${info.color}`}>
          <Icon size={22} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[10px] font-bold tracking-wider ${info.color}`}>
              {info.label}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
              <Calendar size={12} />
              <span>{formatDate(update.date)}</span>
            </div>
          </div>
          
          <h3 className="text-[15px] font-bold text-slate-800 leading-tight mb-3 line-clamp-2">
            {update.title}
          </h3>

          <div className="flex justify-end">
            <button 
              onClick={() => window.open(update.link, '_blank')}
              className="flex items-center gap-1 px-4 py-1.5 border border-indigo-100 rounded-full text-[12px] font-bold text-indigo-600 hover:bg-indigo-50 transition-colors group-hover:border-indigo-200"
            >
              View Details <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UpdatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const observerTarget = useRef(null);

  const filteredUpdates = useMemo(() => {
    let result = [...updatesData.updates];
    
    // Sort by date DESC
    result.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Filter by category
    if (activeFilter !== 'All') {
      result = result.filter(u => {
        const info = getCategoryInfo(u.title);
        if (activeFilter === 'Elections') return info.label === 'ELECTIONS';
        if (activeFilter === 'Announcements') return info.label === 'ANNOUNCEMENTS';
        if (activeFilter === 'Press Releases') return info.label === 'PRESS RELEASE';
        if (activeFilter === 'Policy') return info.label === 'POLICY';
        return true;
      });
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(u => u.title.toLowerCase().includes(q));
    }

    return result;
  }, [searchQuery, activeFilter]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visibleCount < filteredUpdates.length) {
          setVisibleCount(prev => prev + 4);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [visibleCount, filteredUpdates.length]);

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Header Section */}
      <div className="px-5 pt-8 pb-10 relative overflow-hidden bg-white">
        <div className="w-[65%] relative z-10">
          <h1 className="text-[32px] font-extrabold text-[#1A237E] leading-[1.1] tracking-tight">
            Updates
          </h1>
          <p className="text-[14px] text-slate-500 mt-3 max-w-[240px] leading-relaxed font-medium">
            Latest Updates from Election Commission of India
          </p>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-[-10px] w-[45%] h-[120%] pointer-events-none z-0">
          <img 
            src={updatesHeroImg} 
            alt="Updates Illustration" 
            className="w-full h-full object-contain object-right-top" 
          />
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative z-10 w-[50%]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search updates, announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white border border-slate-200 rounded-[20px] text-[15px] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="mt-6 flex overflow-x-auto gap-2 pb-2 -mx-5 px-5 scrollbar-hide no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold whitespace-nowrap transition-all border ${
                activeFilter === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 mt-6 flex flex-col min-h-[400px]">
        {filteredUpdates.length > 0 ? (
          <>
            {filteredUpdates.slice(0, visibleCount).map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
            
            {/* Observer Target */}
            <div ref={observerTarget} className="h-10 w-full flex items-center justify-center">
              {visibleCount < filteredUpdates.length && (
                <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-4">
              <Search size={32} />
            </div>
            <h3 className="font-bold text-slate-800 text-[16px]">No updates found</h3>
            <p className="text-[14px] text-slate-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 p-5 bg-[#F5F3FF] border border-indigo-100 rounded-[24px] flex items-center gap-5 shadow-sm relative overflow-hidden mb-10">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm relative z-10 flex-shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div className="relative z-10">
            <p className="text-[13px] font-medium text-indigo-900 leading-relaxed">
              Information provided as per the Representation of People Act, 1950 & 1951 and guidelines issued by the Election Commission of India.
            </p>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
            <Building2 size={100} className="text-indigo-900" />
          </div>
        </div>
      </div>
    </main>
  );
};
