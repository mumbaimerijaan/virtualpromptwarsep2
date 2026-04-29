import React from 'react';
import { Home, Bell, MessageCircle, HelpCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export const BottomNav = ({ onOpenChat }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      id: 'updates',
      label: 'Updates',
      icon: Bell,
      path: ROUTES.UPDATES,
      isActive: location.pathname === ROUTES.UPDATES,
      onClick: () => navigate(ROUTES.UPDATES)
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: HelpCircle,
      path: ROUTES.FAQ,
      isActive: location.pathname === ROUTES.FAQ,
      onClick: () => navigate(ROUTES.FAQ)
    },
    {
      id: 'help',
      label: 'Ask AI',
      icon: MessageCircle,
      isActive: false,
      onClick: onOpenChat
    }
  ];

  return (
    <div className="bg-white border-t border-slate-100 flex justify-between items-center px-8 py-3 pb-safe shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)] mt-auto sticky bottom-0 z-40">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          className={`flex flex-col items-center gap-1.5 transition-colors ${
            item.isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
          }`}
          aria-label={item.label}
          aria-current={item.isActive ? "page" : undefined}
        >
          <item.icon 
            size={22} 
            strokeWidth={item.isActive ? 2.5 : 2} 
            className={item.isActive ? 'text-indigo-600' : ''} 
          />
          <span className={`text-[10px] font-medium ${item.isActive ? 'font-bold' : ''}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};
