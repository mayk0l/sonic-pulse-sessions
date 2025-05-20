
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { djProfiles } from '@/types/dj';
import { ProfileHero } from '@/components/dj-profile/ProfileHero';
import { ProfileTabs } from '@/components/dj-profile/ProfileTabs';
import { LiveRadioSection } from '@/components/dj-profile/LiveRadioSection';

export default function DjProfile() {
  const { id } = useParams<{ id: string }>();
  
  // Default to first DJ if ID not found
  const djProfile = id && djProfiles[id as keyof typeof djProfiles] 
    ? djProfiles[id as keyof typeof djProfiles]
    : djProfiles.nasac;

  return (
    <div className="min-h-screen bg-techno-darker">
      <Navbar />
      
      {/* Hero Section with DJ Profile */}
      <ProfileHero djProfile={djProfile} />
      
      {/* Content Tabs and Tab Content */}
      <ProfileTabs djProfile={djProfile} />
      
      {/* Live Radio */}
      <LiveRadioSection />
      
      <Footer />
    </div>
  );
}
