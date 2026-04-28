import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header, Hero, ActionCardList, TrustBadge, UpdatesCard, Footer, FloatingAssistant } from './components';
import { ChatModal } from './components/ChatModal';
import { 
  RegisterVoterPage, 
  CheckVoterListPage, 
  UpdateDetailsPage, 
  VotingProcessPage, 
  HowElectionsWorkPage, 
  KeyTermsPage, 
  UpdatesPage, 
  ElectionParticipantsPage, 
  FallbackHelpPage 
} from './pages';

function HomePage() {
  const navigate = useNavigate();

  const handleAction = (actionName) => {
    switch(actionName) {
      case 'register': navigate('/register'); break;
      case 'check_name': navigate('/check'); break;
      case 'update_details': navigate('/update'); break;
      case 'voting_process': navigate('/vote-process'); break;
      case 'understand_elections': navigate('/learn'); break;
      case 'intent_input': 
        // This could directly open the chat modal if desired, but we'll let it be handled separately or pass a prop
        window.dispatchEvent(new CustomEvent('open-chat'));
        break;
      default: console.log(`Action triggered: ${actionName}`);
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <ActionCardList onAction={handleAction} />
      <TrustBadge />
      <UpdatesCard />
    </main>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to the custom event from ActionCardList
  React.useEffect(() => {
    const handleOpenChat = () => setIsChatOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  return (
    <div className="min-h-screen relative w-full bg-white flex justify-center">
      <div className="w-full max-w-[420px] bg-[#F9FAFB] min-h-screen relative shadow-2xl flex flex-col">
        <div className="px-5 flex-1 flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar">
          <Header />
          
          <div className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterVoterPage />} />
              <Route path="/check" element={<CheckVoterListPage />} />
              <Route path="/update" element={<UpdateDetailsPage />} />
              <Route path="/vote-process" element={<VotingProcessPage />} />
              <Route path="/learn" element={<HowElectionsWorkPage />} />
              <Route path="/terms" element={<KeyTermsPage />} />
              <Route path="/updates" element={<UpdatesPage />} />
              <Route path="/participants" element={<ElectionParticipantsPage />} />
              <Route path="/fallback" element={<FallbackHelpPage />} />
            </Routes>
          </div>
        </div>
        
        {location.pathname === '/' && <Footer />}
        <FloatingAssistant onClick={() => setIsChatOpen(true)} />
        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
}

export default App;
