import { useState } from 'react';
import { Shield, Users, BookOpen, FileText, Scale } from 'lucide-react';
import { SideNav } from './components/SideNav';
import { ContentPanel } from './components/ContentPanel';

export type TabId = 'about' | 'departments' | 'lectures' | 'statute';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <div className="size-full flex bg-[#0a0a0a]">
      <SideNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ContentPanel activeTab={activeTab} />
    </div>
  );
}
