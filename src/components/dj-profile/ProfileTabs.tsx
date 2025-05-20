
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DjProfile } from '@/types/dj';
import { ProfileBioTab } from './tabs/ProfileBioTab';
import { ProfileMediaTab } from './tabs/ProfileMediaTab';
import { ProfileContactTab } from './tabs/ProfileContactTab';
import { ProfileReviewsTab } from './tabs/ProfileReviewsTab';

type ProfileTabsProps = {
  djProfile: DjProfile;
};

type TabType = 'bio' | 'media' | 'reviews' | 'contact';

export function ProfileTabs({ djProfile }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('bio');
  
  return (
    <>
      {/* Content Tabs */}
      <section className="py-8 bg-techno-dark border-y border-gray-800">
        <div className="container">
          <div className="flex justify-center gap-4 overflow-x-auto no-scrollbar">
            <Button 
              variant={activeTab === 'bio' ? 'default' : 'ghost'} 
              className={activeTab === 'bio' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('bio')}
            >
              Biografía
            </Button>
            <Button 
              variant={activeTab === 'media' ? 'default' : 'ghost'} 
              className={activeTab === 'media' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('media')}
            >
              Media
            </Button>
            <Button 
              variant={activeTab === 'reviews' ? 'default' : 'ghost'} 
              className={activeTab === 'reviews' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('reviews')}
            >
              Reseñas
            </Button>
            <Button 
              variant={activeTab === 'contact' ? 'default' : 'ghost'} 
              className={activeTab === 'contact' ? 'bg-neon-purple text-black' : 'text-gray-300'} 
              onClick={() => setActiveTab('contact')}
            >
              Contacto
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tab Content */}
      <section className="py-12 bg-techno-darker">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'bio' && <ProfileBioTab djProfile={djProfile} />}
            {activeTab === 'media' && <ProfileMediaTab djProfile={djProfile} />}
            {activeTab === 'reviews' && <ProfileReviewsTab />}
            {activeTab === 'contact' && <ProfileContactTab />}
          </div>
        </div>
      </section>
    </>
  );
}
