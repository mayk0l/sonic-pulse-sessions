
import { Card, CardContent } from '@/components/ui/card';
import { DjProfile } from '@/types/dj';

type ProfileMediaTabProps = {
  djProfile: DjProfile;
};

export function ProfileMediaTab({ djProfile }: ProfileMediaTabProps) {
  return (
    <div className="animate-fade-in">
      <Card className="glass border-neon-purple/20 mb-8">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-xl font-display mb-4">Live en Vivo</h3>
          <div className="aspect-video w-full overflow-hidden rounded-md">
            <iframe 
              className="w-full h-full"
              src={djProfile.youtubeEmbed} 
              title="YouTube video player" 
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass border-neon-purple/20">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-xl font-display mb-4">Último Set</h3>
          <div className="w-full h-80 overflow-hidden rounded-md">
            <iframe 
              className="w-full h-full"
              src={djProfile.soundcloudEmbed}
              title="SoundCloud Player"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
